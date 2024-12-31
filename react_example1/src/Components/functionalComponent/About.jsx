import React from "react";

var About = (props) => {
    var styling ={
        color: "rgb(115, 41, 41)",
        textDecoration: "underline",
        fontSize: "30px",
        textAlign: "center"
    }
    return( 
        <section>
        <h1> This is About Page</h1>
        <h2 style={styling}>Learning Props</h2>
        <h2>Iam teaching in {props.college} College</h2>
        <h2>Iam teaching also in {props.clg1}, {props.clg2} Colleges</h2>
        </section>
    )
}
export default About;