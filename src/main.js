import { Age } from './../src/space-age-calculator';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#space-age-calculator').submit(function(event) {
    event.preventDefault();
    let userAge = $('#user-age').val();
    let output = new Age(userAge);
    $('#solution').append('<p>' + output);
  });
});
