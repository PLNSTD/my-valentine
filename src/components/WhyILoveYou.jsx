import { useState } from "react";
import LoveCard from "./LoveCard";
import Polaroid from "./Polaroid";

const remembrances = ["Fig1", "Fig2", "Fig3", "Fig4"];

const WhyILoveYou = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardDescription, setCardDescription] = useState(null);

  return (
    <div className="w-1/4 h-full">
      <p className="font-primary">Why I Love You.</p>
      <div className="relative h-full p-5 border rounded-lg flex flex-col">
        <div className="absolute inset-0 flex justify-center items-centeropacity-20">
          <img
            src="/assets/images/cupid.png"
            alt="cupid image"
            className="w-full h-full object-cover"
          />
        </div>
        {remembrances.map((remembrance, index) => (
          <LoveCard
            key={index}
            remembrance={remembrance}
            onClick={() => {
              setIsCardOpen((c) => !c);
              setCardDescription(remembrance);
            }}
          />
        ))}
      </div>
      {isCardOpen && (
        <Polaroid
          cardDescription={cardDescription}
          closeCard={() => setIsCardOpen((c) => !c)}
        />
      )}
    </div>
  );
};

export default WhyILoveYou;
