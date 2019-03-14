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

let buildMeetupsArray = (search) => {
    // let allList = getCalls.getMeetups();
    // let tempArr = [];
    // for (let i = 0; i < 4; i++) {
    //     allList.then(response => {
    //         tempArr.push(response.events[i].name["text"])
    //     });
    // }
    getCalls.getMeetups(search).then(response => {
        let condensedArr = response.events.slice(0, 5);
        let tempArr = condensedArr.map(e => {
            let tempObj = {};
            tempObj.name = e.name.text;
            tempObj.date = e.start.local;
            return tempObj;
        })
        console.log(tempArr);
        buildResultList(tempArr);
    })
    // console.log(tempArr)
}
buildMeetupsArray('comedy');

const buildResultList = (obj) => {


    const sectionEl = document.createElement('section');
    const list = document.createElement('ol');

    let saveButton = document.createElement('button');
    // let resultElement = document.createElement('li');
    // for(let i in array1){
    //     let resultElement = document.createElement('li');
    //     resultElement = i;
    //     list.appendChild(resultElement);
    // }
    
    obj.forEach(e => {
        let resultElement = document.createElement('li');
        for(let x in e){
            
            resultElement.textContent += `${e[x]} `;
            list.appendChild(resultElement);
        }
    })
    

    // list.appendChild(resultElement);
    sectionEl.appendChild(list);
    resultsContainer.appendChild(sectionEl);
    console.log(sectionEl);
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
    const formEl = document.createElement("form");
    formEl.id = "form";

    // this will build the parks section
    const sectionEl = document.createElement("section");
    formEl.appendChild(sectionEl); // this will append to the form section

    const labelEl = document.createElement("label");
    labelEl.textContent = "Parks ";
    sectionEl.appendChild(labelEl);

    const selectEl = document.createElement("select");
    sectionEl.appendChild(selectEl);

    // ========================== refactor this later ===========================
    // ====================== options ===================
    const option1 = document.createElement("option");
    option1.textContent = "Dog Parks";
    option1.value = "dog_park";
    selectEl.appendChild(option1);

    const option2 = document.createElement("option");
    option2.textContent = "Playground";
    option2.value = "playground";
    selectEl.appendChild(option2);

    const option3 = document.createElement("option");
    option3.textContent = "Hiking Trails";
    option3.value = "hiking_trails"
    selectEl.appendChild(option3);

    const option4 = document.createElement("option");
    option4.textContent = "Soccer Fields";
    option4.value = "soccer_fields"
    selectEl.appendChild(option4);

    const buttonEl = document.createElement("button");
    buttonEl.id = "parksButton";
    buttonEl.textContent = "Search";
    sectionEl.appendChild(buttonEl);

    // this will build the resturants section 
    formEl.appendChild(buildFormElements("resturants-input", "resturantsButton", "resturants by food types", "Resturants "));

    // this will build the meetup section 
    formEl.appendChild(buildFormElements("meetups-input", "meetupsButton", "meetups by topics", "Meetups "));

    // this will build the concerts section 
    formEl.appendChild(buildFormElements("concerts-input", "concertsButton", "concerts by genre", "Concerts "));

    return formEl;
}

inputContainer.appendChild(createFormContainer());
console.log(createFormContainer());



// Function buildItineraryList serves the purpose of creating the HTML elements that will ultimately be a list of the items the user has selected to be on their itinerary.

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

    itineraryContainer.appendChild(itineraryFragment);

}


