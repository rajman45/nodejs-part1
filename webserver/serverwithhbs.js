const express = require("express");
const hbs = require("hbs");

const port =process.env.PORT || 3000;

var app = express();



app.set("view engine","hbs");

//app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + "/views/includes");
hbs.registerHelper("vname",()=>{
	return "Helper Test";
});

hbs.registerHelper("capital",(text)=>{
	return text.toUpperCase();
});
// console.log(__dirname);
//Middleware
app.use((req,res,next)=>{
	console.log(req.url);
	 next();
});
// app.use((req,res,next)=>{
// 	res.render("../webserver/views/about.hbs",{
// 	 	Title:"Under Maintaince",
// 	 	currentYear:new Date().getFullYear()
// 	 });
// });
//middleware

app.get("/about",(req,res)=>{
	 res.render("../webserver/views/about.hbs",{
	 	Title:"About Us",
	 	currentYear:new Date().getFullYear()
	 });
	
});

app.get("/",(req,res)=>{
	 res.render("../webserver/views/about.hbs",{
	 	Title:"Home",
	 	currentYear:new Date().getFullYear()
	 });
	
});


app.listen(port,()=>{
	console.log(`server is up on port ${port}`);
});