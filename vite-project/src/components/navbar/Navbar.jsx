import React from "react";
import NavBackground from "./NavBackground";
import YatchDetailFull from "../yatchDetails/YatchDetailFull";
import BelowNav from "./navContents/BelowNav";
import ImageBanner from "../imageBanner/imageBanner";
import Registration from "../registration/Registration";
import CardsAll from "../cards/CardsAll";

function Navbar() {
  return (
    <div>
      <NavBackground />
      <BelowNav />
      <YatchDetailFull />
      <ImageBanner />
      <Registration />
      <CardsAll />
    </div>
  );
}

export default Navbar;
