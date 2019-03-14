const handleAddConcertResultsToDom = () => {
    getCalls.getConcerts(document.querySelector("#concerts-input").value).then(parsedResponse => appendConcertResultsToDom(parsedResponse))
    //document.querySelector("#form").reset();
}