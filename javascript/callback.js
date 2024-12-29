function databasesharing(){
    console.log("data stored successfully");
}

function submitform(formMsg, dbs){
    setTimeout(() => {
    dbs()
    console.log(formMsg)
    },2000)
}
submitform("Form submitted successfully",databasesharing)