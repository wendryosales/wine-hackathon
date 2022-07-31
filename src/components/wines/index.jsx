import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import './style.css';
import Wines from './carouselWines';

export default function WinesList() {
  const winesList = useSelector(({ wines }) => wines);

  const settings = {
    dots: true,
    className: 'center',
    centerMode: false,
    infinite: false,
    centerPadding: '10%',
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  return (
    <div className="wines-container">
      <Slider {...settings}>
        {
              winesList.map((wine) => (
                <Wines key={wine.id} wine={wine} />
              ))
            }
      </Slider>
    </div>
  );
}
