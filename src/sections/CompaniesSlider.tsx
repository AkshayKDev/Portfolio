"use client";

import { companies } from "@/data/Companies";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ImageMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  // Duplicate skills for continuous loop
  const displayCompanies = [...companies, ...companies];

  const animationDistance = `-${
    (companies.length / displayCompanies.length) * 100
  }%`;

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: animationDistance,
        transition: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, controls, animationDistance]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: animationDistance,
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center overflow-hidden w-full py-16 md:py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50"
    >
      {/* Section header */}
      <div className="text-center mb-10 relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display text-gray-800">
        🚀 Clients & Collaborations
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full mb-5"></div>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 px-4">
          Proudly partnering with diverse companies to deliver innovative
          solutions and drive success.
        </p>
      </div>

      {/* Gradient fades on sides */}
      <div className="absolute left-0 top-0 h-full w-10 z-10 bg-gradient-to-r from-white via-blue-50 to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-10 z-10 bg-gradient-to-l from-white via-blue-50 to-transparent"></div>

      {/* Marquee container */}
      <div
        className="relative w-full overflow-hidden max-w-7xl px-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Skills carousel"
      >
        <motion.div
          className="flex space-x-8 md:space-x-12 w-max"
          animate={controls}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {displayCompanies.map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              className="flex flex-col items-center justify-center relative flex-shrink-0"
            >
              {/* Skill image */}
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 relative">
                <Image
                  src={company.img || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-contain rounded-2xl"
                  sizes="(max-width: 768px) 6rem, (max-width: 1024px) 8rem, 9rem"
                />
              </div>

              {/* Skill name */}
              {/* <div className="mt-3 text-center font-medium text-sm md:text-base text-gray-700">
                {skill.name}
              </div> */}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ImageMarquee;
