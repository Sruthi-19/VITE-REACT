import React from "react";

const ListOfItems = ({
  products,
  setProducts,
  details,
  setDetails,
}) => {
  const displayDetails = (item) => {
    setDetails({
      title: item.title,
      category:item.category,
      description:item.description,
      price:item.price,
      reating:item.rating,
      img:item.image

    });
  };
  return (
    <div>
      <h1>List of Items</h1>
      <div  id="list-container">
        {products.map((item) => {
          return (
            <div>
            <button onClick={() => displayDetails(item)}>
              {item.title}
            </button>
            </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default ListOfItems;
