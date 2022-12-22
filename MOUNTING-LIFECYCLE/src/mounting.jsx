import React from "react";
// import Component2 from "./mounting2";

class Component1 extends React.Component {
  //CONSTRUCTOR METHOD
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      name: "Sruthi",
    };
    console.log("CONSTRUCTOR CALLED", this.state.name);
  }

  //GET DERIVED STATE FROM PROPS
  static getDerivedStateFromProps(props, state) {
    console.log("GET DERIVED STATE FROM PROPS",state.name);
    // return {name: "SHOBIKA"};
    // return {name: props.name};
    return null;
  }

  //COMPONENT DID MOUNT
  componentDidMount(){
    console.log("COMPONENT DID MOUNT");
  }

  render() {
    console.log("RENDER IS CALLED");
    return <h1>My name is: {this.state.name}</h1>;
  }
}

export default Component1;
