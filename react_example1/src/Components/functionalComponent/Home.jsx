import React from 'react'
import '../../assets/css/Home.css'

function HomePage() {
    var styling ={
        color: "rgb(115, 41, 41)",
        textDecoration: "underline",
        fontSize: "30px",
        textAlign: "center"
    }
    return (
    <div>
      <h1 style={styling}>This is Home Page</h1>
      <h2 id='idSEg'> Testing Styling </h2>
      <p className='box-model'>HELLO</p>
    </div>
  )
}
export default HomePage;