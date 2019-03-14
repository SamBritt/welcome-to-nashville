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

const handleSaveButton = () => {
    


    
}

const handleAddMeetupsResultsToDom = () => {
    getCalls.getMeetups(document.querySelector("#meetups-input").value).then(parsedResponse => buildMeetupsArray(parsedResponse));
}
