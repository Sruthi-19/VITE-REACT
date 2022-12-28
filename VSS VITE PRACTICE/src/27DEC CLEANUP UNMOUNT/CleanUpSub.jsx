import { useEffect, useState } from "react";

const CleanUpSub = () => {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    console.log("CleanUpSub is loaded");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      console.log({ clientX, clientY });
      setMousePos({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      console.log("CleanUpSub is Unmounting");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <b>
        ({mousePos.x}, {mousePos.y})
      </b>
      <p style={{ padding: 12 }}>I'm Day 11 Home Component</p>;
    </>
  );
};

export default CleanUpSub;

