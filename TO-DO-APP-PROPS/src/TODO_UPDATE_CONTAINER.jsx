import React from "react";

const UpdateInputBox = ({ value, onChange }) => {
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)}></input>
  );
};

const UpdateButton = ({ onClick }) => {
  return <button onClick={onClick}>UPDATE</button>;
};

export { UpdateInputBox };
export { UpdateButton };
