import ChainImg from "./navContents/ChainImg";
import IconContent from "./navContents/IconContent";
import ReviewContent from "./navContents/ReviewContent";
function NavContents() {
  return (
    <>
      <div className="flex items-center mt-[175px] gap-0">
        <ChainImg />
        <div>
          <p className="text-white font-[Roboto] text-[1rem] font-normal leading-[1.12rem] capitalize ml-[-20px]">
            Loved by <span className=" font-[700] ">1000+</span> happy clients
            around the world
          </p>
        </div>
      </div>
      <div className="w-[651px] mt-3">
        <p className="text-white font-[Roboto] text-[58px] font-bold leading-[112%] tracking-wide">
          Experience the Ultimate <br /> Luxury Yacht Charter
        </p>
      </div>
      <IconContent />
      <ReviewContent />
    </>
  );
}
export default NavContents;
