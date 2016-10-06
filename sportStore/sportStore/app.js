var express = require("express");
var app = new express();


app.use("/",express.static(__dirname + "/Application/public"));
app.use("/admin", express.static(__dirname + "/Application/admin"));

//app.get("/", function (req, res) {

//    console.log("I send your public project");
//});

app.listen(8080, "127.0.0.1");
