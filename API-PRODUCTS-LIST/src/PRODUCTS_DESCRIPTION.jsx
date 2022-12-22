import React from "react";

const DetailsOfItem=({details})=>{
    return(
        <div id="description-container">
        <p>TITLE: {details.title}</p>
        <p>CATEGORY:{details.category}</p>
        <p>DESCRIPTION:{details.description}</p>
        <p>PRICE:{details.price}</p>
        <img width={100} src={details.img}></img>

        </div>
    )
}

export default DetailsOfItem