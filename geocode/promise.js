var add=(a,b)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(typeof a ==="number" && typeof b ==="number"){
				resolve(a+b);
			}else{
				reject("Argument must be number");
			}

		},1500);

	});
	
};

// catch use for all error

add(5,7).then((res)=>{
	console.log("result :",res);
	return add(res,"50");
}).then((res)=>{
	console.log("Should : ",res);
}).catch((error)=>{
	console.log(error);
});

// use for different error with different message

// add(5,7).then((res)=>{
// 	console.log("result :",res);
// 	return add(res,"50");
// },(error)=>{
// 	console.log(error);
// }).then((res)=>{
// 	console.log("Should : ",res);
// },(error)=>{
// 	console.log("2: ",error);
// });



// var somPromise=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		reject('It worked');
// 	},2000);
// });

// somPromise.then((msg)=>{
// 	console.log(msg);
// },(e_msg)=>{
// 	console.log(e_msg);
// });