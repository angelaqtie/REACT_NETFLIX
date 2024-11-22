import React from "react";
import Header from "../Header";
import NetflixBanner from "../NetflixBanner";
import TopMoviesSlider from "./TopMoviesSlider";
import KoreanDramaSlider from "./KoreanDramaSlider";

const Homepage = () => {
  return (
    <>
      <Header />
      <NetflixBanner
        img="banner.webp"
        time="2024 Anime 1h 54min"
        description1="Karasuno High School and Nekoma High School face each other in an official match for the first time ever, in the third round of the Spring Nationals."
        title="Haikyu"
        description2="VolleyBall"
      />
      <TopMoviesSlider />
      <KoreanDramaSlider />
    </>
  );
};

export default Homepage;
