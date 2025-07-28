const TestimonioCard = ({ testimonio }) => {
  return (
    <>
      <div className="w-[300px] p-4 border rounded-2xl text-white bg-gray-800">
        <p className="text-justify mb-4 text-base">{testimonio.mensaje}</p>
        <h4 className="text-center font-semibold">- {testimonio.nombre} -</h4>
      </div>
    </>
  );
};

export default TestimonioCard;
