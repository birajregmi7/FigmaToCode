import React from "react";
import EllipseFour from "../../../assets/Ellipse4.svg";
import EllipseFive from "../../../assets/Ellipse5.svg";
import EllipseSix from "../../../assets/Ellipse6.svg";
import EllipseSeven from "../../../assets/Ellipse7.svg";
import EllipseEight from "../../../assets/Ellipse8.svg";
function ChainImg() {
  return (
    <div className="flex flex-nowrap  ">
      <img src={EllipseFour} alt="" className="" />
      <img
        src={EllipseFive}
        alt=""
        className="relative right-2 "
      />
      <img
        src={EllipseSix}
        alt=""
        className="relative right-4 "
      />
      <img
        src={EllipseSeven}
        alt=""
        className="relative right-6 "
      />
      <img
        src={EllipseEight}
        alt=""
        className="relative right-8 "
      />
    </div>
  );
}

export default ChainImg;
