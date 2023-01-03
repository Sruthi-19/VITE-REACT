import React from "react";

const Submit = ({ visible, setVisible, items, val }) => {
  const submitFunction = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={submitFunction}>SUBMIT</button>
      <div>
        {visible &&
          items.map((item) => {
            return (
              <div>
                <h4>{item.label}</h4>
                <h4>{val[item.id]}</h4>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Submit;
