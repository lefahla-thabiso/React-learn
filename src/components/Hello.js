import React,{Component} from "react";

/*
    return(
        <div id='thabiso' className='nthako'>
            <h1> message here </h1>
        </div>
    )

*/
const Hello = () => { //JSX fomart
    return React.createElement('div',{id:'thabiso',className:'nthako'},
            React.createElement('h1',null,'message here')
        )

}

export default Hello;