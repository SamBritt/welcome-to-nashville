// get parks call
getParks: function (feature) {
    return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${feature}=Yes&$limit=4`)
    .then(response => response.json())
}

// parks results to dom
const handleAddParksResultsToDom = () => {
    const selection = document.getElementById("selections");
    userSelection = selection.options[selection.selectedIndex].value
    getCalls.getParks(userSelection).then(parsedResponse => appendParksResultsToDom(parsedResponse))
}

// ================ in dom manager ===================
const buildHTMLforParksResults = (resultObject) => {
    list.appendChild(buildElementWithText("li", resultObject.park_name + ": " + resultObject.mapped_location_address))
    return list;
}

const appendParksResultsToDom = (resultArray) => {
    let resultsFragment = document.createDocumentFragment();
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }

    resultArray.forEach(item => {
        resultsFragment.appendChild(buildHTMLforParksResults(item));
    })

    resultsContainer.appendChild(resultsFragment);

}

const parksSearchButton = document.querySelector("#parksButton");
parksSearchButton.addEventListener("click", handleAddParksResultsToDom);