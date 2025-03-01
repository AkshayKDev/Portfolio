import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import Image from "next/image";

const SkillsSlider = () => {
  return (
    <div className="overflow-hidden bg-gray-100 py-4 flex items-center relative">
      <motion.div
        className="flex space-x-4 min-w-max"
        initial={{ x: "0%" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <Image
            key={index}
            src={skill.img}
            alt=""
            width={96}
            height={96}
            className="w-24 h-24 object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSlider;
