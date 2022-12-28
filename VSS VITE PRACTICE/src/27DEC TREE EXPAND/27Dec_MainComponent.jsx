import React, { Children, useEffect, useState } from "react";
import "./tree.css";
import TreeSubComponent from "./27Dec_SubComponent";

const TreeMainComponent = () => {
  const [toggleState, setToggleState] = useState([]);
  const [toggleId,setToggleId]=useState("");

  const data1 = [
    {
      id:1,
      isToggle: false,
      title: "FRUITS",
      children: [{ title: "Apple" }, { title: "Banana" }],
    },
    {
      id:2,
      isToggle: false,
      title: "VEGETABLES",
      children: [{ title: "Potato" }, { title: "Brinjal" }],
    },
  ];

  useEffect(()=>{
    data1.map((item)=>{
      setToggleState((prevState)=>[...prevState,{
        id:item.id,
        isToggle: item.isToggle,
        title:item.title
      }])
    })

  },[])

  return (
    <>
      <h1>TREE STRUCTURE</h1>
      {toggleState.map((item) => {
        return (
          <div>
            <TreeSubComponent item={item} toggleId={toggleId} setToggleId={setToggleId} toggleState={toggleState} setToggleState={setToggleState}/>
          </div>
        )
      })}
    </>
  );
};
export default TreeMainComponent;
