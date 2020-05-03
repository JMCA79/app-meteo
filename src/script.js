$(document).ready(function(){
  getLocation();
  $('a.degree').on('click',function(){
    $('.tempToggle').toggleClass('hide');
    X = ($('.degree').html() == ' C' ?  ' F' : ' C');
    $('.degree').html(X);
  })
  $('a#mel').on('click',function(){getWeather(144.96, -37.81);})
  $('a#syd').on('click',function(){getWeather(151.21, -33.87);})
  $('a#adl').on('click',function(){getWeather(138.60, -34.92);})
  $('a#myLoc').on('click',function(){getLocation();;})
});
function getLocation(){
  if(navigator.geolocation) {navigator.geolocation.getCurrentPosition(showWeather);}
}
function showWeather(location){
  lon = location.coords.longitude;
  lat = location.coords.latitude;
  getWeather(lon,lat);
}
function getWeather(lon,lat){
  X = "https://fcc-weather-api.glitch.me/api/current?lat=" +lat+ "&lon="+ lon;
  $.getJSON(X,function(json){
        console.log(json);
      //==========Weather=========================================
       weather = json['weather']['0']['main'].toLowerCase();
 
    
        if ($('.weather').hasClass(weather)) {
          weather = '.' + weather;
          $('.weather').addClass('hide');
          $(weather).removeClass('hide');
        }
      myWeather= json['weather']['0']['main'];
      $('#weathers').html(myWeather);
     //=========City and Country =================================
      country = json['sys']['country'];
      city = json['name']; 
      $('#city').html(city);
      $('#country').html(country);
    //==========Temps, current, Min, Max (F/C)====================
    curTempC= json['main']['temp'];
    minTempC= json['main']['temp_min'];
    maxTempC= json['main']['temp_max'];
    $('#curTempC').html(curTempC);
    $('#minTempC').html(minTempC);
    $('#maxTempC').html(maxTempC);  
    $('.degree').html(' C');
    $('#curTempF').html(Math.round(curTempC*1.8+32));
    $('#minTempF').html(Math.round(minTempC*1.8+32));
    $('#maxTempF').html(Math.round(maxTempC*1.8+32)); 
    //==============humditiy, windspeed, SunRise, Sunset ======================
    
    humidity = json['main']['humidity'];
    windSpeed = json['wind']['speed'];
    $('#humidity').html(humidity);
    $('#windSpeed').html(windSpeed);
    sunrise = myTimes(json['sys']['sunrise']);
    sunset = myTimes(json['sys']['sunset']);
    $('#sunset').html(sunset['myTime']);
    $('#sunrise').html(sunrise['myTime']);
    $('#date').html(sunset['myDate']);    
  })
}
//====================Time Convertor ==============================
function myTimes(intTime){
    myDates = new Date(1000*intTime);
    myDate2 = myDates.toString().split(' ');
    myDate= myDate2[0] + ', ' +
             myDate2[1] + ' '+
             myDate2[2] + ' ' +
             myDate2[3];
    myTime= myDate2[4].split(':').slice(0,2).join(':');
    return { myDate , myTime}
}