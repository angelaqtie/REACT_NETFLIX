import React from "react";
import { imgPath } from "../../helpers/functions-general";

const TopMovies = ({ item, key }) => {
  return (
    <section>
      <div className=" py-5">
        <div className=" ">
          <img
            src={`${imgPath}/${item.image}`}
            alt=""
            className="object-cover h-[450px] px-5"
          />
        </div>
      </div>
    </section>
  );
};

export default TopMovies;
