// Default location (area code or city, state – in quotes)
var lc = "Green Bay, WI";


// Really Simple Weather Plug-In Details

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: lc, //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    // sample data to display city and temperature
    // html =  '<p>'+weather.city+', '+weather.region+'</p>';
    // html += '<p>'+weather.temp+'°'+weather.units.temp+'</p>';

    html =  '<main>';
    html +=  '<div class="main-content">';

    html +=  '<section class="header">';
    html +=  '<img src="img/final-atmos-logo.svg" class="logo" alt="Atmos Logo">';
    html +=  '</section>';

    html +=  '<section class="top">';
    html +=  '<p class="amp">&amp;</p>';
    html +=  '<h1>Point Place, Wisconsin</h1>';

    html +=  '<div class="left">';
    html +=  '<h2 class="wdata-02">'+weather.temp+'°</h2>';
    html +=  '</div>';
    html +=  '<div class="right">';
    html +=  '<h2 class="wdata-03">';
    html +=  '<i class="icon icon-'+ weather.code+'"></i>'
    html +=  '</h2>';
    html +=  '</div>';
    html +=  '<p class="wdata-04">'+weather.currently+'</p>';
    html +=  '</section>';

    html +=  '<section class="middle">';
    html +=  '<div class="hi">';
    html +=  '<p class="wdata-05">'+weather.high+'° <sup>'+weather.units.temp+'</sup></p>';
    html +=  '</div>';
    html +=  '<div class="low">';
    html +=  '<p class="wdata-06">'+weather.low+'° <sup>'+weather.units.temp+'</sup></p>';
    html +=  '</div>';
    html +=  '</section>';

    html +=  '<section class="bottom">';
    html +=  '<div class="left">';
    html +=  '<p class="humidity">Humidity</p>';
    html +=  '</div>';
    html +=  '<div class="right">';
    html +=  '<p class="wdata-07">'+weather.humidity +' %</p>';
    html +=  '</div>';
    html +=  '<div class="left">';
    html +=  '<p class="winds">Winds</p>';
    html +=  '</div>';
    html +=  '<div class="right">';
    html +=  '<p class="wdata-08">'+weather.wind.speed+' '+weather.units.speed+' | '+weather.wind.direction+'</p>';
    html +=  '</div>';
    html +=  '<div class="left">';
    html +=  '<p class="sunset">Sunset</p>';
    html +=  '</div>';
    html +=  '<div class="right">';
    html +=  '<p class="wdata-09">'+weather.sunset+'</p>';
    html +=  '</div>';
    html +=  '</section>';
    html +=  '</div>';

    html +=  '<div class="secondary-content">';
    html +=  '<div class="left">';
    html +=  '<p class="wdata-10">'+weather.forecast[1].day +'</p>';
    html +=  '</div>';
    html +=  '<div class="right">';
    html +=  '<p class="wdata-11">'+weather.forecast[1].high +'° <sup>'+weather.units.temp+'</sup></p>';
    html +=  '</div>';
    html +=  '<div class="left">';
    html +=  '<p class="wdata-12">'+weather.forecast[2].day +'</p>';
    html +=  '</div>';
    html +=  '<div class="right">';
    html +=  '<p class="wdata-13">'+weather.forecast[2].high +'° <sup>'+weather.units.temp+'</sup></p>';
    html +=  '</div>';
    html +=  '<div class="left">';
    html +=  '<p class="wdata-14">'+weather.forecast[3].day +'</p>';
    html +=  '</div>';
    html +=  '<div class="right">';
    html +=  '<p class="wdata-15">'+weather.forecast[3].high +'° <sup>'+weather.units.temp+'</sup></p>';
    html +=  '</div>';
    html +=  '<div class="left">';
    html +=  '<p class="wdata-16">'+weather.forecast[4].day +'</p>';
    html +=  '</div>';
    html +=  '<div class="right">';
    html +=  '<p class="wdata-17">'+weather.forecast[4].high +'° <sup>'+weather.units.temp+'</sup></p>';
    html +=  '</div>';
    html +=  '<div class="left">';
    html +=  '<p class="wdata-18">'+weather.forecast[5].day +'</p>';
    html +=  '</div>';
    html +=  '<div class="right">';
    html +=  '<p class="wdata-19">'+weather.forecast[5].high +'° <sup>'+weather.units.temp+'</sup></p>';
    html +=  '</div>';
    html +=  '<div class="left">';
    html +=  '<p class="wdata-20">'+weather.forecast[6].day +'</p>';
    html +=  '</div>';
    html +=  '<div class="right">';
    html +=  '<p class="wdata-21">'+weather.forecast[6].high +'° <sup>'+weather.units.temp+'</sup></p>';
    html +=  '</div>';


    html +=  '</div>';
    html +=  '</main>';
    
	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});

