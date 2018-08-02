import '../scss/main.scss'

//Image imports//
import img3 from '../img/img3.jpg'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import itJS from '../img/itJS.jpg'
import LIMM from '../img/LIMM.jpg'

//////////////////

$(document).ready(function(){
  $('.fa').click(function() {
    $('.home').toggleClass('menu-active');
  })
});

$(document).ready(function(){
  $('.fa').click(function() {
    $('.resume').toggleClass('menu-active');
  })
});

$(document).ready(function(){
  $('.fa').click(function() {
    $('.contact').toggleClass('menu-active');
  })
});

$(document).ready(function(){
  $('.fa').click(function() {
    $('.work').toggleClass('menu-active');
  })
});

$(document).ready(function() {
    $('.fa').click(function() {
      $('i').toggleClass('fa-bars fa-times');
    });
  });
