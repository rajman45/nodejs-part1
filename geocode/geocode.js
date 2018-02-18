const request = require("request");

var geoCode=(address,callback)=>{
	//console.log(encodeURIComponent(argv));
	var address=encodeURIComponent(address);
	request({
		url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
		json:true

	},(error,response,body)=>{
		//console.log(JSON.stringify(body,undefined,2));
		console.log(error);
		if(error){
			callback(`Unable to connect to the google`);
			// console.log(`Unable to connect to the google`);
		}else if(body.status === 'ZERO_RESULTS'){
			// console.log(`Unable to find address`);
			callback(`Unable to find address`);

		}else if(body.status === 'OK'){
			callback(undefined,{
				address:body.results[0].formatted_address,
				latitute:body.results[0].geometry.location.lat,
				longitute:body.results[0].geometry.location.lng
			});
			// console.log(`Address: ${body.results[0].formatted_address}`);
		}
		
	});
};

var weather=(lat,lng,callback)=>{
	request({
		url:`https://api.darksky.net/forecast/7207a19271be1ab4ca4f4a60ff11f1b4/${lat},${lng}`,
		json:true

	},(error,response,body)=>{
		// console.log(JSON.stringify(response,undefined,2));
		if(error){
			callback(`Unable to connect to the google`);
			// console.log(`Unable to connect to the google`);
		}else if(response.statusCode === 400){
			// console.log(`Unable to find address`);
			callback(`Unable to find address`);

		}else if(response.statusCode === 200){
			callback(undefined,{
				temperature:body.currently.temperature
				});
			
		}
		 // console.log(body.currently.temperature);
	});
}

module.exports.geocodeAddress=geoCode;
module.exports.getWeather=weather;