const request = require("request");
const yargs = require("yargs");
const geocode=require('./geocode/geocode');
const argv=yargs
.options({
	a:{
		demand:true,
		alias:'address',
		describe:'Address to fetch weather',
		string:true
	}
}).help()
.alias('help','h')
.argv;
geocode.geocodeAddress(argv.a,(errorMsg,Results)=>{
	if(errorMsg){
		console.log(errorMsg);
	}else{
		// console.log(JSON.stringify(Results,undefined,2));
		console.log(`Address is : ${Results.address}`);
		geocode.getWeather(Results.latitute,Results.longitute,(errorMsg,Res)=>{
			if(errorMsg){
				console.log(errorMsg);
			}else{
				// console.log(JSON.stringify(Res,undefined,2));	
				console.log(`Temperature : ${Res.temperature}`)
			}
		});	
	}
	
});
//https://api.darksky.net/forecast/7207a19271be1ab4ca4f4a60ff11f1b4/28.5953246,77.3118642
