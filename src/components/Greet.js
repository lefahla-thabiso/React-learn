import React from "react";

// function Greet(){
//     return <h1> Thabiso Nthako</h1>
// }

const Greet = (props) => {
    console.log(props)
    return  (
        <div>
            <h1>Hallo {props.batho} a.k.a {props.akaName}</h1>
            {props.children}
        </div>
    )
}
export default Greet;