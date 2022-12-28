import React from "react";
import { ChildNode } from "./ChildNode";

export const Main = () => {
  const listData = [
    {
      name: "Fruit",
      children: [
        { name: "Apple" },
        { name: "Banana" },
        { name: "Fruit loops" },
      ],
    },
    {
      name: "Vegetables",
      children: [
        {
          name: "Green",
          children: [{ name: "Broccoli" }, { name: "Brussels sprouts" }],
        },
        {
          name: "Orange",
          children: [{ name: "Pumpkins" }, { name: "Carrots" }],
        },
      ],
    },
  ];
  return (
    <div>
      <ChildNode content={listData} />
    </div>
  );
};


import React from "react";
import { ChildNodes } from "./ChildNodes";

export const ChildNode = ({ content }) => {
  //listData
  return (
    <div>
      <ul>
        {content.map((elem) => {
          return <ChildNodes key={elem.name} content={elem} />;
        })}
      </ul>
    </div>
  );
};


import React, { useState } from "react";
import { ChildNode } from "./ChildNode";

export const ChildNodes = ({ content }) => {
  const [childState, setChildState] = useState(false);
  return (
    <div>
      <p onClick={(e) => setChildState(!childState)}>{content.name}</p>
      {childState && content.children && (
        <ChildNode content={content.children} />
      )}
    </div>
  );
};
