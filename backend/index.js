//server creation using express using command npm i express

var express = require('express')
var app = express()
const PORT = 3001
app.get('/', (req,res) => {
    res.send("Welcome to Backend Server")
})
app.get('/json', (req,res) => {
    res.json("Welcome to Backend")
})
app.listen(PORT, () => {
    console.log(`Backend Server Started \n Url: http://localhost:${PORT}`) //listen should always be at the last
})