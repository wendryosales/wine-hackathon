import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import Card from './cards/card';
import './style.css';

export default function WinesList() {
  const winesList = useSelector(({ wines }) => wines);

  const settings = {
    dots: true,
    className: 'center',
    centerMode: false,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
  };
  return (
    <div className="wines-container">
      <Slider {...settings}>
        {
              winesList.map((wine) => (
                <Card key={`${wine.name}${wine.id}`} wine={wine} />
              ))
            }
      </Slider>
    </div>
  );
}
