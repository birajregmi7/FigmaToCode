import BlueButton from "../button/BlueButton";
import ChainReview from "../navbar/navContents/ChainReview";
import ClickAndBegin from "./circularImage/ClickAndBegin";
import DetailsAndSubmit from "./circularImage/DetailsAndSubmit";
import RelaxAndEmbark from "./circularImage/RelaxAndEmbark";

function Registration() {
  return (
    <>
      <div className="  h-[908px] w-[auto]">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#2A398D] font-[Lato] text-[45px] font-[500] leading-[112%] text-center w-[651px] h-[100px] mt-[97px] mb-[70px]">
            You are 3 steps away from your
            <br />
            dream yacht charter vacation
          </p>
          <div className="flex flex-row  justify-evenly ">
            <div className="flex flex-col justify-baseline items-center ">
              <ClickAndBegin />

              <p className="text-[#2A398D] font-[Roboto] text-[20px] font-[500] leading-[112%] mt-[46px] mb-[10px]">
                Click & Begin
              </p>
              <p className="w-[278px] h-[79px] text-[#2A398D] font-[Roboto] text-[16px] font-[300] leading-[130%] text-center">
                Start your journey with a simple tap on the enquiry button. Dive
                into the world of luxury yacht charters at your fingertips.
              </p>
            </div>
            <div className="flex flex-col justify-baseline items-center">
              <DetailsAndSubmit />

              <p className="text-[#2A398D] font-[Roboto] text-[20px] font-[500] leading-[112%] mt-[46px] mb-[10px]">
                Detail & Submit
              </p>
              <p className="w-[278px] h-[79px] text-[#2A398D] font-[Roboto] text-[16px] font-[300] leading-[130%] text-center">
                Fill out our intuitive inquiry form with your preferences and
                requirements. Every detail helps us tailor the perfect yacht
                experience for you.
              </p>
            </div>
            <div className="flex flex-col justify-baseline items-center">
              <RelaxAndEmbark />

              <p className="text-[#2A398D] font-[Roboto] text-[20px] font-[500] leading-[112%] mt-[46px] mb-[10px]">
                Relax & Embark
              </p>
              <p className="w-[278px] h-[79px] text-[#2A398D] font-[Roboto] text-[16px] font-[300] leading-[130%] text-center">
                Once your inquiry is received, our expert team will handle the
                rest. All that&apos;s left for you is to enjoy a holiday like no
                other.
              </p>
            </div>
          </div>
          <div className="mt-[65px] mb-[24px]">
            <BlueButton/>
          </div>
            <ChainReview/>
        </div>
      </div>
    </>
  );
}

export default Registration;
