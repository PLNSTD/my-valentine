import PropTypes from "prop-types";

const LoveCard = ({ remembrance, onClick }) => {
  return (
    <div
      className="remembrance flex flex-row items-center duration-300 ease-in-out hover:scale-150 hover:cursor-pointer"
      onClick={onClick}
    >
      <p className="w-full flex justify-center">{remembrance}</p>
    </div>
  );
};

LoveCard.propTypes = {
  remembrance: PropTypes.string,
  onClick: PropTypes.func,
};

export default LoveCard;
