import React, { useState, useEffect, useRef } from "react";
import RevealOnScroll from "../RevealOnScroll";

const Typewriter = () => {
  const words = [
    "React Developer",
    "Full-Stack Developer",
    "ML Engineer",
    "Python Developer",
  ];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let updatedText = "";
    let nextCharIndex = charIndex;
    let nextIsDeleting = isDeleting;
    let nextWordIndex = wordIndex;
    let delay = 100;

    if (isDeleting) {
      updatedText = currentWord.substring(0, charIndex - 1);
      nextCharIndex = charIndex - 1;
      if (nextCharIndex === 0) {
        nextIsDeleting = false;
        nextWordIndex = (wordIndex + 1) % words.length;
        delay = 500;
      }
    } else {
      updatedText = currentWord.substring(0, charIndex + 1);
      nextCharIndex = charIndex + 1;
      if (nextCharIndex === currentWord.length) {
        nextIsDeleting = true;
        delay = 1000;
      }
    }

    setText(updatedText);

    timeoutRef.current = setTimeout(() => {
      setCharIndex(nextCharIndex);
      setIsDeleting(nextIsDeleting);
      setWordIndex(nextWordIndex);
    }, delay);

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <RevealOnScroll>
      <div className="w-full h-full flex justify-center items-center pt-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white underline">
          {text}
        </h1>
      </div>
    </RevealOnScroll>
  );
};

export default Typewriter;
