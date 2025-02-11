import PropTypes from "prop-types";

const LoveCard = ({ imgUrl, onClick }) => {
  return (
    <div
      className="w-24 h-28 bg-white shadow-md rounded-md overflow-hidden remembrance flex flex-row justify-center items-center duration-300 ease-in-out -rotate-10 hover:rotate-0 hover:scale-130 hover:cursor-pointer z-10"
      onClick={onClick}
    >
      <img
        src={imgUrl}
        alt="Memory"
        className="w-[80%] h-[70%] object-cover rounded-sm mb-4"
      />
    </div>
  );
};

LoveCard.propTypes = {
  imgUrl: PropTypes.string,
  onClick: PropTypes.func,
};

export default LoveCard;
