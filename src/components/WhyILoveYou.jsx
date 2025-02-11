import { useState } from "react";
import cupidIcon from "../assets/images/cupid.png";
import exhibitImg from "../assets/images/exhibit.jpg";
import accomplishmentsImg from "../assets/images/accomplishments.jpg";
import peaceImg from "../assets/images/peace.jpg";
import distanceImg from "../assets/images/distance.jpg";
import LoveCard from "./LoveCard";
import Polaroid from "./Polaroid";

// const remembrances = ["Fig1", "Fig2", "Fig3", "Fig4"];
const remembrances = [
  {
    imgUrl: exhibitImg,
    imgDescription:
      "Among all the wonders in that museum, you were the most captivating exhibit of all.",
  },
  {
    imgUrl: accomplishmentsImg,
    imgDescription:
      "You illuminate my accomplishements, no matter how small, and fill me with pride in every little victory.",
  },
  {
    imgUrl: peaceImg,
    imgDescription:
      "You bring peace into my world, ignite hope within me, and turn every gray into golden sunlight",
  },
  {
    imgUrl: distanceImg,
    imgDescription:
      "You shaped my mind, empowering me to overcome any distance. With each passing day, I fall deeper in Love",
  },
];

const WhyILoveYou = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardDescription, setCardDescription] = useState(null);

  return (
    <div className="w-1/4 h-full">
      <p className="font-primary">Why I Love You.</p>
      <div className="relative h-full p-5 border rounded-lg flex flex-col">
        <div className="absolute inset-0 flex justify-center items-center opacity-20 z-0">
          <img
            src={cupidIcon}
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
