import './sass/styles.scss';
import $ from 'jquery';
import Visitor from './userObject.js';


$(document).ready(function(){

  $("#userDateForm").submit(function() {
    event.preventDefault();
    const ageInput = $("input[type='number']").val();
    const lifeExpectancyInput = $("input[type='text']").val();
    let visitor1 = new Visitor(ageInput, lifeExpectancyInput);


    $("#answer1").text(visitor1.earthAge);
    $("#answer2").text(visitor1.mercuryAge);
    $("#answer3").text(visitor1.venusAge);
    $("#answer4").text(visitor1.marsAge);
    $("#answer5").text(visitor1.jupiterAge);


  })
});
