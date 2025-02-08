import PropTypes from "prop-types";

const LoveCard = ({ remembrance }) => {
  return <div>{remembrance}</div>;
};

LoveCard.propTypes = {
  remembrance: PropTypes.string,
};

export default LoveCard;
