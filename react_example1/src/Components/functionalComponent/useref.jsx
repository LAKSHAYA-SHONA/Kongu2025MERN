import { useEffect, useRef, useState } from "react"

var UseRef = () =>{
    var [text, setText] = useState("")
    var prevText = useRef()
    useEffect(() => {
        prevText.current = text
    }, [text])
    var [num , setCount] = useState()
    var prevNum = useRef()
    useEffect(() => {
        prevNum.current = num
    }, [num])
    return(
        <div>
            <h1>This is an example of useRef</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <h2>My Current Render is {text}</h2>
            <h3>My Previous Render is {prevText.current}</h3>
            <input type="number" value={num} onChange={(e) => setCount(e.target.value)}></input>
            <h2>My Current Render is {num}</h2>
            <h3>My Previous Render is {prevNum.current}</h3>
        </div>
    )
}
export default UseRef;