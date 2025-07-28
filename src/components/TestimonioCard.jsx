import testimonios from "../mock/testimonios.json";

const TestimonioCard = () => {
  return (
    <>
      {testimonios.map((testimonio) => (
        <div key={testimonio.id}>
          <p className="text-justify text-sm mb-4">{testimonio.mensaje}</p>
          <h4 className="text-center font-semibold">- {testimonio.nombre} -</h4>
        </div>
      ))}
    </>
  );
};

export default TestimonioCard;
