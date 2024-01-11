import IconTick from "./IconTick";
import Button from "../../button/Button";

function IconContent() {
  return (
    <>
      <div className="flex gap-20 mt-4">
        <div className="flex gap-2">
          <IconTick />
          <p className="text-white font-[Roboto] text-[16px] font-[400] leading-[112%]">
            Best Price Promise
          </p>
        </div>
        <div className="flex gap-2">
          <IconTick />
          <p className="text-white font-[Roboto] text-[16px] font-[400] leading-[112%]">
            Best Price Promise
          </p>
        </div>
        <div className="flex gap-2">
          <IconTick />
          <p className="text-white font-[Roboto] text-[16px] font-[400] leading-[112%]">
            Best Price Promise
          </p>
        </div>
      </div>
      <div className="mt-5">
        <Button />
      </div>
    </>
  );
}

export default IconContent;
