import React from "react";

export const JSON_Array = [
  {
    id: 1,
    isToggle: false,
    title: "FRUITS",
    children: [{ title: "Apple" }, { title: "Banana" }],
  },
  {
    id: 2,
    isToggle: false,
    title: "VEGETABLES",
    children: [
      {
        id: 2.1,
        isToggle: false,
        title: "VEGE 1",
        children: [{ title: "Potato" }],
      },
      {
        id: 2.2,
        isToggle: false,
        title: "VEGE 2",
        children: [{ title: "Brinjal" }],
      },
    ],
  },
];
