import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import $ from 'jquery';
import Visitor from './userObject.js';

$(document).ready(function(){

  $("#userDateForm").submit(function() {
    event.preventDefault();
    const ageInput = $("input[type='number']").val();
    const lifeExpectancyInput = $("input[type='text']").val();
    let visitor1 = new Visitor(ageInput, lifeExpectancyInput);
    $(".agesonPlanets").show();

    $("#answer1").text(visitor1.earthAge);
    $("#answer2").text(visitor1.mercuryAge);
    $("#answer3").text(visitor1.venusAge);
    $("#answer4").text(visitor1.marsAge);
    $("#answer5").text(visitor1.jupiterAge);

    if (visitor1.earthAge <= lifeExpectancyInput) {
      $(".yearsLeftonPlanets").show();
    } else if (visitor1.earthAge > lifeExpectancyInput) {
      $(".yearsPastExpectation").show();
    }

    $("#answer6").text(visitor1.earthLifeRemaining);
    $("#answer7").text(visitor1.mercuryLifeRemaining);
    $("#answer8").text(visitor1.venusLifeRemaining);
    $("#answer9").text(visitor1.marsLifeRemaining);
    $("#answer10").text(visitor1.jupiterLifeRemaining);
    $("#answer11").text(Math.abs(visitor1.earthLifeRemaining));
    $("#answer12").text(Math.abs(visitor1.mercuryLifeRemaining));
    $("#answer13").text(Math.abs(visitor1.venusLifeRemaining));
    $("#answer14").text(Math.abs(visitor1.marsLifeRemaining));
    $("#answer15").text(Math.abs(visitor1.jupiterLifeRemaining));
  })
});
