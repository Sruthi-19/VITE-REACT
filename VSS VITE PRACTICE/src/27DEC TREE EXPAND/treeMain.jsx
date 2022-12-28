import React from "react";
import TreeSubComponent from "./treeSub";
import { JSON_Array } from "./treeJSON";
import "./tree.css";

const TreeMainComponent = () => {
  return (
    <div id="overall-div">
      <h1>TREE STRUCTURE</h1>
      <div>
        <TreeSubComponent JSON_Array={JSON_Array} />
      </div>
    </div>
  );
};

export default TreeMainComponent;
