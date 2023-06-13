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

  return (
    <div className={font}>
      <div className="main p-4">
        <Header
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
          font={font}
          changeFont={changeFont}
        />
        <Main />
      </div>
    </div>
  );
}

export default App;
