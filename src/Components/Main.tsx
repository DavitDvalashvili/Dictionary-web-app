import axios from "axios";
import { useEffect, useState } from "react";
import search from "../assets/icon-search.svg";
import Result, { wordDataType } from "./Result";
import Error from "./Error";
//import { DataType } from "./Header";
let data : wordDataType;

const Main = () => {
  const [findWord, setfindWord] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [getDataCount, setGetDataCount] = useState<number>(0);
  //const [data, setData] = useState<dataType | null>
  

  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
      );
      data = await response.data[0];
      data.word ? setfindWord(true) : setfindWord(false);
      console.log(data);
    };
    requestData();
  }, [getDataCount]);

  return (
    <>
      <div className="input_box bg-red-600 mt-[20px]">
        <input
          type="text"
          className=" mx-[24px]"
          onChange={(event) => {
            setValue(event.target.value);
            setSearching(false);
            setfindWord(false);
          }}
        />
        <img
          src={search}
          alt="search"
          className="bg-green-600"
          onClick={() => {
            {
              setGetDataCount(getDataCount + 1);
              setSearching(true);
            }
          }}
        />
      </div>
      {searching && value && <div>{findWord ? <Result word={data.word} phonetic={data.phonetic} phonetics={data.phonetics} meanings={data.meanings}/> : <Error />}</div>}
    </>
  );
};

export default Main;
