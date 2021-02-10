
var termSearch = document.querySelector("#term");

function fetchInformation(e) {
    e.preventDefault();
    var searchTerm = document.querySelector(".search").value;
    fetch("https://api.giphy.com/v1/gifs/search?&q=" + searchTerm + "&limit=10&api_key=uwfGVryAAQRWE03fz66tfFjbFGjQdJ4f")

    .then((response) => {
        return response.json(); 
    })

    .then((data => {        
        let array = data.data
        console.log(array);
        
        showInformation(array);
    }))

    .catch(err => console.log(err));

function showInformation(array) {
  var results = document.querySelector(".results");
  let output = '<div class="container">';

  array.forEach((imgData) => {
    output += `<img src="${imgData.images.fixed_width.url}"/>`;
  });

  document.querySelector('.results').innerHTML = output;
}

termSearch.addEventListener("submit", fetchInformation);
}