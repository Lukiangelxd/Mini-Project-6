/* This is for the index.html.
This needs to set up a submission button to listen to, to then submit info via.
It needs a dropdown menu.
*/
//For Elements, I need to grab the Search Form.
var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document.querySelector("#search");
var formatInputEl = document.querySelector("#format");

var formSubmission = function (event) {
    console.log(1);
    event.preventDefault();
    //This needs to grab the info submitted from the lines of the searchFormEl.
    var searchInput = searchInputEl.value.trim();
    var formatInput = formatInputEl.value.trim();
    //In the event the search is empty, there's nothing to search.
    if (searchInput === "") {
        alert('Please enter something to search.');
        console.log(2);
    }
    else{
        console.log(3);
        location.replace("./search-results.html?q=" + searchInput + "&format=" + formatInput);
    }
}

searchFormEl.addEventListener('submit',formSubmission); 
/* Step One: Determine what Elements to get from the document, and other variables to use. Done.
Step Two: Set up basic button listener function, to pass values into another function. Done.
Step Three: Set up info submitter function. Make a in case of no info submitted, either ignore or don't move. Done.
*/
