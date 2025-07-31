import CardClase from "./CardClase";

const ClasesList = ({ datos }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[10px] pt-[20px] my-[15px] mx-auto">
      {datos.map((clase) => (
        <CardClase key={clase.id} clase={clase} />
      ))}
    </div>
  );
};

export default ClasesList;
