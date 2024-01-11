import EllipseTen from "../../../assets/Ellipse10.svg";
import Star from "./Star";
function ReviewContent() {
  return (
    <>
      <div className="flex items-start gap-6 mt-5 mb-[106px]">
        <img src={EllipseTen} alt="" />
        <div className="">
          <p className="w-[531px] h-[126px] text-white font-[Roboto] text-[16px]  leading-[130%] font-[700]">
            I chartered my first boat through Exclusive Gulets. Tom was
            extremely helpful and attentive and our entire experience went
            exactly as planned. I was hesitant at first sending a deposit and
            final payment to a company in a foreign country that I didn&#39;t
            know. They provided me with references to ease my concerns as well
            as the owners direct number. I&#39;d happily charter through
            Exclusive Gulets in the future!
          </p>
          <div className="flex gap-2 mt-2">
            <p className=" text-white font-[Roboto] text-[16px]  leading-[130%] font-[700]">
              -Jeff Rosenzweig
            </p>
            <div className="flex gap-[1px]">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewContent;
