"use client";

import { skills } from "@/data/skills";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ImageMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  // Duplicate skills for continuous loop
  const displaySkills = [...skills, ...skills];

  const animationDistance = `-${(skills.length / displaySkills.length) * 100}%`;

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
        duration: 40,
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
          Skills & Technologies
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full mb-5"></div>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 px-4">
          Expertise across various tools and technologies that power modern
          development
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
          {displaySkills.map((skill, index) => (
            <div
              key={`${skill.id}-${index}`}
              className="flex flex-col items-center justify-center relative flex-shrink-0"
            >
              {/* Skill image */}
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 relative">
                <Image
                  src={skill.img || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-contain"
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

// "use client";

// import { skills } from "@/data/skills";
// import { motion, useAnimation, useInView } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// const ImageMarquee = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, amount: 0.2 });
//   const controls = useAnimation();
//   const [isPaused, setIsPaused] = useState(false);

//   const displaySkills = [...skills, ...skills];

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const calculateAnimationDistance = () => {
//     return [`0%`, `-${(skills.length / displaySkills.length) * 100}%`];
//   };

//   useEffect(() => {
//     if (isInView && !isPaused) {
//       controls.start({
//         x: calculateAnimationDistance(),
//         transition: {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 30,
//           ease: "linear",
//         },
//       });
//     } else {
//       controls.stop();
//     }
//   }, [isInView, isPaused, controls, calculateAnimationDistance]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative flex flex-col items-center justify-center overflow-hidden w-full py-16 md:py-24"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50 opacity-90"></div>
//       <div className="text-center mb-6 relative z-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
//           Skills & Technologies
//         </h2>
//         <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
//         <p className="text-gray-600 max-w-2xl mx-auto px-8 lg:px-4">
//           Expertise across various tools and technologies that power modern
//           development
//         </p>
//       </div>
//       <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white via-blue-50 to-transparent z-10"></div>
//       <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white via-blue-50 to-transparent z-10"></div>
//       <div
//         className="relative w-full overflow-hidden max-w-7xl px-4"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <div className="relative overflow-hidden">
//           <motion.div
//             className="flex space-x-8 md:space-x-12 w-max"
//             animate={controls}
//             style={{ display: "flex", whiteSpace: "nowrap" }}
//           >
//             {displaySkills.map((displaySkill, index) => {
//               return (
//                 <motion.div
//                   key={`${displaySkill.id}-${index}`}
//                   className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative flex-shrink-0 group cursor-pointer"
//                   whileHover={{
//                     y: -8,
//                     scale: 1.05,
//                     transition: { type: "spring", stiffness: 400, damping: 10 },
//                   }}
//                 >
//                   <div className="absolute inset-0 flex items-center justify-center p-4">
//                     <Image
//                       src={displaySkill.img}
//                       alt=""
//                       fill
//                       className="object-contain p-4"
//                       sizes="(max-width: 768px) 6rem, (max-width: 1024px) 8rem, 10rem"
//                     />
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageMarquee;
