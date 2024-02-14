import React,{Component} from "react";

class Welcome extends Component{
    render(){
        return <h1> Welcome {this.props.batho} a.k.a {this.props.akaName}</h1>
    }
}

export default Welcome; 