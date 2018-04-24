// import { Constructor } from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let zip = $('#location').val();
    $('#location').val("");
    $.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${process.env.WEB_KEY}`).then(function(response){
      $('.showHumidity').text(`the humidity in ${zip} is ${response.main.humidity}%`);
      $('.showTemp').text(`the temperature in Kelvins is ${response.main.temp} degrees`);
    }).fail(function(error) {
      $('.showErrors').text(`there was an error processing your request ${error.responseText}. please try again.`);
    });
  });
});
