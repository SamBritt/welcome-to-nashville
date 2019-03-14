const handleAddResultsToDom = () => {
    getCalls.getConcerts(document.querySelector("#concerts-input").value).then(parsedResponse => appendResultsToDom(parsedResponse))
    //document.querySelector("#form").reset();
}