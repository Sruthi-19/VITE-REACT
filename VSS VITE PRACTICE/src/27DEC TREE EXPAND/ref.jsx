import { useState } from "react";

const ChildItem = ({ nodesItems }) => {
  const [itemVisible, setItemVisible] = useState({});

  const handleNestedItem = (i) => {
    setItemVisible((lastState) => {
      return { ...lastState, [i]: !itemVisible[i] };
    });
  };

  return (
    <div>
      <ul>
        {nodesItems.map((item, i) => {
          return (
            <li style={{ listStyle: "none" }} key={i}>
              {item.childrens && item.childrens.length > 0 && (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={() => handleNestedItem(i)}
                >
                  {itemVisible[i] ? "▾" : "▸"}
                </button>
              )}
              {item.name}
              {itemVisible[i] && item.childrens.length > 0 && (
                <ChildItem nodesItems={item.childrens} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ChildItem;







import { useState } from "react";
import ChildItem from "./Child_Item";

const DropDownItem = () => {
  const [items, setItems] = useState([
    {
      name: "Vegetables",
      childrens: [
        { name: "Tomato", childrens: [] },
        { name: "Potato", childrens: [] },
        {
          name: "Onion",
          childrens: [
            { name: "Yellow" },
            { name: "Purple" },
            { name: "White" },
          ],
        },
      ],
    },
    {
      name: "Fruits",
      childrens: [
        {
          name: "Apple",
          childrens: [
            { name: "Kashmiri-Apple", childrens: [] },
            {
              name: "Fuji",
              childrens: [{ name: "Red-Apple" }, { name: "Black-Apple" }],
            },
            { name: "Macintosh" },
          ],
        },
        { name: "Banana", childrens: [] },
        { name: "Orange", childrens: [] },
        { name: "Grapes" },
      ],
    },
  ]);

  return <ChildItem nodesItems={items} />;
};
export default DropDownItem;

