import { useState } from "react";
// import CleanUpSub from "./CleanUpSub";
import CleanUpDependency from "./CleanUpDependency";

const CleanUpMain = () => {
  const [toggleView, setToggleView] = useState(false);

  return (
    <>
      <button onClick={() => setToggleView((state) => !state)}>
        {toggleView ? "Hide" : "Show"} Component
      </button>
      {/* {toggleView && <CleanUpSub />} */}
     {toggleView ? <CleanUpDependency/>: ""}
    </>
  );
};

export default CleanUpMain;
