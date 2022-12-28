import React from "react";

const TreeSubComponent = ({item, toggleId, setToggleId, toggleState, setToggleState}) => {
    const toggleButton=(item)=>{
        setToggleId(item.id);
        toggleState.map((toggleItems)=>{
            if(toggleItems.id==item.id){
                toggleItems.isToggle=!toggleItems.isToggle
            }
        });
    
    }
  return (<div>
    <li>{item.title}</li>
    <button onClick={()=>toggleButton(item)}>{item.isToggle ? "<<" : ">>"}{item.title}</button>
  </div>);
};

export default TreeSubComponent;
