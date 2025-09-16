Reglas sugeridas de Firestore (copiar en la consola de Firebase → Firestore Database → Rules)

Estas reglas asumen:

- Colección `clases/{claseId}/horarios/{horarioId}` con campos: `dia` (string), `hora` (string), `disponibilidad` (number), `reservas` (number).
- Colección `reservas/{reservaId}` con campos: `datos` (obj con nombre, apellido, email, telefono), `clase` (obj con nombre, dia, hora), `horarioRef` (string con path al doc del horario), `date` (timestamp servidor).
- Modo: lectura pública del catálogo de clases/horarios; creación de reservas pública (si querés restringir por auth, cambia `allow create` por `request.auth != null`).

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Lectura pública del catálogo
    match /clases/{claseId} {
      allow read: if true;

      match /horarios/{horarioId} {
        allow read: if true;

        // Escritura de reservas: solo via transacciones en backend/cliente, esta colección no se crea aquí
        allow write: if false;
      }
    }

    // Reservas
    match /reservas/{reservaId} {
      allow read: if request.auth != null || true; // o limita a auth si preferís

      allow create: if
        // Estructura mínima
        request.resource.data.keys().hasAll(['datos','clase','horarioRef','date']) &&
        request.resource.data.datos.keys().hasAll(['nombre','apellido','email','telefono']) &&
        request.resource.data.clase.keys().hasAll(['nombre','dia','hora']) &&

        // Tipos básicos
        request.resource.data.horarioRef is string &&
        request.resource.data.date is timestamp &&
        request.resource.data.datos.nombre is string &&
        request.resource.data.datos.apellido is string &&
        request.resource.data.datos.email is string &&
        request.resource.data.datos.telefono is string &&
        request.resource.data.clase.nombre is string &&
        request.resource.data.clase.dia is string &&
        request.resource.data.clase.hora is string &&

        // Longitudes razonables
        request.resource.data.datos.nombre.size() >= 2 && request.resource.data.datos.nombre.size() <= 60 &&
        request.resource.data.datos.apellido.size() >= 2 && request.resource.data.datos.apellido.size() <= 60 &&
        request.resource.data.datos.email.size() >= 5 && request.resource.data.datos.email.size() <= 120 &&
        request.resource.data.datos.telefono.size() >= 7 && request.resource.data.datos.telefono.size() <= 20;

      // Bloquear updates/deletes directos por ahora
      allow update, delete: if false;
    }

  }
}
```

Notas:

- Las reglas no pueden garantizar la cantidad de cupos por sí solas; por eso usamos transacciones. Las reglas cierran puertas obvias (estructura, tipos, rutas).
- Si querés requerir autenticación para crear reservas, cambia:
  - `allow create: if ...` por `allow create: if request.auth != null && (...)`.
- Si añadís cancelación de reservas, crea una Cloud Function o endpoint seguro que valide propietario/condiciones y haga la reversión del contador del horario.
