var express = require ("express");//add the express module
var app = express();
var moment = require("moment");//add the moment module
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

  });

});//Routing http get request to a certain path with a callback function

app.listen(port, function(){
  console.log("Listening on Port: "+port);
});//Start a socket. Is identical to "http.Server.listen". Returns a sever object!
