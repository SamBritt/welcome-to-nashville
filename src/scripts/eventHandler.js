const handleAddConcertResultsToDom = () => {
    getCalls.getConcerts(document.querySelector("#concerts-input").value).then(parsedResponse => appendConcertResultsToDom(parsedResponse))
    //document.querySelector(“#form”).reset();
}

const handleAddRestaurantResultsToDom = () => {
    getCalls.getRestaurants(document.querySelector("#restaurants-input").value).then(parsedResponse => appendRestaurantResultsToDom(parsedResponse))
    //document.querySelector(“#form”).reset();
}
//document.querySelector("#form").reset();
// }

const handleAddParksResultsToDom = () => {
    const selection = document.getElementById("selections");
    userSelection = selection.options[selection.selectedIndex].value
    getCalls.getParks(userSelection).then(parsedResponse => appendParksResultsToDom(parsedResponse))
}

const handleAddMeetupsResultsToDom = () => {
    getCalls.getMeetups(document.querySelector("#meetups-input").value).then(parsedResponse => buildMeetupsArray(parsedResponse));
}
let itineraryObject = {
    park: "",
    restaurant: "",
    meetup: "",
    concert: ""
}
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

    console.log(itineraryObject);
}