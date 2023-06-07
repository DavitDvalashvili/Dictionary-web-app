import logo from "../assets/logo.svg";
import arrow from "../assets/icon-arrow-down.svg";

export interface headerProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const Header = (props: headerProps) => {
  return (
    <header className="bg-green-400 flex justify-between">
      <img src={logo} alt="logo" />
      <div className="interaction flex justify-between">
        <div className="flex justify-between">
          <span>test</span>
          <img src={arrow} alt="arrow" />
        </div>
        <div
          className={
            "w-[40px] h-[20px] bg-red-500 rounded-xl p-[3px] mx-[20px]"
          }
          onClick={() => {
            props.toggleTheme();
          }}
        >
          <div
            className={
              props.darkTheme
                ? "h-[14px] w-[14px] bg-white rounded-[50%] float-right"
                : "h-[14px] w-[14px] bg-white rounded-[50%] "
            }
          ></div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            stroke="red"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 
            6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
