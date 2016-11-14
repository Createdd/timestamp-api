var express = require ("express");//add the express module
var app = express();//start the server
var moment = require("moment");//add the moment module for simplified time manipulation and validation
var fs = require("fs");//add the fs module
var path = require("path");//add the path module
var port= 3000;

app.get("/", function(req, res){
  var fileName = path.join(__dirname, "index.html");
  res.sendFile(fileName, function(err){
    if(err){
    console.log("failed");
    res.status(err.status).end();
    } else {
    console.log("Sent:", fileName);
    }
  });//send a html file and handle error function
});//Routing http get request to a certain path with a callback function
app.get("/test", function(req, res){
  res.send("works well!!!!!");
});//test response

app.get("/:datestring", function(req, res){
  var timeStamp;
  if(/^\d{8,}$/.test(req.params.datestring)){
    timeStamp=moment(req.params.datestring, "X");//if the input starts with at least 8 decimal numbers store it in unix format
  } else {
    timeStamp=moment(req.params.datestring, "MMMM D, YYYY");//else store the input in the readable format
  }
  if(timeStamp.isValid()){
    res.json({
      unix: timeStamp.format("X"),
      natural: timeStamp.format("MMMM D, YYYY")
    });//if the stored date is a valid date respond a json object in the format the callenge requires
  } else {
    res.json({
      unix: null,
      natural: null
    });//if the stored date is a ivvalid date respond a json object with null
  }//validate the date with the momentum method .isValid
});

app.listen(port, function(){
  console.log("Listening on Port: "+port);
});//Start a socket. Is identical to "http.Server.listen". Returns a sever object!
