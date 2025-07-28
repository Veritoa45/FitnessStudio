import LineaCorta from "./LineaCorta";

const GaleriaGrid = () => {
  const imagenes = [
    "src/assets/foto1.jpg",
    "src/assets/foto2.jpg",
    "src/assets/foto3.jpg",
    "src/assets/foto4.jpg",
    "src/assets/foto5.jpg",
    "src/assets/foto6.jpg",
    "src/assets/foto7.jpg",
    "src/assets/foto8.jpg",
    "src/assets/foto9.jpg",
    "src/assets/foto10.jpg",
    "src/assets/foto11.jpg",
    "src/assets/foto12.jpg",
  ];

  return (
    <>
      <LineaCorta />
      <h2 className="text-center text-2xl italic">Galería</h2>
      <LineaCorta />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[10px] pt-[40px] my-[15px] mx-auto overflow-hidden">
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            className="w-full align-top h-[300px] object-cover"
          />
        ))}
      </div>
    </>
  );
};

export default GaleriaGrid;
