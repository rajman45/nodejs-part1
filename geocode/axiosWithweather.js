
const axios = require("axios");

var url ="https://maps.googleapis.com/maps/api/geocode/json?address=380052";
axios.get(url).then((res)=>{
	console.log(res.data.results[0].formatted_address);
	var lat=res.data.results[0].geometry.location.lat;
	var lng=res.data.results[0].geometry.location.lng;
	var weatheru=`https://api.darksky.net/forecast/7207a19271be1ab4ca4f4a60ff11f1b4/${lat},${lng}`;
	return axios.get(weatheru);
})
.then((res)=>{
	console.log(res.data.currently.temperature);
})
.catch((e)=>{
	console.log(e);
});