import React from "react";
import { v4 } from "uuid";

const Body = ({ items, val, setVal }) => {
  const setValueFunction = (e, itemId) => {
    console.log(itemId);
    setVal((prev) => {
      return { ...prev, [itemId]: e.target.value };
    });
    console.log(val);
  };
  return (
    <>
      {items.map((item) => {
        return (
          <div>
            <h4>{item.label}</h4>
            <input
              onChange={(e) => setValueFunction(e, item.id)}
              type={item.type}
              placeholder={item.placeholder}
            ></input>
          </div>
        );
      })}
    </>
  );
};
export default Body;
