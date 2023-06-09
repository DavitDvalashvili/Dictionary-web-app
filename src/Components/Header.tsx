import logo from "../assets/logo.svg";
import arrow from "../assets/icon-arrow-down.svg";
import { useState } from "react";

export interface DataType {
  darkTheme: boolean;
  toggleTheme: () => void;
  font: string;
  changeFont: (parameter: string) => void;
}

const Header = (props: DataType) => {
  const [showFont, setShowFont] = useState<boolean>(false);
  const [activeFont, setActivefont] = useState<string>("Sans Serif")

  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="logo" className="w-[28px] h-8" />
      <div className="flex justify-end items-center gap-3 md:gap-5 relative">
        <div
          className=" h-8 flex items-center gap-4 md:gap-[18px] justify-between 
          pr-4 md:pr-6 font-bold text-[14px] md:text-[18px] leading-6 md:leading-6 
          border-r-[1px] border-[#E9E9E9] cursor-pointer mr-1 md:mr-[6px]"
          onClick={() => {
            setShowFont(!showFont);
          }}
        >
          <span>{activeFont}</span>
          <img src={arrow} alt="arrow" />
        </div>
        <div
          className={ props.darkTheme ? "toggleStyle bg-[#A445ED]" : "toggleStyle bg-[#757575]"}
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
          width="20"
          height="20"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            stroke={props.darkTheme ? "#A445ED" : "#757575" }
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 
            6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
        {showFont && (
          <div className={props.darkTheme ? "navStyles bg-[#050505] box-shadow-dark" : "navStyles bg-[#ffffff] box-shadow"}>
            <p className="font-sans cursor-pointer hover:text-[#A445ED]"
              onClick={() => {
                props.changeFont("font-sans");
                setActivefont("Sans Serif");
                setShowFont(false);
              }}
            >
              Sans Serif
            </p>
            <p className="font-serif cursor-pointer hover:text-[#A445ED]"
              onClick={() => {
                props.changeFont("font-serif");
                setActivefont("Serif")
                setShowFont(false);
              }}
            >
              Serif
            </p>
            <p className="font-mono cursor-pointer hover:text-[#A445ED]"
              onClick={() => {
                props.changeFont("font-mono");
                setActivefont("Mono")
                setShowFont(false);
              }}
            >
              Mono
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
