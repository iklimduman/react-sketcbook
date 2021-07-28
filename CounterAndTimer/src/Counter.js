import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    handleIncrease = (e) => {
        e.preventDefault();
        console.log(this);

        this.setState((state,props) => ({
            count : state.count - 1 ,
        }));
    }

    handleDecrease = (e) => {
        e.preventDefault();

        this.setState((state, props) => ({
            count : state.count + 1 ,
        }));
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleIncrease}>-</button>
                <button onClick={this.handleDecrease}>+</button>
            </div>
        )
    }

}

export default Counter ;