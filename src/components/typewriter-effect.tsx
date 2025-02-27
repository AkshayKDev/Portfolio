"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: string[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!isDeleting && currentText === words[currentWordIndex]) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
        return;
      }

      setCurrentText((prevText) =>
        isDeleting
          ? prevText.slice(0, -1)
          : words[currentWordIndex].slice(0, prevText.length + 1)
      );
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <span className={cn("inline-block", className)}>
      {currentText}
      <span className={cn("ml-1 animate-blink", cursorClassName)}>|</span>
    </span>
  );
};
