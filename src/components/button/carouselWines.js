import { useSelector } from "react-redux";
import Slider from "react-slick";

export default function WinesList() {
  const wines = useSelector( ({ wines }) => wines);

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 5,
      slidesPerRow: 5
    };
    return (
      <div>
        <Slider {...settings}>
          <section>
            {
              wines.map(({
                 image, name, price, discount, priceMember, 
                 priceNonMember, type, rating, avaliations
                }) =>{
                <div>
                  <img src={ image } alt={ name }/>
                  <div>
                  <p>{ rating }</p>
                  <p>{ avaliations }</p>
                  <p>{ type }</p>
                  </div>
                  <div>
                    <p>{ price }</p>
                    <p>{ discount }</p>
                    <p>{ priceMember }</p>
                    <p>{ priceNonMember }</p> 
                  </div>
                </div>
              })
            }
          </section>
        </Slider>
      </div>
    );
}