//server creation using express using command npm i express

var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var User = require('./models/users')
var app = express()
const PORT = 3001;
var cors = require('cors')
app.use(express.json())
app.use(cors())

mdb.connect("mongodb://127.0.0.1:27017/kec").then(() => {
    console.log("MongoDB connection successful")
}).catch(() => {
    console.log("Check your connection string")  //connection string is the url to connect to mongodb
})

app.get('/', (req, res) => {
    res.send("Welcome to Backend Server")
})

app.get('/json', (req, res) => {
    res.json("Welcome to Backend")
})

app.get('/static', (req, res) => {
    console.log("Running")
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/signup', (req, res) => {
    console.log(req.body);
    var {firstName , lastName, email , password}=req.body
    console.log(firstName , lastName, email , password);
    try {
        var newUser = new User(req.body)
        console.log(req.body.password);
        newUser.save();
        console.log("User Added Successfully");
        res.status(200).send("User Added Succussfully")
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/getsignup', async(req,res) => {
    try{
        var allSignupRecords = await User.find()
        res.json(allSignupRecords)
        console.log("All data fetched")
    }
    catch(err){
        console.log("Cannot able to read the records")
    }
})

app.post('/login', async(req,res) => {
    var {email, password} = req.body
    try{
        var existingUser = await User.findOne({email:email})
        if(existingUser){
            if(existingUser.password !== password){
                res.json({message: "Login fail", isLoggedIn:false})
            }
        
        else{
            res.json({message: "Login successful", isLoggedIn:true})
        }
    }
        else{
            res.json({message: "Login fail", isLoggedIn:false})
        }

    }
    catch(err){
        console.log("Login failed")
    }
})

app.listen(PORT, () => {
    console.log(`Backend Server Started \n Url: http://localhost:${PORT}`) //listen should always be at the last
})