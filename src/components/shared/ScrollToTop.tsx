"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-10 right-10  text-blue-600 border-[3px] border-blue-600 dark:text-white dark:border-white rounded-full p-2 cursor-pointer shadow-lg"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.1 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowBigUp className="" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
