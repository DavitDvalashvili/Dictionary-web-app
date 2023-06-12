import play from "../assets/icon-play.svg";

export interface wordDataType {
  word: string;
  phonetic: string;
  sourceUrls: string;
  phonetics: phoneticsType[];
  meanings: meaningType[];
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
      <div className="bg-green-800">
        <h1>{props.word}</h1>
        <span>{props.phonetic}</span>
        <img
          src={play}
          alt="play"
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
        />
      </div>
      <div>
        {props.meanings.map((meaningItem, index) => {
          return (
            <div key={index}>
              <span key={index} className="block mt-5">
                {meaningItem.partOfSpeech}
              </span>
              <span>meaning</span>
              {meaningItem.definitions.map((definitionItem, index) => {
                return (
                  <div key={index} className="bg-red-200 my-[2px]">
                    <li>{definitionItem.definition}</li>
                    <p className="bg-green-500">{definitionItem.example}</p>
                  </div>
                );
              })}
              <div>
                {meaningItem.synonyms[0] && <span>Synonyms</span>}
                {meaningItem.synonyms.map((synonym, index) => {
                  return (
                    <span key={index} className="ml-6">
                      {synonym}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <span>Source</span>
        <p>{props.sourceUrls}</p>
      </div>
    </>
  );
};

export default Result;
