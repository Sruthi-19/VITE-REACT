import React from "react";

class Form_Component extends React.Component {
  state = {
    name: "",
    gender: "",
    interest: "",
    date: "",
    rating: "",
    college: "",
    about:"",
  };
  render() {
    return (
      <div style={{ display: "flex", columnGap:"40px",marginTop: "5%",marginBottom: "5%"}}>
        <form style={{backgroundColor:"rgba(14, 7, 7, 0.353)",padding:"20px"}}>
          <div style={{ display: "flex" }}>
            <h4 style={{ margin: "0%" ,marginRight:"20px"}}>NAME</h4>
            <input
              type={"text"}
              value={this.state.name}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ name: e.target.value });
              }}
            ></input>
          </div>

          <div style={{ display: "flex", marginTop: "10%" }}>
            <h4 style={{ margin: "0%",marginRight:"20px"}}>GENDER</h4>
            <input
              name="gender-group"
              type={"radio"}
              id={"male"}
              value={"Male"}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ gender: e.target.value });
              }}
            ></input>
            <label for={"male"}>Male</label>
            <input
              name="gender-group"
              type={"radio"}
              id={"female"}
              value={"Female"}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ gender: e.target.value });
              }}
            ></input>
            <label for={"female"}>Female</label>
          </div>


          {/* <div style={{ display: "flex", marginTop: "10%" }}>
            <h4 style={{ margin: "0%",marginRight:"20px"}}>AREA OF INTERESTS</h4>
            <input
              type={"checkbox"}
              id={"IoT"}
              value={"Internet of Things"}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ interest: e.target.value });
              }}
            ></input>
            <label for={"IoT"}>Internet of Things</label>
            <input
              type={"checkbox"}
              id={"ML"}
              value={"Machine Learning"}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ interest: e.target.value });
              }}
            ></input>
            <label for={"ML"}>Machine Learning</label>
          </div> */}


          <div style={{ display: "flex", marginTop: "10%" }}>
            <h4 style={{ margin: "0%",marginRight:"20px" }}>DATE OF BIRTH</h4>
            <input
              type={"date"}
              value={this.state.date}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ date: e.target.value });

              }}
            ></input>
          </div>


          <div style={{ display: "flex", marginTop: "10%" }}>
            <h4 style={{ margin: "0%",marginRight:"20px" }}>RATING</h4>
            <input
              type={"range"}
              min={"0"}
              max={"5"}
              value={this.state.rating}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ rating: e.target.value });
              }}
            ></input>
          </div>


          <div style={{ display: "flex", marginTop: "10%" }}>
            <h4 style={{ margin: "0%",marginRight:"20px" }}>
              <label for={"college-option"}>COLLEGE</label>
            </h4>
            <select
              name="college"
              id="colege-option"
              value={this.state.college}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ college: e.target.value });
              }}
            >
              <option value="COLLEGE">COLLEGE</option>
              <option value="KPR">KPR</option>
              <option value="PSG">PSG</option>
            </select>
          </div>


          <div style={{ display: "flex", marginTop: "10%", alignItems:"center" }}>
            <h4 style={{ margin: "0%",marginRight:"20px" }}>ABOUT YOURSELF</h4>
            <textarea rows={"5"} cols={"40"} value={this.state.about} onChange={(e)=>this.setState({about:e.target.value})}></textarea>
          </div>
        </form>

        
        <br></br>
        <div>
          <h2>FORM DATA:</h2>
          <h3>Name: {this.state.name}</h3>
          <h3>Gender: {this.state.gender}</h3>
          {/* <h3>Area of Interests: {this.state.interest}</h3> */}
          <h3>Date of Birth: {this.state.date}</h3>
          <h3>Rating: {this.state.rating}</h3>
          <h3>College: {this.state.college}</h3>
          <h3>About Yourself: {this.state.about}</h3>

        </div>
      </div>
    );
  }
}

export default Form_Component;
