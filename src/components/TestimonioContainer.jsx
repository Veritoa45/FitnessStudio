import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonioCard from "./TestimonioCard";
import LineaCorta from "./LineaCorta";
import testimonios from "../mock/testimonios.json";

const TestimonioContainer = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(4);
      } else if (width >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const start = index * itemsPerPage;
  const visibleItems = testimonios.slice(start, start + itemsPerPage);

  const totalPages = Math.ceil(testimonios.length / itemsPerPage);

  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <section id="testimonios" className="mt-[60px] mb-[60px]">
      <LineaCorta />
      <h2 className="text-center text-2xl italic">Testimonios</h2>
      <LineaCorta />
      <div className="flex flex-col items-center mt-[40px]">
        <div className="relative w-full min-h-[200px] overflow-hidden px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 justify-center"
            >
              {visibleItems.map((testimonio, i) => (
                <TestimonioCard key={i} testimonio={testimonio} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonioContainer;
