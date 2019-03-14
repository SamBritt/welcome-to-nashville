const getCalls = {
    getMeetups: function () {
        return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville&location.address=nashville&token=AXUBYF6XR5MUANLU4KAI`, {
            "headers": {
                "Accept": "application/json"
            }
        }).then(response => response.json())
    },

    getParks: function (feature) {
        fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${feature}=Yes&$limit=4`)
            .then(response => response.json())
            .then(parsedResponse => {
                console.log(parsedResponse.park_name)
                parsedResponse.forEach(park => {
                    console.log(park.park_name, park.mapped_location_address)
                });
            })
    },

    getRestaurants: function (food) {
        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${food}&count=4`, {
                headers: {
                    "Accept": "application/json",
                    "user-key": "40ff6ce3387cdd36624832d171f31967"
                }
            })
            .then(r => r.json())
            .then(results => console.log(results.restaurants))
    },
    
    getConcerts: function (genre) {
        const concertArray = [];
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&size=4&city=Nashville&countryCode=US&classificationName=${genre}`)
            .then(response => response.json())
            .then(parsedResponse => parsedResponse._embedded.events.forEach(concert => {
    
                const concertObject = {
                    name: concert.name,
                    date: concert.dates.start.localDate
                };
                concertArray.push(concertObject);
    
            }))
            return concertArray;
    }
    
}

/*getConcerts: function (genre) {
    const concertArray = [];
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&size=4&city=Nashville&countryCode=US&classificationName=${genre}`)
        .then(response => response.json())
        .then(parsedResponse => parsedResponse._embedded.events.forEach(concert => {

            const concertObject = {
                concertName: concert.name,
                concertDate: concert.dates.start.localDate
            };
            concertArray.push(concertObject);

        }))
        return concertArray;
}

getConcerts: function (genre) {
        return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&size=4&city=Nashville&countryCode=US&classificationName=${genre}`)
            .then(response => response.json())
            .then(parsedResponse => (parsedResponse._embedded.events))
    }

}*/