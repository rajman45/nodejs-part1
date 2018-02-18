const express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.get("/",(req,res)=>{
	// res.send("<b>MK</b>");
	res.send({
		name:"Manish",
		Age:"20"
	});
});

app.get("/about",(req,res)=>{
	 res.send("<b>about</b>");
	
});


app.listen(3000);