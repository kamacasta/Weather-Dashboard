$(document).ready(function () {


    // const weatherDetails = ['.cityTemp','.cityWind','.cityHumidity','.cityName'];
    // console.log(weatherDetails)

    // // Local storage clears after page is reloaded
    // localStorage.clear();

    // Fetch Weather Data/Event Listner
    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
        const city = $("#cityInput").val()
        const apiKey = "94591d084c8757a9ff2a1fbb69e284b4";
        const URL1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`

        fetch(URL1 + apiKey)
            .then(function (res) {
                return res.json();
            }).then(function (data) {
                console.log(data.name);
                const lat = data.coord.lat;
                const lon = data.coord.lon;
                const URL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=`
                fetch(URL2 + apiKey)
                    .then(function (res) {
                        return res.json();
                    }).then(function (data) {
                        console.log(data);
                        

                    })
            })


        /* then functon*/


    })

});


