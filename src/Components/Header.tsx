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
    <header className="bg-green-400 flex justify-between">
      <img src={logo} alt="logo" />
      <div className="interaction flex justify-between">
        <div
          className="flex justify-between"
          onClick={() => {
            setShowFont(!showFont);
          }}
        >
          <span>{activeFont}</span>
          <img src={arrow} alt="arrow" />
        </div>
        {showFont && (
          <div className="mt-[30px] bg-red-600">
            <p className="font-sans"
              onClick={() => {
                props.changeFont("font-sans");
                setActivefont("Sans Serif");
                setShowFont(false);
              }}
            >
              Sans Serif
            </p>
            <p className="font-serif"
              onClick={() => {
                props.changeFont("font-serif");
                setActivefont("Serif")
                setShowFont(false);
              }}
            >
              Serif
            </p>
            <p className="font-mono"
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
