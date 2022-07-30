// third import
import Slider from 'react-slick';

// banners
import banner1 from '../../static/images/banner/1.png';
import banner2 from '../../static/images/banner/2.png';
import banner3 from '../../static/images/banner/3.png';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <div className="Banner">
      <h2>Auto Play</h2>
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="banner 1" />
        </div>
        <div>
          <img src={banner2} alt="banner 2" />
        </div>
        <div>
          <img src={banner3} alt="banner 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
