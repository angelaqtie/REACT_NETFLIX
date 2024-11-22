import React from "react";
import KoreanDrama from "./KoreanDrama";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const KoreanDramaSlider = () => {
  const koreanDramaSlider = [
    {
      image: "kdrama-1.jpg",
    },
    {
      image: "kdrama-2.jpg",
    },
    {
      image: "kdrama-3.jpg",
    },
    {
      image: "kdrama-4.jpg",
    },
    {
      image: "kdrama-6.webp",
    },
    {
      image: "kdrama-5.jpg",
    },
  ];
  var settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
  };

  return (
    <section>
      <div className=" py-5">
        <div className="px-8">
          <h2 className="text-white ">Top Movies</h2>
        </div>
        <div className="px-9 gap-10">
          <Slider {...settings}>
            {koreanDramaSlider.map((item, key) => (
              <KoreanDrama item={item} key={key} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default KoreanDramaSlider;
