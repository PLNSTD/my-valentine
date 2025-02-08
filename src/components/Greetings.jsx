import { useState, useEffect } from "react";

const greetingsStyle = "h-full font-primary text-8xl";

const Greetings = () => {
  const [text, setText] = useState("Hi Franci");
  //   const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const phrases = ["Hi Franci", "Ciao amore mio bellissimo", "Ti ametti!"];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      if (isDeleting) {
        // Delete characters
        setText(currentPhrase.substring(0, currentCharIndex - 1));
        currentCharIndex--;
      } else {
        // Add characters
        setText(currentPhrase.substring(0, currentCharIndex + 1));
        currentCharIndex++;
      }

      // Switch between typing and deleting
      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Pause at the end of the phrase
        setTimeout(() => (isDeleting = true), 1000); // 1-second pause
      } else if (isDeleting && currentCharIndex === 0) {
        // Move to the next phrase
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }

      // Set typing speed
      const typingSpeed = isDeleting ? 50 : 150; // Adjust speed here
      setTimeout(type, typingSpeed);
    };

    type();
  }, []);

  return (
    <div id="greetings" className={greetingsStyle}>
      <p className="flex justify-center">
        {text}
        <span className="blinking-cursor">|</span> {/* Blinking cursor */}
      </p>
    </div>
  );
};

export default Greetings;
