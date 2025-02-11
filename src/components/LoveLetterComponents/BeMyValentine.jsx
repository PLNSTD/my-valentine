import { useState } from "react";
import PropTypes from "prop-types";

const BeMyValentine = ({ setAnswer }) => {
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  const yesBtnStyle =
    "  z-20 hover:cursor-pointer transform transition-transform duration-1000 ease-in-out";
  const noBtnStyle =
    " z-20 hover:cursor-pointer transform transition-transform duration-1000 ease-in-out";

  const handleNoClick = () => {
    setSizeMultiplier((c) => c + 0.5);
  };

  return (
    <>
      <p className="text-2xl font-bold text-pink-600">
        Will you be my Valentine?
      </p>
      <div className="w-full flex flex-row justify-center gap-5 items-center">
        <button
          className={
            yesBtnStyle +
            " border-b-2 border-[#88e788]" +
            `${sizeMultiplier > 2 ? " w-full" : ""}`
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
            className={noBtnStyle + ` border-b-2 border-[#cd1c18]`}
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
    </>
  );
};

BeMyValentine.propTypes = {
  setAnswer: PropTypes.func,
};

export default BeMyValentine;
