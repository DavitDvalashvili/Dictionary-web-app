import play from "../assets/icon-play.svg";

export interface wordDataType {
  word: string;
  phonetic: string;
  phonetics: phoneticsType[];
  meanings: meaningType[];
}

export interface phoneticsType {
  audio: string;
}

export interface meaningType {
  partOfSpeech: string;
  definitions: definitionType[];
}

export interface definitionType {
  definition: string;
}

const Result = (props: wordDataType) => {

  return (
    <>
      <div>
        <div className="bg-green-800">
          <h1>{props.word}</h1>
          <span>{props.phonetic}</span>
          <img
            src={play}
            alt="play"
            onClick={() => {
              let lastElement = props.phonetics.length - 1;
              console.log(props.phonetics[lastElement].audio);
              var audio = new Audio(props.phonetics[lastElement].audio);
              audio.play();
            }}
          />
        </div>
        <div>
        {props.meanings.map((meaningItem, index) => {
          return (
            <>
          <span  key={index} className="block mt-5">{meaningItem.partOfSpeech}</span>
          <span>meaning</span>
           {meaningItem.definitions.map((definitionItem, index) => {
            return (
              <li key={index} className="bg-red-200 my-[2px]">{definitionItem.definition}</li>
            
            )
           })}
            </>
          )
        })}

        </div>
      </div>
    </>
  );
};

export default Result;
