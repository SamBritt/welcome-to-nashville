const getCalls = {
    getMeetups: function () {
        fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville&location.address=nashville&token=AXUBYF6XR5MUANLU4KAI`, {
            "headers": {
                "Accept": "application/json"
            }
        }).then(response => response.json()).then(parsedResponse => console.log(parsedResponse))
}
}

getCalls.getMeetups();
