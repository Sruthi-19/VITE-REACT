import React, { useEffect, useState } from "react";
import "./style.css";
import ListOfItems from "./PRODUCTS_LIST";
import DetailsOfItem from "./PRODUCTS_DESCRIPTION";


const MainDisplay =()=>{
    const[products,setProducts]=useState([]);
    const[details,setDetails]=useState({});

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>{setProducts(data);console.log(data);});

    },[])

    return(
        <div id="overall-div">
            <ListOfItems products={products} setProducts={setProducts} details={details} setDetails={setDetails} />
            <DetailsOfItem details={details}/>
        </div>
    )
}

export default MainDisplay;