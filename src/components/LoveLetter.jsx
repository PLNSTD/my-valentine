import { useState } from "react";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState("No");
  const [sizeMultiplier, setSizeMultiplier] = useState(1);

  const yesBtnStyle = "z-20 hover:cursor-pointer";
  const noBtnStyle = "z-20 hover:cursor-pointer";

  const handleNoClick = () => {
    setSizeMultiplier((c) => c + 0.5);
  };

  const handleOpenLetter = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className="w-3/4 mt-40 flex items-start justify-center">
      <div
        className={`relative bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-800 ease-in-out hover:rotate-0 hover:scale-110 ${
          isOpen ? "rotate-0 scale-100" : "rotate-6 scale-90"
        }`}
        style={{ maxWidth: "400px", cursor: isOpen ? "default" : "pointer" }}
        {...(isOpen ? {} : { onClick: handleOpenLetter })}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white border-2 border-pink-200 rounded-lg"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-pink-600 mb-4">My Dearest,</h1>
          <p className="text-gray-700 mb-4">
            Every moment with you feels like a dream. Your smile lights up my
            world, and your laughter is my favorite melody.
          </p>
          {isOpen && (
            <div className="mt-4">
              <p className="text-gray-700 mb-4">
                This Valentines&apos;s Day, I want to ask you something...
              </p>
              <p className="text-2xl font-bold text-pink-600">
                Will you be my Valentine?
              </p>
              <div className="w-full flex flex-row justify-center gap-5 items-center">
                <button
                  className={
                    yesBtnStyle +
                    `${
                      sizeMultiplier > 2
                        ? " w-full border-b-2 border-[#88e788]"
                        : ""
                    }`
                  }
                  style={{ fontSize: `${14 * sizeMultiplier}px` }}
                  onClick={() => {
                    console.log("Clicked Yes");
                    setAnswer("Yes");
                  }}
                >
                  Yes
                </button>
                {sizeMultiplier <= 2 ? (
                  <button
                    className={noBtnStyle}
                    style={{ fontSize: `${14 / sizeMultiplier}px` }}
                    onClick={() => {
                      console.log("Clicked No");
                      handleNoClick();
                      setAnswer("No");
                    }}
                  >
                    No
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
