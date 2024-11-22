import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopMovies from "./TopMovies";
import Slider from "react-slick";

const TopMoviesSlider = () => {
  const topMoviesSlider = [
    {
      image: "movie-1.jpeg",
      title: "Unhappy For You",
    },
    {
      image: "movie-2.webp",
      title: "Inside Out 2",
    },
    {
      image: "movie-3.jpg",
      title: "Bird Box",
    },
    {
      image: "movie-4.jpg",
      title: "Miller's Girl",
    },
    {
      image: "movie-5.jpg",
      title: "Paradise",
    },
    {
      image: "movie-6.jpg",
      title: "Moana",
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
      <div className=" py-10">
        <div className="px-8">
          <h2 className="text-white ">Korean Drama</h2>
        </div>
        <div className="px-9 gap-10">
          <Slider {...settings}>
            {topMoviesSlider.map((item, key) => (
              <TopMovies item={item} key={key} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TopMoviesSlider;
