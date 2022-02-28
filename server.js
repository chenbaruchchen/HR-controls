const express = require('express')
const app = express()
const http = require('http').Server(app);
// const connection = require('./chat/open')
const connection=require  ('./chat/chat')

const io = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:3000/",
      methods: ["GET", "POST"]
    }
  });

var cors = require('cors')
 
 const mongoose = require("mongoose");

const usersRoutes=require("./api/routes/users")
const secretRoutes=require("./api/routes/secret")

const roomsRoutes=require("./api/routes/roomsRoutes")


  
require("dotenv").config()
 
mongoose.connect(process.env.db,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

mongoose.connection.on("connected",()=>{
    console.log("mongoose connect")
})
console.log("pass")

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

  app.use(express.json())

 
  app.use("/api/user/rooms", roomsRoutes)

app.use("/api/users", usersRoutes)
app.use("/api/secret", secretRoutes)


 
    




//**  chat app */

connection.addToRoom(io,1)
 

 

app.use((error, req,res,next)=>{
   res.status(error.status||500)
   res.json({
       error:{
           message:error.message
       }
   })
} )


const path = require('path');

 
 
// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client", "index.html"));
});


http.listen(process.env.PORT||3300)