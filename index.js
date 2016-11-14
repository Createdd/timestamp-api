var express = require ("express");//add the express module
var app = express();
var moment = require("moment");//add the moment module
var fs = require("fs");//add the fs module
var path = require("path");//add the path module
var port= 3000;


app.get("/", function(req, res){
  res.send("Server functioniert!!");
});//Send data to the Server



app.listen(port, function(){
  console.log("Listening on Port: "+port);
});//Set the app to listen to the port
