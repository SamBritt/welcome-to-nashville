const getCalls = {
    getRestaurants: function () {
        fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating", {
                headers: {
                    "Accept": "application/json",
                    "user-key": "40ff6ce3387cdd36624832d171f31967"
                }
            })
            .then(r => r.json())
            .then(results => {
                console.table(results)
            })
    },
    getConcerts: function () {
        return fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0")
            .then(response => response.json())
            .then(parsedResponse => console.log(parsedResponse))
    }
};