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
        <div className="mt-[132px] flex items-center flex-col">
          <img src={smile} alt="smile"  className="w-[64px]"/>
          <h1 className="mt-[44px] mb-[24px] font-bold text-5 leading-6 text-[#2D2D2D]">No Definitions Found</h1>
          <p className="text-center tet-[18px] leading-6 font-normal text-[#757575] max-w-[736px]">
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
