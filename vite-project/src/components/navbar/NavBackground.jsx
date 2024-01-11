import RealNav from "./RealNav";
import TopNav from "./TopNav";
import BoatImage from "../../assets/Boat.png";
import NavContents from "./NavContents";

function NavBackground() {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat h-[110vh]"
        style={{
          backgroundImage: `url(${BoatImage})`,
        }}
      >
        <TopNav />
        <div className="ml-[127px] mr-[127px]">
          <RealNav />
          <NavContents />
    
        </div>
      </div>
    </>
  );
}

export default NavBackground;
