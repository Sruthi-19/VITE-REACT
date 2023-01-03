import React, { useEffect, useMemo, useState } from "react";
import { APIValueMatch } from "./APIValueMatch";
import "./apisearch.css";

const APIParent = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("USE EFFECT WITH BLANK");
    fetch("https://gorest.co.in/public/v2/users", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer e82dcbee35c9cea86b4c51f0d57bc5a1af08364d42deb5618cf389b002eb2236",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filterUser = useMemo(() => {
    console.log("USE MEMO");

    let filterList = users.filter((item) => {
      if (APIValueMatch(item.name, search)) {
        return true;
      }
      if (APIValueMatch(item.email, search)) {
        return true;
      }
      if (APIValueMatch(item.gender, search)) {
        return true;
      }
      if (APIValueMatch(item.status, search)) {
        return true;
      }
      return false;
    });
    return filterList;
  }, [search,users]);

  //   const [filterUser, setFilterUser] = useState([]);
  //   useEffect(() => {
  //     console.log("USE EFFECT WITH DEPEN");
  //     let x=users.filter((item) => {
  //       if (APIValueMatch(item.name, search)) {
  //         return true;
  //       }
  //       if (APIValueMatch(item.email, search)) {
  //         return true;
  //       }
  //       if (APIValueMatch(item.gender, search)) {
  //         return true;
  //       }
  //       if (APIValueMatch(item.status, search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //     setFilterUser(x);
  //   }, [search]);

  console.log("render");

  return (
    <div id="overall-container">
      <h1>SEARCH FROM API</h1>
      <input
        id="input-tag"
        placeholder="Search for users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <div id="cards-div">
        {filterUser.map((items) => {
          return (
            <div id="user-card-div">
              <h4>
                <span style={{ color: "#630263" }}>Name: </span>
                {items.name}
              </h4>
              <h4>
                <span style={{ color: "#630263" }}>Email: </span>
                {items.email}
              </h4>
              <h4>
                <span style={{ color: "#630263" }}>Gender: </span>
                {items.gender}
              </h4>
              <h4>
                <span style={{ color: "#630263" }}>Status: </span>
                {items.status}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default APIParent;
