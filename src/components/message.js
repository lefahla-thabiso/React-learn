import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            Message:'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            Message:'Thank you for subcribing'
        })
    }
    render(){
        return (
            <div>

        <h1> {this.state.Message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>

            </div>
        )
    }
}

export default Message;