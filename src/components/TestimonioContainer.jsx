import TestimonioCard from "./TestimonioCard";
import LineaCorta from "./LineaCorta";

const TestimonioContainer = () => {
  return (
    <section id="testimonios">
      <LineaCorta />
      <h2 className="text-center text-2xl italic">Testimonios</h2>
      <LineaCorta />
      <div className="">{<TestimonioCard />}</div>
    </section>
  );
};

export default TestimonioContainer;
