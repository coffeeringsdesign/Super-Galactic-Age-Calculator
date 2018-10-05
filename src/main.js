import './sass/styles.scss';
import $ from 'jquery';
import Visitor from './userObject.js';


$(document).ready(function(){

  $("#userDateForm").submit(function() {
    event.preventDefault();
    let ageInput = $("input[type='number']").val();
    let lifeExpectancyInput = $("input[type='text']").val();
    let visitor1 = new Visitor(ageInput, lifeExpectancyInput);


    $("#answer").text(visitor1);



  })
});
