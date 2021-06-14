$(document).ready(function(){

    const apiKey = "94591d084c8757a9ff2a1fbb69e284b4"
    const weatherDetails = ['.cityTemp','.cityWind','.cityHumidity','.cityName'];
    console.log(weatherDetails)

    // Local storage clears after page is reloaded
    localStorage.clear();

    // Fetch Weather Data/Event Listner
$("#searchBtn").on("submit",function(event){
    event.preventDefault();
    const city = $("#cityInput").val()

 
 fetch("")
    .then
    return response.json();

/* then functon*/
 

})



});
