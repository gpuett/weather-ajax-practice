// import { Constructor } from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let zip = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${process.env.WEB_KEY}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${zip} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
