import React from "react";
import {useState} from "react";

var Gallery = () => {
    var [counter, setCount] = useState(0);
    var styling ={
        color: "rgb(115, 41, 41)",
        textDecoration: "underline",
        fontSize: "30px",
        textAlign: "center"
    }
    function increment(){
        setCount(counter+1)
    }
    return(
        <section>
         <h1>This is Gallery Page</h1>
         <h2 style ={styling}>Learning State Concept</h2>
         <h3>The state of my variable is {counter} </h3>
         <button onMouseOver={increment}>Increment</button>    
         <button onDoubleClick={() => {setCount(counter-1)}}>Decrement</button>  
         <button onClick={() => {setCount(counter=0)}}>Reset</button>
         </section>
    )
}
export default Gallery;