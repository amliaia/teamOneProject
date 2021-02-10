
// var termSearch = document.querySelector("#search-text");
// var fetchButton = document.getElementById('#button1');

// function fetchInformation(e) {
//     e.preventDefault();
//     var searchTerm = document.querySelector(".search").value;
//     fetch("https://api.giphy.com/v1/gifs/search?&q=" + searchTerm + "&limit=20&api_key=uwfGVryAAQRWE03fz66tfFjbFGjQdJ4f")

//     .then((response) => {
//         return response.json(); 
//     })

//     .then((data => {        
//         let array = data.data
//         console.log(array);
        
//         showInformation(array);
//     }))

//     .catch(err => console.log(err));

// function showInformation(array) {
//   var results = document.querySelector(".results");
//   let output = '<div class="container">';

//   array.forEach((imgData) => {
//     var imgElStr = "<img src=" + imgData.images.fixed_width.url + "/>";
//     output += imgElStr;
//    });

//   document.querySelector('.results').innerHTML = output;
// }

// fetchButton.addEventListener("click", fetchInformation);
// }


var gifForm = document.querySelector("#SubmitButton");

function fetchGiphs(e) {
    e.preventDefault();
    const searchTerm = document.querySelector(".search").value;

    fetch("https://api.giphy.com/v1/gifs/search?&q=" + searchTerm + "&limit=20&api_key=uwfGVryAAQRWE03fz66tfFjbFGjQdJ4f")

    .then((response) => {return response.json(); })
    .then((resp => {
        
        let dataArray = resp.data
        
        showGiphs(dataArray);
    }))
    .catch(err => console.log(err)); 
}

function showGiphs(dataArray) {
  const results = document.querySelector(".results");
  let output = '<div class="container">';

  dataArray.forEach(function(imgData) {
      var imgElStr = "<img src=" + imgData.images.fixed_width.url + "/>";
      output += imgElStr;
   });

  document.querySelector('.results').innerHTML = output;
}

gifForm.addEventListener("click", fetchGiphs);