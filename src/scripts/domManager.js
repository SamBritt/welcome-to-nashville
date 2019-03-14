// buildResultList(getCalls.getMeetups());
const mainContainer = document.getElementById("display-container");

// Appending h1 to mainContainer
const buildPageHeader = document.createElement("H1");
buildPageHeader.textContent = "Welcome to Nashville";
mainContainer.appendChild(buildPageHeader);

// Function to build section element with nested h2
const buildSectionHTML = (sectionID, titleText) => {
    let section = document.createElement("section");
    section.id = (sectionID);
    let sectionTitle = document.createElement("H2");
    sectionTitle.textContent = (titleText);
    section.appendChild(sectionTitle);
    return section;
};

// Appending input-container to mainContainer
const inputContainer = mainContainer.appendChild(buildSectionHTML("input-container", "Search for stuff to do today"));

// Appending results-container to mainContainer
const resultsContainer = mainContainer.appendChild(buildSectionHTML("results-container", "Results"));

// Appending itinerary-container to mainContainer
const itineraryContainer = mainContainer.appendChild(buildSectionHTML("itinerary-container", "My itinerary"));


const buildResultList = (arr) => {
                
    
    //for each item in an array, for each element of that item (an object in this case),
    //create an 'li' element &
    //set the text content to be the value of that objects key, then
    //append it to the list
    arr.forEach(element => {
        let resultElement = document.createElement('li');
        let saveButton = document.createElement('button');
        saveButton.addEventListener("click", handleSaveButton);
        for (let item in element) {
            resultElement.textContent += `${element[item]} `;
            saveButton.className = 'meetups';
            saveButton.textContent = 'Save';
            resultElement.appendChild(saveButton);
            list.appendChild(resultElement);

        }
    })

    resultsContainer.appendChild(list);
}

let buildMeetupsArray = (search) => {
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
    //fetch results from getMeetups, then
    //for each item in that fetch call, create a shortened array,
    //map through that array, for each element in that array,
    //create an object, set the values to be name and time, return that result,
    //then pass the result into the buildResultList function.
    getCalls.getMeetups(search).then(response => {
        let condensedArr = response.events.slice(0, 4);
        let tempArr = condensedArr.map(e => {
            let tempObj = {};
            tempObj.name = e.name.text;
            tempObj.date = e.start.local;
            return tempObj;
        })
        console.log(tempArr);
        buildResultList(tempArr);
    })
}


const createFormContainer = () => {
    // this component pretty much builds the form section dynamically

    const buildFormElements = (elemInputID, elemBtnId, elemPlaceholder, elemLabel) => {
        const sectionEl = document.createElement("section");
        formEl.appendChild(sectionEl); // this will append to the form section

        const labelEl = document.createElement("label");
        labelEl.textContent = elemLabel;
        sectionEl.appendChild(labelEl);

        const inputEl = document.createElement("input");
        inputEl.id = elemInputID;
        inputEl.placeholder = elemPlaceholder;
        inputEl.type = "text";
        sectionEl.appendChild(inputEl);

        const buttonEl = document.createElement("button");
        buttonEl.id = elemBtnId;
        buttonEl.textContent = "Search";
        sectionEl.appendChild(buttonEl);

        return sectionEl
    }

    // ========================== Drop Box Area ===========================
    const formEl = document.createElement("fieldset");
    formEl.id = "fieldset";

    // this will build the parks section
    const sectionEl = document.createElement("section");
    formEl.appendChild(sectionEl); // this will append to the form section

    const labelEl = document.createElement("label");
    labelEl.textContent = "Parks ";
    sectionEl.appendChild(labelEl);

    const selectEl = document.createElement("select");
    selectEl.id = "selections"
    sectionEl.appendChild(selectEl);

    // ========================== refactor this later ===========================
    // ====================== options ===================
    const option1 = document.createElement("option");
    option1.textContent = "Dog Parks";
    option1.value = "dog_park";
    option1.id = "dog_park"
    selectEl.appendChild(option1);

    const option2 = document.createElement("option");
    option2.textContent = "Playground";
    option2.value = "playground";
    option2.id = "playground"
    selectEl.appendChild(option2);

    const option3 = document.createElement("option");
    option3.textContent = "Hiking Trails";
    option3.value = "hiking_trails"
    option3.id = "hiking_trails"
    selectEl.appendChild(option3);

    const option4 = document.createElement("option");
    option4.textContent = "Soccer Fields";
    option4.value = "soccer_fields"
    option4.id = "soccer_fields"
    selectEl.appendChild(option4);

    const buttonEl = document.createElement("button");
    buttonEl.id = "parksButton";
    buttonEl.textContent = "Search";
    sectionEl.appendChild(buttonEl);

    // this will build the resturants section
    formEl.appendChild(buildFormElements("restaurants-input", "restaurantsButton", "restaurants by food types", "Resturants "));

    // this will build the meetup section
    formEl.appendChild(buildFormElements("meetups-input", "meetupsButton", "meetups by topics", "Meetups "));

    // this will build the concerts section
    formEl.appendChild(buildFormElements("concerts-input", "concertsButton", "concerts by genre", "Concerts "));


    return formEl;
}

inputContainer.appendChild(createFormContainer());
// console.log(createFormContainer());

const concertSearchButton = document.querySelector("#concertsButton");
concertSearchButton.addEventListener("click", handleAddConcertResultsToDom);

const meetupsSearchButton = document.querySelector("#meetupsButton");
meetupsSearchButton.addEventListener("click", handleAddMeetupsResultsToDom);



const buildElementWithText = (elementType, elementTextContent, id, classAdd) => {
    let htmlElement = document.createElement(elementType);
    htmlElement.textContent = elementTextContent;
    htmlElement.id = id;
    htmlElement.className = classAdd;
    return htmlElement;
};

const list = document.createElement('ol');
list.id = "results";
let i = 1;


const buildHTMLforConcertResults = (resultObject) => {
    let liElement = buildElementWithText("li", resultObject.name + " : " + resultObject.dates.start.localDate, `resultItem-${i}`, "concerts");
    list.appendChild(liElement)
    const concertSaveButton = document.createElement("button");
    concertSaveButton.classList.add = "concerts";
    concertSaveButton.textContent = "Save";
    liElement.appendChild(concertSaveButton)
    concertSaveButton.addEventListener("click", handleSaveButton);
    // liElement.appendChild(buildElementWithText("button", "Save", `resultItem-${i}`, "concerts"));
    
    i++;

    return list;
}


const appendConcertResultsToDom = (resultArray) => {
    let resultsFragment = document.createDocumentFragment();
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
    resultArray.forEach(item => {
        resultsFragment.appendChild(buildHTMLforConcertResults(item));
    })
    resultsContainer.appendChild(resultsFragment);
}


const buildHTMLforParksResults = (resultObject) => {
    let liElement = buildElementWithText("li", resultObject.park_name + ": " + resultObject.mapped_location_address, `resultItem-${i}`, "parks")
    list.appendChild(liElement)
    const parkSaveButton = document.createElement("button");
    parkSaveButton.classList.add = "parks";
    parkSaveButton.textContent = "Save";
    liElement.appendChild(parkSaveButton)
    parkSaveButton.addEventListener("click", handleSaveButton);
    i++;

    return list;
}

const appendParksResultsToDom = (resultArray) => {
    let resultsFragment = document.createDocumentFragment();
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    resultArray.forEach(item => {
        resultsFragment.appendChild(buildHTMLforParksResults(item));
    })

    resultsContainer.appendChild(resultsFragment);
    console.log(resultsContainer)
}

const parksSearchButton = document.querySelector("#parksButton");
parksSearchButton.addEventListener("click", handleAddParksResultsToDom);



// Function buildItineraryList serves the purpose of creating the HTML elements that will ultimately be a list of the items the user has selected to be on their itinerary.

const itineraryDiv = document.createElement("div")
const buildItinerary = (parkSaved, restaurantSaved, meetupSaved, concertSaved) => {
    //Create 4 <p> elements that are meant to display the saved items gathered from the results section. The parameters are meant to specify which items will go into which element. Each of these elements are appended to the document fragment itineraryFragment. Then the fragment is appended to itinerary container.
        const itineraryFragment = document.createDocumentFragment();
    const parkToAdd = document.createElement("p");
    parkToAdd.textContent = `Park: ${parkSaved}`;
    itineraryFragment.appendChild(parkToAdd);

    const restaurantToAdd = document.createElement("p");
    restaurantToAdd.textContent = `Restaurant: ${restaurantSaved}`;
    itineraryFragment.appendChild(restaurantToAdd);

    const meetupToAdd = document.createElement("p");
    meetupToAdd.textContent = `Meetup: ${meetupSaved}`;
    itineraryFragment.appendChild(meetupToAdd);

    const concertToAdd = document.createElement("p");
    concertToAdd.textContent = `Concert: ${concertSaved}`;
    itineraryFragment.appendChild(concertToAdd);

    itineraryDiv.appendChild(itineraryFragment)
    itineraryContainer.appendChild(itineraryDiv);

}

const restaurantSearchButton = document.querySelector("#restaurantsButton");
restaurantSearchButton.addEventListener("click", handleAddRestaurantResultsToDom);


const buildHTMLforRestaurantResults = (resultObject) => {
    let liElement = buildElementWithText("li", resultObject.restaurant.name + " || " + resultObject.restaurant.location.address, `resultItem-${i}`, "restaurants")
    list.appendChild(liElement)
    const restaurantSaveButton = document.createElement("button");
    restaurantSaveButton.classList.add = "parks";
    restaurantSaveButton.textContent = "Save";
    liElement.appendChild(restaurantSaveButton)
    restaurantSaveButton.addEventListener("click", handleSaveButton)
    i++;

    // buildButtonsResults(liElement)
    return list;

    // list.appendChild(buildElementWithText("li", resultObject.restaurant.name + " || " + resultObject.restaurant.location.address, `resultItem-${i}`, "restaurants"))
    // i++;
    // return list;
}

// Function to append restaurant results to DOM which is attached to event handler
const appendRestaurantResultsToDom = resultArray => {
    let resultsFragment = document.createDocumentFragment();
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    resultArray.forEach(item => {
        resultsFragment.appendChild(buildHTMLforRestaurantResults(item));
    })
    resultsContainer.appendChild(resultsFragment);
}