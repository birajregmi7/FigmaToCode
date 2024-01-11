import EllipseEleven from "../../../assets/Ellipse11.svg";
function ClickAndBegin() {
  return (
    <>
      <div className="flex items-end ml-6">
        <img src={EllipseEleven} alt="" />
        <div className="relative right-[130px] top-[20px]">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20"
              cy="20"
              r="19"
              fill="#2A398D"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M21.6719 14.6016V26H19.4219V17.1953L16.7188 18.0547V16.2812L21.4297 14.6016H21.6719Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default ClickAndBegin;
