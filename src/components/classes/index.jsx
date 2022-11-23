import React from "react";
import Hooks from "../hooks";
import { Container } from "../../root/style";

class Classes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
        }
    }
    render() {
        console.log();

        const plus =()=>{
            this.setState({count:this.state.count+1})
        }

        const minus =()=>{
            this.setState({count:this.state.count-1})
        }
        return ( 
             <Container>
            <h1>Hello Class Components</h1>
            <h1>Count: {this.state.count}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <hr />
            <Hooks count={this.state.count}/>


            </Container>
        );
    }
}

export default Classes;