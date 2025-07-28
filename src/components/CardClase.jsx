const CardClase = ({ clase }) => {
  return (
    <>
      <div className="relative rounded-md overflow-hidden w-95/100">
        <img
          src={clase.imagen}
          alt={clase.nombre}
          className="h-[300px] w-full object-cover align-top"
        />
        <h4 className="texto-banner cursor-pointer">{clase.nombre}</h4>
      </div>
    </>
  );
};

export default CardClase;
