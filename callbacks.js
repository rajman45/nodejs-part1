var getUser=(id,callback)=>{
var user={
id:id,
name:'vikaram'
};
callback(user);
};
getUser(31,(user)=>{
console.log('Sum : ${user}');
});
