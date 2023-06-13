import axios from "axios";
import { useEffect, useState } from "react";
import search from "../assets/icon-search.svg";
import Result, { wordDataType } from "./Result";
import Error from "./Error";
let data: wordDataType;

const Main = () => {
  const [findWord, setfindWord] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [getDataCount, setGetDataCount] = useState<number>(0);
  const [checkValue, setCheckValue] = useState<boolean>(false)

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
      <div
        className="font-bold text-4 leading-5 mt-6 text-[#2D2D2D] relative"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            {
              setGetDataCount(getDataCount + 1);
              setSearching(true);
              {value ? setCheckValue(false) : setCheckValue(true)}
            }
          }
        }}
      >
        <input
          type="text"
          className="w-[100%] h-[48px] px-6 py-4 bg-[#F4F4F4] focus:outline-0 rounded-2xl placeholder:font-bold placeholder:text-4 placeholder:leading-[20px] focus:border-[1px] focus:border-[#A445ED]"
          placeholder="Search for any word..."
          onChange={(event) => {
            setValue(event.target.value);
            setSearching(false);
            setfindWord(false);
            setCheckValue(false); 
          }}
        />
        <img
          src={search}
          alt="search"
          className="absolute right-6 top-4 h-4 cursor-pointer"
          onClick={() => {
            {
              setGetDataCount(getDataCount + 1);
              setSearching(true);
              {value ? setCheckValue(false) : setCheckValue(true)}
            }
          }}
        />
        {checkValue && <p className="text-[#FF5252] text-5 leading-6 font-normal">Whoops, can't be empty…</p>}
      </div>
      {searching && value && (
        <div>
          {findWord ? (
            <Result
              sourceUrls={data.sourceUrls}
              word={data.word}
              phonetic={data.phonetic}
              phonetics={data.phonetics}
              meanings={data.meanings}
            />
          ) : (
            <Error />
          )}
        </div>
      )}
    </>
  );
};

export default Main;
