import React from "react";

const InputBox = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
    ></input>
  );
};

const AddButton = ({onClick}) => {
  return <button onClick={onClick}>ADD TASK</button>;
};

InputBox.defaultProps = {
  type: "text",
  placeholder: "ENTER TO-DO HERE",
};

export { InputBox };
export { AddButton };
