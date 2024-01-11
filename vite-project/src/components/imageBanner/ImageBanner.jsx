import RectangleFifteen from "../../assets/Rectangle15.png";

function ImageBanner() {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url(${RectangleFifteen})`,
        }}
      >
        <button>
          <svg
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="47" cy="47" r="37" fill="white" />
            <circle
              cx="47"
              cy="47"
              r="42"
              stroke="white"
              strokeOpacity="0.38"
              strokeWidth="10"
            />
            <path d="M59 47L42.5 56.5263L42.5 37.4737L59 47Z" fill="#2A398D" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default ImageBanner;
