var fetchButton = document.getElementById("button1");
var termEl = document.getElementById("input");

// var fetchButton = document.getElementById("submit");
// var termEl = document.getElementById("user-search")

function searchUp(e) {
  var query = termEl.value;
  console.log(query);

  fetch("https://api.giphy.com/v1/gifs/search?" + query + "&api_key=uwfGVryAAQRWE03fz66tfFjbFGjQdJ4f&limit=10")

  .then(response => {
      console.log(response);
      return response.json();
      
  })
  .then(data)
}

fetchButton.addEventListener("click", searchUp);

