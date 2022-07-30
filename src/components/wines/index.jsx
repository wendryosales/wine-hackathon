import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import './style.css';

export default function WinesList() {
  const winesList = useSelector(({ wines }) => wines);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: false,
    centerPadding: '60px',
    slidesToShow: 7,
    slidesToScroll: 7,
    // speed: 5000,
    rows: 5,
    slidesPerRow: 5,
  };
  return (
    <div>
      <Slider {...settings}>
        <section className="winesList">
          {
              winesList.map(({
                image, name, price, discount, priceMember,
                priceNonMember, type, rating, avaliations,
              }) => (
                <div className="wine-container">
                  <img src={image} alt={name} />
                  <div className="wine-avaliation">
                    <p>{ rating }</p>
                    <p>{ avaliations }</p>
                    <p>{ type }</p>
                  </div>
                  <div className="wine-prices">
                    <p>{ price }</p>
                    <p>{ discount }</p>
                    <p>{ priceMember }</p>
                    <p>{ priceNonMember }</p>
                  </div>
                </div>
              ))
            }
        </section>
      </Slider>
    </div>
  );
}
