
var fetchButton = document.getElementById('fetch-button');
var termEl = document.getElementById("input");


function searchUp(e) {
    var s = termEl.value;
    console.log(s);
    var ids = "";
    var links =- [];
    var results = [];

    fetch ('https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + s)
    
    .then (response => {
        return response.json();
    })
    .then (results => {
        results = results.query.search;
        console.log(results);
        
        return results;
    })
    .then (a => {
        fetch('https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&format=json&pageids=' + a[0].pageid)
        .then (idresult => {
            return idresult.json();
        })
        .then (idresult => {
            console.log(idresult);
        
                document.getElementById("output").innerHTML+=a[0].snippet+"<br>";
            
                document.getElementById("output").innerHTML+="<a href='"+idresult.query.pages[a[0].pageid].fullurl+"'target='_blank'>"
                +idresult.query.pages[a[0].pageid].title+"</a>"
        
        });
    });
}

fetchButton.addEventListener('click', searchUp);git status