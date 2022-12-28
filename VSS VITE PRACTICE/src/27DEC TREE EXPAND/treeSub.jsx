import React, { useEffect, useState } from "react";
import "./tree.css";

const TreeSubComponent = ({ JSON_Array }) => {
  const [toggleState, setToggleState] = useState({});

  useEffect(() => {
    JSON_Array.map((item) => {
      return setToggleState((prevState) => {
        return { ...prevState, id: item.id };
      });
    });
  }, []);

  const toggleButton = (item_id, toggleState) => {
    setToggleState((prevState) => {
      return { ...prevState, [item_id]: !toggleState };
    });
  };

  return (
    <>
      {JSON_Array.map((item) => {
        if (item?.children) {
          return (
            <>
              <div id="first-level">
                <button id="button"
                  onClick={() => toggleButton(item.id, toggleState[item.id])}
                >
                  <span class="material-symbols-outlined">
                    {toggleState[item.id] ? "expand_less" : "expand_more"}
                  </span>
                </button>

                <h4>{item.title}</h4>
              </div>

              {toggleState[item.id] ? (
                <div style={{ marginLeft: 50 }}>
                  <TreeSubComponent JSON_Array={item.children} />
                </div>
              ) : (
                ""
              )}
            </>
          );
        } else {
          return (
            <div>
              <h4>{item.title}</h4>
            </div>
          );
        }
      })}
    </>
  );
};

export default TreeSubComponent;
