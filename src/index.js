import './sass/styles.scss';
import $ from 'jquery';
// import { earthAge } from 'earthage.js'


$(document).ready(function(){

  $("#userDateForm").submit(function() {
    event.preventDefault();
    let birthDate = $("input[type='date']").val();
    let lifeExpectancy = $("input[type='text']").val();






  })
});
