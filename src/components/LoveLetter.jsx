import { useState } from "react";
import BeMyValentine from "./LoveLetterComponents/BeMyValentine";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState("No");

  const handleOpenLetter = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className="w-3/4 mt-20 flex items-start justify-center">
      <div
        className={`relative bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-800 ease-in-out hover:rotate-0 hover:scale-110 ${
          isOpen ? "rotate-0 scale-100" : "rotate-6 scale-90"
        }`}
        style={{ maxWidth: "400px", cursor: isOpen ? "default" : "pointer" }}
        {...(isOpen ? {} : { onClick: handleOpenLetter })}
      >
        {answer === "No" ? (
          <>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white border-2 border-pink-200 rounded-lg"></div>
            <div className="relative z-10">
              <h1 className="text-2xl font-bold text-pink-600 mb-4">
                My Dearest,
              </h1>
              <p className="text-gray-700 mb-4">
                Every moment with you feels like a dream. Your smile lights up
                my world, and your laughter is my favorite melody.
              </p>
              {isOpen && (
                <div className="mt-4">
                  <p className="text-gray-700 mb-4">
                    This Valentines&apos;s Day, I want to ask you something...
                  </p>
                  <BeMyValentine
                    setAnswer={(val) => {
                      setAnswer(val);
                    }}
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <p className="text-lg font-primary text-center">
              I had not doubts.. <br /> <br />
              A parte gli scherzi, so che questo non è un regalo fancy né una
              collana costosa. Sappi che l’ho fatto dal profondo del mio cuore.
              Ho sempre voluto avere la capacità di creare qualcosa per te, ed
              ora ce l’ho. Spero ti sia piaciuto. <br /> <br />
              Tu sei rimasta costante in questa relazione, mentre io sono
              cambiato e sto cambiando—in meglio, per me, per te e per noi.{" "}
              <br />
              <br />
            </p>
            <p className="font-primary">
              Love, il tuo <span className="text-xl">Pi</span>
            </p>
            <p className=" p-1 text-right rotate-10">Pizza il 14?</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoveLetter;
