const CardClase = ({ clase }) => {
  const { nombre, imagen } = clase;

  return (
    <>
      <div className="relative rounded-md overflow-hidden w-95/100">
        <img
          src={imagen}
          alt={nombre}
          className="h-[300px] w-full object-cover align-top"
        />
        <h4 className="texto-banner cursor-pointer">{nombre}</h4>
      </div>
    </>
  );
};

export default CardClase;
