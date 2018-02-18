const request = require("request");

var geoCode=(address)=>{
	return new Promise((resolve,reject)=>{

		// console.log(encodeURIComponent(address));
		//var address=encodeURIComponent(address);
		request({
			url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
			json:true

		},(error,response,body)=>{
			//console.log(JSON.stringify(body,undefined,2));
			// console.log(error);
			if(error){
				reject("Unable to connect to the google");
				// console.log(`Unable to connect to the google`);
			}else if(body.status === 'ZERO_RESULTS'){
				// console.log(`Unable to find address`);
				reject("Unable to find address");

			}else if(body.status === 'OK'){
				resolve({
					address:body.results[0].formatted_address,
					latitute:body.results[0].geometry.location.lat,
					longitute:body.results[0].geometry.location.lng
				});
				// console.log(`Address: ${body.results[0].formatted_address}`);
			}else{
				 reject(JSON.stringify(body,undefined,2));
			}
			
		});
	});
};

var weather=(lat,lng)=>{
	return new Promise((resolve,reject)=>{
		request({
			url:`https://api.darksky.net/forecast/7207a19271be1ab4ca4f4a60ff11f1b4/${lat},${lng}`,
			json:true

		},(error,response,body)=>{
			// console.log(JSON.stringify(response,undefined,2));
			if(error){
				reject("weather: Unable to connect to the google");
				// console.log(`Unable to connect to the google`);
			}else if(response.statusCode === 400){
				// console.log(`Unable to find address`);
				reject("weather: Unable to find address");

			}else if(response.statusCode === 200){
				resolve({
					temperature:body.currently.temperature
					});
				
			}else{
				reject(JSON.stringify(response,undefined,2));
			}
			 // console.log(body.currently.temperature);
			});
		});
	};


geoCode("380052").then((res)=>{
	console.log("Address : ",res.address);
	return weather(res.latitute,res.longitute);
},(error)=>{
	console.log(error);
}).then((res)=>{
	console.log("Temparature : ",res.temperature);
},(error)=>{
	console.log(error);
});
