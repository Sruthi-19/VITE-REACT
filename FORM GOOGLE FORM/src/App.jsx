import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Submit from "./Submit";
import "./App.css";

function App() {
  
  const [label, setLabel] = useState("");
  const [type, setType] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [items, setItems] = useState([]);
  const [val, setVal] = useState({});
  const [visible, setVisible] = useState(false);


  return (
    <>
    <h1>FORM</h1>
    <div>
      <Header
        label={label}
        setLabel={setLabel}
        type={type}
        setType={setType}
        placeholder={placeholder}
        setPlaceholder={setPlaceholder}
        items={items}
        setItems={setItems}
      />
      <Body items={items} val={val} setVal={setVal} />
      <Submit
        visible={visible}
        setVisible={setVisible}
        items={items}
        val={val}
      />
    </div>
    </>
  );
}

export default App;
