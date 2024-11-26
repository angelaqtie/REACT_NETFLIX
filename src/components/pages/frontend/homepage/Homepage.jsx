import React from "react";
import Banner from "./Banner";
import SliderMovie from "./SliderMovie";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="mt-20 py-24 bg-dark">
        <SliderMovie title="International" filter="International" />
        <SliderMovie title="Disney" filter="Disney" />
        <SliderMovie title="Anime" filter="Anime" />
        <SliderMovie title="Kdrama" filter="Kdrama" />
      </div>
      <div className="h-[50vh]"></div>
    </div>
  );
};

export default Homepage;
