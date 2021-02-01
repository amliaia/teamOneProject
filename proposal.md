1. Project Title - Job Availability App

2. Application will collate available jobs/careers by sector, title, and location

3. User story
    Who - App is for job seekers
    What - Filtered search results for jobs by location
    Goal - find a job

4. App wireframe
## Screenshots
![Example screenshot](./images/projectOneWireframe.jpg)

5.  APIs to be used

    Indeed -
    https://opensource.indeedeng.io/api-documentation/docs/job-search/

    ## The following example shows a search request for Java developers (q) in Austin, TX (l):

        https://api.indeed.com/ads/apisearch?publisher=123412341234123&q=java+developer&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&!latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2

    Jooble, API key: Your API key is: "efebc8f0-344d-47a3-8970-4510f311c807".
    Code provided by Jooble from https://jooble.org/api/about
    <!-- <var url = "https://jooble.org/api/";
    <!-- var key = "<YOUR_API_KEY>";
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
	} -->
<!-- }
//Send request to the server
http.send(params);> --> -->

Optional:

Glassdoor.com

    ## Attribution
    You must use the following attribution when displaying Glassdoor's API results. Copy the code below and paste it near the results on your web page:

    <a href='https://www.glassdoor.com/index.htm'>powered by <img src='https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png' title='Job Search' /></a>
    powered by	Job Search

    Request Structure
    All Glassdoor API requests share some common parameters, and a typical call will look like this:

    http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=120&t.k=fz6JLNDfgVs&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0

6. Tasks
    Landing Page
    Search Function
    Fetch
    Local Storage
    Display Results

