import React from "react";

class Closure_Component extends React.Component{
    state={
        counter:0
    }
    incrementFunction=()=>{
        this.setState((previousState)=>{
            return{
                counter: previousState.counter+1
            }
        })
    }
    render(){
        return(
            <div>
                <p>{this.counter}</p>
                <button onClick={this.incrementFunction}>Increment</button>
            </div>
        )
    }
}
export default Closure_Component