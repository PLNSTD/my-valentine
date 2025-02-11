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
    imgCaption:
      "Among all the wonders in that museum, you were the most captivating exhibit of all.",
  },
  {
    imgUrl: accomplishmentsImg,
    imgCaption:
      "You illuminate my accomplishements, no matter how small, and fill me with pride in every little victory.",
  },
  {
    imgUrl: peaceImg,
    imgCaption:
      "You bring peace into my world, ignite hope within me, and turn every gray into golden sunlight",
  },
  {
    imgUrl: distanceImg,
    imgCaption:
      "You shaped my mind, empowering me to overcome any distance. With each passing day, I fall deeper in Love",
  },
];

const WhyILoveYou = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [imgCaption, setImgCaption] = useState(null);

  return (
    <div className="w-1/4 h-full">
      <p className="font-primary">Let me remind you, why I Love You.</p>
      <div className="relative h-full p-5 border rounded-lg flex flex-col justify-center items-center gap-4">
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
            imgUrl={remembrance.imgUrl}
            onClick={() => {
              setIsCardOpen((c) => !c);
              setImgUrl(remembrance.imgUrl);
              setImgCaption(remembrance.imgCaption);
            }}
          />
        ))}
      </div>
      {isCardOpen && (
        <Polaroid
          imgUrl={imgUrl}
          imgCaption={imgCaption}
          closeCard={() => setIsCardOpen((c) => !c)}
        />
      )}
    </div>
  );
};

export default WhyILoveYou;
