import './App.css'
import Header from './Components/Header'
import {useState} from "react"


function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <>
    <Header darkTheme={darkTheme} toggleTheme={toggleTheme}/>
    </>
  )
}

export default App
