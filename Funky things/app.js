document.getElementById("btnGetWeather").onclick = getLocation;

var apiKey = "44f9d88fea8660a941111664880dd281";
var apiCall = "http://api.openweathermap.org/data/2.5/weather?q=belfast,uk&appid=" + apiKey;


function getLocation() {

    var location = document.getElementById("location").value;
    getWeather(location);
}

function getWeather(location) {
    //create a new ajax object
    var ajax = new XMLHttpRequest();
    
    //open AJAX conection
    ajax.open("GET", apiCall, true);
    
    //send request
    ajax.send();
    
    //wait for response
    ajax.onreadystatechange = function() {
        
        if(ajax.readyState == 4 && ajax.status ==200){
            
            var json = JSON.parse(ajax.responseText);
            document.write(json.weather[0].main);
        }
    }    
}