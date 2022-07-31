import PropTypes from 'prop-types';

// icons
import { BsStar } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';

import './card.css';

export default function Card(
  {
    wine: {
      image, name, rating, avaliations, price,
    },
  },
) {
  return (
    <div className="card-container">
      <img src={image} alt={name} />
      <div className="card-details">
        <div className="name-container"><p>{ name }</p></div>
        <div className="card-avaliation">
          <BsStar />
          <div>{ rating.toFixed(1) }</div>
          <div>
            (
            { !avaliations ? 0 : avaliations }
            )
          </div>
        </div>
        <p className="card-price">
          R$
          { price }
        </p>
        <HiPlus className="cart-icon" />
      </div>
    </div>
  );
}

Card.propTypes = {
  wine: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    avaliations: PropTypes.number,
    price: PropTypes.number.isRequired,
  }),
};

Card.defaultProps = {
  wine: {
    avaliations: 0,
  },
};
