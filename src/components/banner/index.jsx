// third import
import Slider from 'react-slick';

// banners
import banner1 from '../../static/images/banner/1.png';
import banner2 from '../../static/images/banner/2.png';
import banner3 from '../../static/images/banner/3.png';

// css
import './style.css';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="banner">
      <div className="banner-container">
        <Slider {...settings}>
          <div className="banner-image">
            <img className="banner-image" src={banner1} alt="banner 1" />
          </div>
          <div className="banner-image">
            <img src={banner2} alt="banner 2" />
          </div>
          <div className="banner-image">
            <img src={banner3} alt="banner 3" />
          </div>
        </Slider>
      </div>

    </div>
  );
}

export default Banner;
