import React from "react";

class Form_Component extends React.Component{
    state={
        name:"",
        email:""
    }

    HandleInputChange=(e)=>{
        const{value,name}=e.target;
        if (!name) {
            return;
          }
          this.setState({
            [name]: value,
          });
    }
    render(){
        const{
            name,
            email
        }=this.state;
        return(
            <div>
                <label for="name">ENTER NAME</label>
                <input type={"text"} name="name"value={name}onChange={this.HandleInputChange}></input>
                <label for="email">ENTER EMAIL</label>
                <input type={"email"} name="email" value={email} onChange={this.HandleInputChange}></input>

            <h1>Name:{name}</h1>
            <h1>Email:{email}</h1>
            </div>
        )
    }
    
}

export default Form_Component;