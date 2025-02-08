import LoveCard from "./LoveCard";

const remembrances = ["Fig1", "Fig2", "Fig3", "Fig4"];

const WhyILoveYou = () => {
  return (
    <div>
      <p className="font-primary">Why I Love You.</p>
      <div className="p-5 border rounded-lg">
        {remembrances.map((remembrance) => {
          <LoveCard remembrance={remembrance} />;
        })}
      </div>
    </div>
  );
};

export default WhyILoveYou;
