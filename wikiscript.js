$("#search").click(() => {

    searchTerm = $("#searchTerm").val()
    $.ajax ({
        url: "https://en.wikipedia.org/w/wiki.php",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        method: "GET",
        dataType: "jsonp",
        data: "",
        success: function(data) {
            dataNum = Object.keys(data.query.pages)[0]
            $("#data").empty()
            $("data").append("<h1>${data.query.pages[dataNum].title}</h1>")
            $("data").append(data.query.pages[dataNum].extract)
        }

    })
})