import React, { useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";

const Dec23_MainComponent = () => {
  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState([]);

  useEffect(() => {
    const localStorageItems = JSON.parse(window.localStorage.getItem("key"));
    if (localStorageItems) {
      setSearchArray(localStorageItems);
      console.log(localStorageItems);
    } else {
      window.alert("ENTER VALUE");
    }
  }, []);

  const handleEnterKey = (event, search) => {
    if (event.key == "Enter") {
      setSearchArray((prevState) => [
        ...prevState,
        {
          id: v4(),
          value: search,
        },
      ]);
      setSearch("");
    }
  };

  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(searchArray));
  }, [searchArray]);

  return (
    <>
      <h1>THIS IS A SEARCH BOX</h1>
      <input
        value={search}
        placeholder="Enter Value"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(event) => handleEnterKey(event, search)}
      ></input>

      <h1>RENDER</h1>

      {searchArray.map((item) => {
        return <h2>{item.value}</h2>;
      })}
    </>
  );
};

export default Dec23_MainComponent;
