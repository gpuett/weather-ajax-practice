import { Entry } from './journal.js';
import './styles.css';

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var inputTitle = $("#title").val();
    var inputBody = $("#body").val();
    var newEntry = new Entry(inputTitle, inputBody);
    var output = newEntry.countWords();
    var numVowels = newEntry.countVowels();
    var numCons = newEntry.countConsonants();
    var sentence = newEntry.getTeaser();
    $("#output").append("<li>" + inputTitle + " -Words: " + output + " -Vowels: " + numVowels + " -Consonants " + numCons + " Teaser: " + sentence + "</li>");

  $("#title").val("");
  $("#body").val("");  
  });
});
