// import { Constructor } from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let zip = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${process.env.WEB_KEY}`;


    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    let getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${zip} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    };
  });
});
