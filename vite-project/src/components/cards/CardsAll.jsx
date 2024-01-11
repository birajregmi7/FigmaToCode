import ImgOne from "../../assets/cardsImg/Rectangle894.png";
import ImgTwo from "../../assets/cardsImg/Rectangle895.png";
import ImgThree from "../../assets/cardsImg/Rectangle896.png";
import ImgFour from "../../assets/cardsImg/Rectangle897.png";
import ImgFive from "../../assets/cardsImg/Rectangle899.png";
import ImgSix from "../../assets/cardsImg/Rectangle901.png";

function CardsAll() {
  return (
    <>
      <div className="bg-[rgb(246,251,254)] h-[1253px]">
        <div className="flex justify-center items-center ">
          <p className="text-[#2A398D] font-[Roboto] text-[45px] font-[500] leading-[112%] mt-[96px] mb-[80px]">
            Fun Filled Once in a Lifetime Experience
          </p>
        </div>
        <div className=" flex justify-center items-center ">
          <div className="grid grid-rows-2 grid-cols-3 justify-items-center gap-y-8 gap-x-4">
            <div className="">
              <img src={ImgOne} alt="" className="h-fixed w-fixed" />
              <div className=" w-0 h-0 relative bottom-[108px] left-[96px] text-[#fff] text-[45px] text-[Roboto]  font-[300] leading-[112%] capitalize ">
                Swimming
              </div>
            </div>
            <div className="">
              <img src={ImgTwo} alt="" className=" " />
              <div className=" w-0 h-0 relative bottom-[92px] left-[96px] text-[#fff] text-[45px] text-[Roboto] font-[300] leading-[112%] capitalize ">
                Snorkelling
              </div>
            </div>
            <div className="">
              <img src={ImgThree} alt="" className=" " />
              <div className=" w-0 h-0 relative bottom-[92px] left-[96px] text-[#fff] text-[45px] text-[Roboto] font-[300] leading-[112%] capitalize ">
                Sightseeing
              </div>
            </div>
            <div className="">
              <img src={ImgFour} alt="" className=" " />
              <div className=" w-0 h-0 relative bottom-[92px] left-[122px] text-[#fff] text-[45px] text-[Roboto] font-[300] leading-[112%] capitalize ">
                Scenery
              </div>
            </div>
            <div className="">
              <img src={ImgFive} alt="" className=" " />
              <div className=" w-0 h-0 relative bottom-[92px] left-[133px] text-[#fff] text-[45px] text-[Roboto] font-[300] leading-[112%] capitalize ">
                Parties
              </div>
            </div>
            <div className="">
              <img src={ImgSix} alt="" className=" " />
              <div className=" w-0 h-0 relative bottom-[92px] left-[160px] text-[#fff] text-[45px] text-[Roboto] font-[300] leading-[112%] capitalize ">
                Dining
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsAll;
