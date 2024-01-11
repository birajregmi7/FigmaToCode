import EllipseTwelve from "../../../assets/Ellipse12.svg";
function DetailsAndSubmit() {
  return (
    <>
      <div className="flex items-end ml-6">
        <img src={EllipseTwelve} alt="" />
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
              d="M23.9688 24.2422V26H16.1875V24.5L19.8672 20.5547C20.237 20.1432 20.5286 19.7812 20.7422 19.4688C20.9557 19.151 21.1094 18.8672 21.2031 18.6172C21.3021 18.362 21.3516 18.1198 21.3516 17.8906C21.3516 17.5469 21.2943 17.2526 21.1797 17.0078C21.0651 16.7578 20.8958 16.5651 20.6719 16.4297C20.4531 16.2943 20.1823 16.2266 19.8594 16.2266C19.5156 16.2266 19.2188 16.3099 18.9688 16.4766C18.724 16.6432 18.5365 16.875 18.4062 17.1719C18.2812 17.4688 18.2188 17.8047 18.2188 18.1797H15.9609C15.9609 17.5026 16.1224 16.8828 16.4453 16.3203C16.7682 15.7526 17.224 15.3021 17.8125 14.9688C18.401 14.6302 19.099 14.4609 19.9062 14.4609C20.7031 14.4609 21.375 14.5911 21.9219 14.8516C22.474 15.1068 22.8906 15.4766 23.1719 15.9609C23.4583 16.4401 23.6016 17.013 23.6016 17.6797C23.6016 18.0547 23.5417 18.4219 23.4219 18.7812C23.3021 19.1354 23.1302 19.4896 22.9062 19.8438C22.6875 20.1927 22.4219 20.5469 22.1094 20.9062C21.7969 21.2656 21.4505 21.638 21.0703 22.0234L19.0938 24.2422H23.9688Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default DetailsAndSubmit;
