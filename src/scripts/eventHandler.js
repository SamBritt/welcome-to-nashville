const handleAddConcertResultsToDom = () => {
    getCalls.getConcerts(document.querySelector("#concerts-input").value).then(parsedResponse => appendConcertResultsToDom(parsedResponse))
    //document.querySelector(“#form”).reset();
 }

 const handleAddRestaurantResultsToDom = () => {
    getCalls.getRestaurants(document.querySelector("#restaurants-input").value).then(parsedResponse => appendRestaurantResultsToDom(parsedResponse))
    //document.querySelector(“#form”).reset();
 }

 