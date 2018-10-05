import './sass/styles.scss';
import $ from 'jquery';
import Visitor from './userObject.js';


$(document).ready(function(){

  $("#userDateForm").submit(function() {
    event.preventDefault();
    let birthDate = $("input[type='date']").val();
    let visitor1 = new Visitor(birthDate);
    let currentDate = new Date();
    console.log(currentDate);
    // let lifeExpectancy = $("input[type='text']").val();


    $("#answer").text(visitor1);



  })
});
