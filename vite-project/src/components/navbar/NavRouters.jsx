import { Routes, Route, Link } from "react-router-dom";
import About from "../navRouting/About";
import HowItWorks from "../navRouting/HowItWorks";
import Benefits from "../navRouting/Benefits";
import Reviews from "../navRouting/Reviews";
import Faqs from "../navRouting/Faqs";

function NavRouters() {
  return (
    <div className="h-[1.188rem] ">
      <nav>
        <ul className="flex flex-nowrap gap-10 font-medium font-['Roboto'] capitalize text-[white] ml-10 whitespace-nowrap  ">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/how-it-works">How It Works</Link>
          </li>
          <li>
            <Link to="/benefits">Benefits</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavRouters;
