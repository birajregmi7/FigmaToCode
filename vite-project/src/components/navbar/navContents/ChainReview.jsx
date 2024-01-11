import React from "react";
import ChainImg from "./ChainImg";

function ChainReview() {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <ChainImg />
        <p className="text-[#2A398D] font-[Roboto] text-[1rem] font-normal leading-[1.12rem] capitalize ml-[-20px]">
          Loved by <span className=" font-[700]  ">1000+</span> happy clients
          around the world
        </p>
      </div>
    </>
  );
}

export default ChainReview;
