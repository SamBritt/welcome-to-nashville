const getCalls = {
        getMeetups: function () {
            return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville&location.address=nashville&token=AXUBYF6XR5MUANLU4KAI`, {
                "headers": {
                    "Accept": "application/json"
                }
            }).then(response => response.json())
        },

<<<<<<< HEAD
        getParks: function () {
            fetch("https://data.nashville.gov/resource/xbru-cfzi.json")
                .then(response => response.json())
                .then(parsedResponse => console.log(parsedResponse))
        },

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
=======
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
>>>>>>> 30779da5e09ab5cf0ace798ebb2c0a02d290061b

        getConcerts: function (genre) {
            return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&size=4&city=Nashville&countryCode=US&classificationName=${genre}`)
                .then(response => response.json())
                .then(concertsArray => concertsArray._embedded.events)
        }
}