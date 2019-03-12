const getCalls = {
    getConcerts: function() {
        return fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0")
        .then(response => response.json())
        .then(parsedResponse => console.log(parsedResponse))
    }
};