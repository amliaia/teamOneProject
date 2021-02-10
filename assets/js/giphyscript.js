
var searchForm = document.querySelector("#search-form");

function fetchGifs(e) {
    e.preventDefault();
    var searchTerm = document.querySelector(".search").value;

    fetch("https://api.giphy.com/v1/gifs/search?&q=" + searchTerm + "&limit=20&api_key=uwfGVryAAQRWE03fz66tfFjbFGjQdJ4f")

    .then((response) => {return response.json(); })
    .then((data => {
        
        let array = data.data
        
        displayGifs(array);
    }))
    .catch(err => console.log(err)); 
}

function displayGifs(array) {
  const results = document.querySelector(".results");
  let output = '<div class="container">';

  array.forEach(function(imgData) {
      var imgElStr = "<img src=" + imgData.images.fixed_width.url + "/>";
      output += imgElStr;
   });

  document.querySelector('.results').innerHTML = output;
}

searchForm.addEventListener("submit", fetchGifs);