import { useState } from "react";
import smile from "../assets/😕.svg";

const Error = () => {
  const [waiting, setWaiting] = useState<boolean>(false);

  function myFunction() {
    setWaiting(true);
  }

  setTimeout(myFunction, 1000);

  return (
    <>
      {waiting && (
        <div>
          <img src={smile} alt="smile" />
          <h1>No Definitions Found</h1>
          <p>
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </div>
      )}
    </>
  );
};

export default Error;
