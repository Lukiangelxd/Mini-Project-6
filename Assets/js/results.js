/* This is for the search-results page.
For the search url, it will need to use... https://api.github.com/LibraryOfCongress/data-exploration probably.
That, or it's https://www.loc.gov/{endpoint}/?fo=json.
This needs to take in the information given by the queries. So... document.location.search.
*/

//Variables needed are The API URL, and the Search Queries.
var requestUrl = "https://www.loc.gov/";
var queryString = document.location.search;
// This is getting me {Query}&format. I should truncate it.
var queryHolder = queryString.split("=")[1];
var queryQuery = queryHolder.substring(0,queryHolder.length-6);
console.log(queryQuery);
var queryFormat = queryString.split("=")[2];
console.log(queryFormat);

//This is specifically for if there's no query format. So... It will need to check for that. A simple None Format should do it.
if(queryFormat = "none") {
fetch(requestUrl + "search/?q=" + queryQuery + "fo=json") 
    .then(function (response) {
        console.log(response);
        return response;
    })
    .then(function (data) {
        console.log(data);
    })
}
else {
    fetch(requestUrl + queryFormat + "/?q=" + queryQuery + "fo=json") 
    .then(function (response) {
        console.log(response);
        return response;
    })
    .then(function (data) {
        console.log(data);
    })
}

/* Step One: Set up basic Variables.
Step Two: Parse the Queries, and then fetch it through the request URL.
Step Three: Take the response, and break it into the seperate data points. I'll need to console log what form it comes out as.
Step Four: Place each data point into it's own box. This should need a for loop.
Step Five: Add a re-searching method. Basically just crib it from script.js.

So this is sending to somewhere. And the site is recieving and returning something.
I'm not sure why I'm not getting the exact information that the loc website prints out...
The main website does have the same data that the search does, vs the api version. I just need to find out where mine is.
Okay. So I have missing objects and arrays... for no apparent reason. Is it because I'm not using the api exactly?
No... It shouldn't be. I'll try parsing it. That didn't work.
 */