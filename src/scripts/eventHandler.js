/*
    These 4 handler functions serve the purpose of intitializing our get calls from each API. The user input in the form container is used to search each database. When the results return, the specific values that we selected to display are appended to the results container
*/
const handleAddConcertResultsToDom = () => {
    getCalls.getConcerts(document.querySelector("#concerts-input").value).then(parsedResponse => appendConcertResultsToDom(parsedResponse))
    document.querySelector("#concerts-input").value = "";
}

const handleAddRestaurantResultsToDom = () => {
    getCalls.getRestaurants(document.querySelector("#restaurants-input").value).then(parsedResponse => appendRestaurantResultsToDom(parsedResponse))
    document.querySelector("#restaurants-input").value = "";
}


const handleAddParksResultsToDom = () => {
    const selection = document.getElementById("selections");
    userSelection = selection.options[selection.selectedIndex].value
    getCalls.getParks(userSelection).then(parsedResponse => appendParksResultsToDom(parsedResponse))

}

const handleAddMeetupsResultsToDom = () => {
    let input = document.querySelector("#meetups-input").value;
    buildMeetupsArray(input);
}

/*
    Create an object that serves the purpose of structuring our intinerary object so we can put the values into the database.json as well as post them to the My Itinerary container.
*/

let itineraryObject = {
    park: "",
    restaurant: "",
    meetup: "",
    concert: ""
}

/*
    Handler for the save buttons in the results container. The switch statement checks to see which class of li has been clicked on in order to assign the text value to the correct key value in the itinerary object. The while statement will remove any existing objects in the My Itinerary container, then it will put the object with its values into database.json. Then we use a get statement (see putItinerary expression in apiManager.js) that gets the updated object from our database.json. Within the getItinerary function, we call the buildItinerary function which appends the object to My Itinerary container.
*/

const handleSaveButton = () => {

    switch (true) {
        case (event.target.parentNode.classList.contains("parks")):
            itineraryObject.park = event.target.parentNode.firstChild.textContent;
            break;
        case (event.target.parentNode.classList.contains("restaurants")):
            itineraryObject.restaurant = event.target.parentNode.firstChild.textContent;
            break;
        case (event.target.classList.contains("meetups")):
            itineraryObject.meetup = event.target.parentNode.firstChild.textContent;
            break;
        case (event.target.parentNode.classList.contains("concerts")):
            itineraryObject.concert = event.target.parentNode.firstChild.textContent;
            break;
    }
    while (itineraryDiv.firstChild) {
        itineraryDiv.removeChild(itineraryDiv.firstChild);
    }
    putItinerary(itineraryObject)
      
}

// function to save itinerary and post to database
const handleSaveItineraryButton = () => {

    while (itineraryDiv.firstChild) {
        itineraryDiv.removeChild(itineraryDiv.firstChild);
    }
    postItinerary(itineraryObject);


}

// 
// const handleSaveAllItineraries = () => {
    
// }