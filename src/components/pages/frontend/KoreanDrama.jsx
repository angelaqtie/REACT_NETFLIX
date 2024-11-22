import React from "react";
import { imgPath } from "../../helpers/functions-general";

const KoreanDrama = ({ item }) => {
  return (
    <section>
      <div className=" py-5">
        <div className=" grid-cols-6 gap-10">
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

export default KoreanDrama;
