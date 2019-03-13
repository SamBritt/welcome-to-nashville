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


const createFormContainer = () => {
    // this component pretty much builds the form section dynamically

    const buildFormElements = (elemInputID, elemBtnId) => {
        const sectionEl = document.createElement("section");
        formEl.appendChild(sectionEl); // this will append to the form section
    
        const labelEl = document.createElement("label");
        sectionEl.appendChild(labelEl);
    
        const inputEl = document.createElement("input");
        inputEl.id = elemInputID;
        inputEl.type = "text";
        sectionEl.appendChild(inputEl);
    
        const buttonEl = document.createElement("button");
        buttonEl.id = elemBtnId;
        buttonEl.textContent = "Search";
        inputEl.appendChild(buttonEl);

        return sectionEl
    }
    
    // ========================== refactor this later ===========================
    const formEl = document.createElement("form");
    formEl.id = "form";

    // this will build the parks section
    const sectionEl = document.createElement("section");
    formEl.appendChild(sectionEl); // this will append to the form section

    const labelEl = document.createElement("label");
    sectionEl.appendChild(labelEl);

    const selectEl = document.createElement("select");
    sectionEl.appendChild(selectEl);

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
    selectEl.appendChild(buttonEl);

    // this will build the resturants section 
    formEl.appendChild(buildFormElements("resturants-input", "resturantsButton"));

    // this will build the meetup section 
    formEl.appendChild(buildFormElements("meetups-input", "meetupsButton"));

    // this will build the concerts section 
    formEl.appendChild(buildFormElements("concerts-input", "concertsButton"));

    
    return formEl;
}

inputContainer.appendChild(createFormContainer());
console.log(createFormContainer());
