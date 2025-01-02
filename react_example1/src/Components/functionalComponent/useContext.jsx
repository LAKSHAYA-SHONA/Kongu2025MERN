import { createContext } from "react";
import Component2 from "./contextComponents/component2";
import React from "react";

export var ThemeProvider = React.createContext()
var UseContext = () => {
    return (
        <div>
            <ThemeProvider.Provider value= {{sgpa : "10.00", cgpa : "9.90"}}>
                <h1>This is example of useContext parent component</h1>
                <Component2 />
            </ThemeProvider.Provider>
        </div>
    )
}
export default UseContext;