// fetching Jooble API 
var url = "https://jooble.org/api/";
var key = "efebc8f0-344d-47a3-8970-4510f311c807";
var params = "{ keywords: 'it', location: 'Bern'}"

//create xmlHttpRequest object
var http = new XMLHttpRequest();
//open connection. true - asynchronous, false - synchronous
http.open("POST", url + key, true);

//Send the proper header information
http.setRequestHeader("Content-type", "application/json");
	
//Callback when the state changes
http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		alert(http.responseText);
	}
}
//Send request to the server
http.send(params);
// 19 lines above are from https://jooble.org/api/about 

