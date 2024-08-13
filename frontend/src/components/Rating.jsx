import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Rating = ({ value, text }) => {
  return (
    <div>
      <span className="rating">
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating">
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating">
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating">
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating">
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaRegStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
};

export default Rating;
