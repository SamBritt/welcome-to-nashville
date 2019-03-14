const getCalls = {
    getMeetups: function (search) {
        return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${search}&location.address=nashville&token=AXUBYF6XR5MUANLU4KAI`, {
            "headers": {
                "Accept": "application/json"
            }
        }).then(response => response.json())
    },

    getParks: function (feature) {
        return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${feature}=Yes&$limit=4`)
            .then(response => response.json())
    },

    getRestaurants: function (food) {
        return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${food}&count=4`, {
                headers: {
                    "Accept": "application/json",
                    "user-key": "40ff6ce3387cdd36624832d171f31967"
                }
            })
            .then(r => r.json())
            .then(results => results.restaurants)
    },

    getConcerts: function (genre) {
        return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&size=4&city=Nashville&countryCode=US&classificationName=${genre}`)
            .then(response => response.json())
            .then(parsedResponse => parsedResponse._embedded.events)
    }

}

// fetch itinerary from database.json
const getItinerary = () => {
    return fetch("http://localhost:8088/itinerary")
        .then(r => r.json())
        .then(parsedResults => {
            parsedResults.forEach(item => {
                buildItinerary(item.park, item.restaurant, item.meetup, item.concert)
            });

        });
}

// put new itinerary information into database.json and return 
const putItinerary = (newObject) => {
    return fetch("http://localhost:8088/itinerary/1", {
      method: "PUT",
      body: JSON.stringify(newObject),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(getItinerary())
  } 