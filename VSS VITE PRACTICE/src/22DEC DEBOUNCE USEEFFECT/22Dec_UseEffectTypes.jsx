import {useState,useEffect } from "react";

const UseEffectExample2 = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Mounting");
  }, []);

  useEffect(() => {
    console.log("Updating : ", search);
  }, [search]);

  const [count,setCount]=useState(0);
  const[num1,setNum1]=useState(0);
  const[num2,setNum2]=useState(0);

  useEffect(()=>{
    console.log(num1+num2);
  },[num1,num2]);

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} ></input>
      <p>Search Value is: {search}</p>
      <h1>COUNTER: {num1} {num2} </h1>
      <button onClick={()=>setNum1(num1+1)}>NUM1</button>
      <button onClick={()=>setNum2(num2+1)}>NUM2</button>

    </>
  );
};

export default UseEffectExample2;
