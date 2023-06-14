import "./App.css";
import Header from "./Components/Header";
import { useState } from "react";
import Main from "./Components/Main";

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [font, setFont] = useState<string>("Sans Serif");

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const changeFont = (parameter: string) => {
    setFont(parameter);
  };

  // className={false ? "w-[100vw] h-[100%] bg-[#050505] lg:flex lg:justify-center lg:items-start" : "w-[100vw] h-[100vh] bg-[#ffffff] lg:flex lg:justify-center lg:items-start"}>
  return (
    <div className={font}>
      <div
        className={
          darkTheme
            ? "h-[100vh] v-[100vw] bg-[#050505]"
            : "h-[100vh] v-[100vw] bg-[#ffffff]"
        }
      >
        <div className={darkTheme ? "bg-[#050505] text-[#ffffff] flex-box" : "bg-[#ffffff] text-[#2d2d2d] flex-box"}>
          <div className="p-6 md:px-[39px] md:py-[58px] lg:px-[0px] lg:w-[737px] ">
            <Header
              darkTheme={darkTheme}
              toggleTheme={toggleTheme}
              font={font}
              changeFont={changeFont}
            />
            <Main darkTheme={darkTheme}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
