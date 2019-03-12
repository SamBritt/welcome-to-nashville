const getCalls = {
    getParks: function(){
        fetch("https://data.nashville.gov/resource/xbru-cfzi.json")
        .then(response => response.json())
        .then(parsedResponse => console.log(parsedResponse))
    }
};