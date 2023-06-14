import newWindow from "../assets/icon-new-window.svg";

export interface wordDataType {
  word: string;
  phonetic: string;
  sourceUrls: string;
  phonetics: phoneticsType[];
  meanings: meaningType[];
  darkTheme: boolean;
}

export interface phoneticsType {
  audio: string;
}

export interface meaningType {
  partOfSpeech: string;
  definitions: definitionType[];
  synonyms: string[];
}

export interface definitionType {
  definition: string;
  example: string;
}

const Result = (props: wordDataType) => {
  return (
    <>
      <div className="flex justify-between items-center mt-[28px] md:mt-[43px] mb-[39px]">
        <div>
          <h1 className="font-bold text-[32px] md:text-[64px] md:leading-[82px] leading-[34px] mb-[9px] md:mb-[5px]">
            {props.word}
          </h1>
          <span className="text-[18px] md:text-6 md:text-[29px] leading-6 font-normal text-[#A445ED]">
            {props.phonetic}
          </span>
        </div>
        <svg
          className="play duration-300 ease-in-out cursor-pointer w-[48px] h-[48px] md:w-[75px] md:h-[75px]"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            let lastElement = props.phonetics.length - 1;
            console.log(props.phonetics[lastElement].audio);
            if (props.phonetics[0].audio) {
              var audio = new Audio(props.phonetics[0].audio);
            } else {
              var audio = new Audio(props.phonetics[1].audio);
            }
            audio.play();
          }}
        >
          <circle opacity="0.25" cx="37.5" cy="37.5" r="37.5" fill="#A445ED" />
          <path d="M29 27V48L50 37.5L29 27Z" fill="#A445ED" />
        </svg>
      </div>
      <div>
        {props.meanings.map((meaningItem, index) => {
          return (
            <div key={index} className="border-t-[1px] mb-[42px]">
              <p
                key={index}
                className="font-normal text-[18px] md:text-6 md:leading-[29px] mt-[-9px] md:mt-[-14.5px] leading-[18px] mb-[34px] md:mb-[40px]"
              >
                <span className={props.darkTheme ? "pr-[25px] bg-[#050505]" : "pr-[25px] bg-white"}>
                  {meaningItem.partOfSpeech}
                </span>
              </p>
              <p className="text-4 md:text-5 md:leading-[26px] leading-[17px] font-normal text-[#757575] mb-[17px] md:mb-[27px]">
                Meaning
              </p>
              {meaningItem.definitions.map((definitionItem, index) => {
                return (
                  <div key={index}>
                    <li className="list-none flex items-start text-[15px] leading-6 font-normal mb-[13px] md:text-[18px] md:leading-[24px]">
                      <span className="text-6 text-[#8F19E8] leading-6 mr-5 md:text-[18px] md:leading-6">
                        &bull;
                      </span>
                      {definitionItem.definition}
                    </li>
                    {definitionItem.example && (
                      <p className="mb-[13px] text-[#757575] ml-[27px]">
                        <span>&quot;</span>
                        {definitionItem.example}
                        <span>&quot;</span>
                      </p>
                    )}
                  </div>
                );
              })}
              <div className="flex justify-start items-start gap-[26px] md:gap-[40px] font-normal text-4 md:text-5 md:leading-[21px] leading-[17px] 
              mt-[11px] md:mt-[41px]">
                {meaningItem.synonyms[0] && <span>Synonyms</span>}
                <div className="flex gap-x-4 md:gap-x-6 gap-y-2 flex-wrap justify-start">
                  {meaningItem.synonyms.map((synonym, index) => {
                    return (
                      <span key={index} className="text-[#A445ED] font-bold">
                        {synonym}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] mt-[-10px] pt-6 md:pt-[21px] font-normal text-[14px] leading-[18px] md:text-4 md:leading-[15px]
       text-[#757575] underline mb-[60px] md:flex md:justify-start md:items-center md:gap-[25px]">
        <span>Source</span>
        <a className="mt-[10px] md:mt-0 cursor-pointer flex flex-row items-center gap-2 w-3 h-3 " href={props.sourceUrls}>
          <span>{props.sourceUrls}</span>
          <img src={newWindow} alt="new window" />
        </a>
      </div>
    </>
  );
};

export default Result;
