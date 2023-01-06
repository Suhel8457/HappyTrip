// Configuration for Search
var oneWayDefaultDirection = true;
var numberOfAdults = 9;
var numberOfChildren = 9;
var numberOfInfants = 5;
// var searchManager = new SearchManager();

// initializing search
function init() {
    // 1. Have a way preselected
    setDefaultValueTravelDirection(oneWayDefaultDirection);

    // 2. Get cities
    loadCities();

    // 3. Get number of Adults

    // 4. Get number of Children

    // 5. Get number of Infants

    // 6. Get Flight Class

    // 7. Get Airline preference

    // 8. Get date criteria for search

    // 9.
}

function setDefaultValueTravelDirection(defaultValue) {
    // access the radio control btn and make it default
}

// To load cities from the backend in the control to give to user
function loadCities() {
    // 1. get cities
    var cities = getCities();

    // 2. Load cities to control
}

function getCities() {
    return searchManager.getCities();
}

function search() {
    // 1. Validate data entered in the form
    // 2. If it is valid -> Implement rules in seperate functions
    // 3. import the manager class
    // 4. Create an object callled search info
    // 5.  fill the object with search info
    // 6. Call the search manager search function
    // 18. Upon success redirect to search result page
}

function validateSearchInfo(searchInfo) {
    validateLocation();
    validateTravelDates();
    validateNumberOfTickets();
}

function validateLocation(searchInfo) {}
function validateTravelDates(searchInfo) {}
function validateNumberOfTickets(searchInfo) {}
