fetch(
        'https://jooble.org/api/' + 'efebc8f0-344d-47a3-8970-4510f311c807',
        { method: 'POST', 
          keywords:'it',
          location: 'Bern',}
      )
      .then( response => {
              alert(response.json())
              console.log(response);
          });
        //   .catch( error => console.error('error:', error) );
        
        showData = getAPI => {
            document.getElementById("dummyDiv").
            innerHTML = showData();
            console.log("APIData:",showData);
        }



// function getAPI() {
    
//     var url = "https://jooble.org/api/";
//     var key = "efebc8f0-344d-47a3-8970-4510f311c807";
//     var params = "{ keywords: 'it', location: 'Bern'}"
    
//     //create xmlHttpRequest object
//     var http = new XMLHttpRequest();
//     //open connection. true - asynchronous, false - synchronous
//     http.open("POST", url + key, true);
    
//     //Send the proper header information
//     http.setRequestHeader("Content-type", "application/json");
        
//     //Callback when the state changes
//     http.onreadystatechange = function() {
//         if(http.readyState == 4 && http.status == 200) {
//             console.log(http.responseText);
//         }
//     }
//     //Send request to the server
//     http.send(params);
// }

// // getting stuck here trying to display data that we are "fetching"
// // showData = http => {
// //     const dataDiv = document.querySelector('#dummyDiv');
// //     data.forEach(http => {
// //       const dataElement = document.createElement('p');
// //       dataElement.innerText = `Data: ${character.name}`;
// //       dataDiv.append(dataElement);
// //     });
// //   }