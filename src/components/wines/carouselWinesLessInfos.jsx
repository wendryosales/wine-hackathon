import PropTypes from 'prop-types';

export default function Wines(
  {
    wine: {
      image, name, rating, avaliations, type,
    },
  },
) {
  return (
    <div className="wine-container">
      <img src={image} alt={name} />
      <div className="wine-avaliation">
        <p>{ rating }</p>
        <p>{ avaliations }</p>
        <p>{ type }</p>
      </div>
    </div>
  );
}

Wines.propTypes = {
  wine: PropTypes.objectOf(PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    avaliations: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};
