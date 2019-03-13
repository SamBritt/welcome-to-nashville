const mainContainer = document.getElementById("display-container");

// Function to build section element with nested h2
const buildSectionHTML = (sectionID) => {
    let section = document.createElement("section");
    section.id = (sectionID);
    let sectionTitle = document.createElement("H2");
    section.appendChild(sectionTitle);
    return section;
}

// Appending input-container to mainContainer
const inputContainer = mainContainer.appendChild(buildSectionHTML("input-container"))

// Appending results-container to mainContainer
const resultsContainer = mainContainer.appendChild(buildSectionHTML("results-container"))

// Appending itinerary-container to mainContainer
const itineraryContainer = mainContainer.appendChild(buildSectionHTML("itinerary-container"))