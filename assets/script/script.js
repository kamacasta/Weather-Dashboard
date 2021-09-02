$(document).ready(function () {

    // Fetch Weather Data/Event Listner
    $("#searchBtn").on("click", function (event) { 
        event.preventDefault(); 

        var weatherHistory = []
        // constants for city input, api key and both urls (one for current and other for weekly forecast)
        const city = $("#cityInput").val()
        const apiKey = "94591d084c8757a9ff2a1fbb69e284b4";
        const URL1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`
        

        // variable created to show passed locations searched in local storage
        // var weatherHistory = JSON.parse(localStorage.getItem('weatherHistory')) ?? [];
        // weatherHistory.push(city.value);
        // localStorage.setItem('weatherHistory', JSON.stringify('weatherHistory'));
        weatherHistory.push(city);
        localStorage.setItem('weatherHistory', JSON.stringify(weatherHistory));
        
        // variable created to display search history in box under search bar
        var list = document.getElementById('weatherHistory');
        list.innerHTML = '';
        for (var i = 0; i < weatherHistory.length; i++) {
            var p = document.createElement('p');
            p.appendChild(document.createTextNode(weatherHistory[i]));
            list.appendChild(p);
        }

    
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
            
            weatherHistory = JSON.parse(localStorage.getItem('weatherHistory'));


        /* then functon*/


    })

});


