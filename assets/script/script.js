$(document).ready(function () {
  var weatherHistory = [];

  // Fetch Weather Data/Event Listner
  $("#searchBtn").on("click", function (event) {
    event.preventDefault();
    $(".forecastContainer").html('')
                                            
    // constants for city input, api key and both urls (one for current and other for weekly forecast)
    const city = $("#cityInput").val();
    const apiKey = "94591d084c8757a9ff2a1fbb69e284b4";
    const URL1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`;

    // variable created to show passed locations searched in local storage
    weatherHistory.push(city);
    localStorage.setItem("weatherHistory", JSON.stringify(weatherHistory));

    // variable created to display search history in box under search bar
    var list = document.getElementById("weatherHistory");
    list.innerHTML = "";
    for (var i = 0; i < weatherHistory.length; i++) {
      var p = document.createElement("p");
      p.appendChild(document.createTextNode(weatherHistory[i]));
      list.appendChild(p);
    }

    // fetch call
    fetch(URL1 + apiKey)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data.name);
        $("#cityName").text(data.name);
        const lat = data.coord.lat;
        const lon = data.coord.lon;
        const URL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=`;
        fetch(URL2 + apiKey)
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            console.log(data);
            $("#temp").text(data.current.temp);
            $("#hum").text(data.current.humidity);
            $("#wind").text(data.current.wind_speed);
            $("#uvi").text(data.current.uvi);

            // For loop for 5 day forecast
            for (let i = 0; i < 5; i++) {
              console.log(data.daily[i]);
              // Variable created to print 5 day forecast 
              var card = `
                            <div class="card">
                             <div class="card-content">
                              <div class="content">
                            <span>Temperature: ${data.daily[i].temp.day}&#176</span>
                              <br>
                              <span>Humidity: ${data.daily[i].humidity.day}%</span>
                              <br>
                              <span>Wind: ${data.daily[i].wind_speed.day} MPH</span>
                               </div>
                              </div>
                            </div>
                            `;
                $(".forecastContainer").append(card)
            }
          });
      });

    /* then functon*/
    weatherHistory = JSON.parse(localStorage.getItem("weatherHistory"));
  });
});
