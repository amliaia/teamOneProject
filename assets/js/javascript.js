var fetchButton = document.getElementById("button1");
var termEl = document.getElementById("input");

function searchUp(e) {
  var s = termEl.value;
  console.log(s);
  
  fetch("https://jooble.org/api/" + "efebc8f0-344d-47a3-8970-4510f311c807",
    {
      method: "GET",
      credentials: 'same-origin',
      redirect: 'follow',
      // keywords: "it",
      // location: "Bern",
    }
  )
  .then((response) => {
    // alert(response.json());
    

    return response.json()
  });
  console.log(response);
  //   .catch( error => console.error('error:', error) );

//   showData = (getAPI) => {
//     document.getElementById("output").innerHTML = showData();
//   };
// }
}

fetchButton.addEventListener("click", searchUp);

