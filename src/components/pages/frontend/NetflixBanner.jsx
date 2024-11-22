import React from "react";
import { imgPath } from "../../helpers/functions-general";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const NetflixBanner = ({ img, time, description1, description2, title }) => {
  return (
    <div>
      <div className="">
        <img
          src={`${imgPath}/${img}`}
          alt=""
          className="w-full object-cover relative h-screen"
        />
      </div>
      <div className="absolute bottom-[250px] left-[90px] text-white">
        <h5>{time}</h5>
        <h2 className="mb-2">{title}</h2>
        <h6 className="max-w-[450px] mb-2">{description1}</h6>
        <h6>{description2}</h6>
        <div className="flex gap-2 mt-5">
          <Link className="py-1 px-3 flex bg-red-600 justify-center gap-1 items-center text-center rounded-md ">
            <Play stroke="white" fill="white" size={12} />
            Play
          </Link>
          <Link className="py-1 bg-black bg-opacity-50 rounded-md px-3">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NetflixBanner;
