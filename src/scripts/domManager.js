const buildResultList = () => {
    
    const sectionEl = document.createElement('section');
    const list = document.createElement('ol');
    let resultElement = document.createElement('li');
    let saveButton = document.createElement('button');
    resultElement.appendChild(saveButton);
    list.appendChild(resultElement);
    sectionEl.appendChild(list);

    console.log(sectionEl);

}
// buildResultList(getCalls.getMeetups());