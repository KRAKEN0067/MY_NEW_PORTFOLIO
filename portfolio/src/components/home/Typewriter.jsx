import React, { useState, useEffect, useRef } from "react";
import RevealOnScroll from "../global/RevealOnScroll";

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
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let updatedText = "";
    let nextCharIndex = charIndex;
    let nextIsDeleting = isDeleting;
    let nextWordIndex = wordIndex;
    let delay = 80; // Faster typing

    if (isDeleting) {
      updatedText = currentWord.substring(0, charIndex - 1);
      nextCharIndex = charIndex - 1;
      if (nextCharIndex === 0) {
        nextIsDeleting = false;
        nextWordIndex = (wordIndex + 1) % words.length;
        delay = 800; // Pause before next word
      }
    } else {
      updatedText = currentWord.substring(0, charIndex + 1);
      nextCharIndex = charIndex + 1;
      if (nextCharIndex === currentWord.length) {
        nextIsDeleting = true;
        delay = 1500; // Pause at end of word
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
      <div className="w-full h-full flex flex-col justify-center items-center pt-8 space-y-8">
        {/* Main Typewriter Container */}
        <div className="relative group">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-green-400/10 to-green-500/20 rounded-2xl blur-3xl scale-110 group-hover:scale-125 transition-transform duration-1000"></div>
          
          {/* Main content container */}
          <div className="relative bg-black/20 backdrop-blur-sm border border-green-500/30 rounded-2xl px-10 py-8 shadow-2xl hover:border-green-400/50 transition-all duration-500 group-hover:shadow-green-500/25">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
              <span className="inline-block">
                <span className="text-green-400 font-mono transition-all duration-300 group-hover:text-green-300">[</span>
                <span className="relative">
                  {text}
                  {/* Enhanced blinking cursor */}
                  <span 
                    className="absolute right-0 top-0 w-1.5 h-full bg-green-400 rounded-sm cursor-blink glow-pulse"
                  />
                </span>
                <span className="text-green-400 font-mono transition-all duration-300 group-hover:text-green-300">]</span>
              </span>
            </h1>
          </div>
        </div>

        {/* Subtitle with enhanced animated gradient */}
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
          <p className="text-lg md:text-xl text-gray-300 font-medium animate-text-gradient">
            Crafting digital experiences with code
          </p>
        </div>

        {/* Enhanced decorative elements with floating animations */}
        <div className="flex space-x-3 mt-6">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-float shadow-lg shadow-green-400/50"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-float-delay-1 shadow-lg shadow-green-500/50"></div>
          <div className="w-3 h-3 bg-green-600 rounded-full animate-float-delay-2 shadow-lg shadow-green-600/50"></div>
        </div>

        {/* Additional decorative line */}
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60"></div>
      </div>
    </RevealOnScroll>
  );
};

export default Typewriter;
