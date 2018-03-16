import { Age } from './space-age-calculator';
import './styles.css';
// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#space-age-calculator').submit(function(event) {
    event.preventDefault();
    let userAge = $('#user-age').val();
    let output = new Age(userAge);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
