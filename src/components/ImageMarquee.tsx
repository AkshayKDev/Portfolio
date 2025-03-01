"use client";

import { skills } from "@/data/skills";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ImageMarquee = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate skills array to create a seamless loop
  // We need at least 2 copies to ensure the animation looks continuous
  const displaySkills = [...skills, ...skills];

  // Calculate the animation percentage based on the number of items
  // This ensures the animation moves exactly one set of items
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateAnimationDistance = () => {
    // Move by exactly the percentage that represents one full set of original items
    return [`0%`, `-${(skills.length / displaySkills.length) * 100}%`];
  };

  // Control animation based on view and pause state
  useEffect(() => {
    if (isInView && !isPaused) {
      controls.start({
        x: calculateAnimationDistance(),
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      });
    } else {
      // Just pause the animation without resetting position
      controls.stop();
    }
  }, [isInView, isPaused, controls, calculateAnimationDistance]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center overflow-hidden w-full py-16 md:py-24"
    >
      {/* Background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50 opacity-90"></div>

      {/* Title section */}
      <div className="text-center mb-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto px-8 lg:px-4">
          Expertise across various tools and technologies that power modern
          development
        </p>
      </div>

      {/* Enhanced edge fade effect */}
      <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white via-blue-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white via-blue-50 to-transparent z-10"></div>

      {/* Main marquee container */}
      <div
        className="relative w-full overflow-hidden max-w-7xl px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* The outer container ensures proper sizing */}
        <div className="relative overflow-hidden">
          {/* The inner container includes duplicated content for seamless animation */}
          <motion.div
            className="flex space-x-8 md:space-x-12 w-max"
            animate={controls}
            style={{ display: "flex", whiteSpace: "nowrap" }}
          >
            {displaySkills.map((displaySkill, index) => {
              return (
                <motion.div
                  key={`${displaySkill.id}-${index}`}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative flex-shrink-0 group cursor-pointer"
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <Image
                      src={displaySkill.img}
                      alt=""
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 6rem, (max-width: 1024px) 8rem, 10rem"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImageMarquee;
