import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);

    useEffect(() => {
      console.log("I am rendering for the first time");
      fetch(`https://dummyjson.com/products`)
        .then((data) => data.json())
        .then((data) => setProducts(data.products));
    }, []);

    const onMoviesSearch = (value) => {
      console.log(value);
      setSearchValue(value);

      fetch(`https://dummyjson.com/products/search?q=${value}`)
        .then((data) => data.json())
        .then((data) => setProducts(data.products));
    };



  return (
    <>
      <div style={{ padding: 12 }}>
        <input
          value={searchValue}
          onChange={(e) => onMoviesSearch(e.target.value)}
          placeholder="Search your Movie over here!"
        ></input>
        {searchValue && <p>Searching for : {searchValue}</p>}
      </div>
      <div>
        <h1>My Movies</h1>
        <ul>
          {products.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UseEffectExample;
