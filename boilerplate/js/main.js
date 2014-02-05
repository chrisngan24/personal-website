/**
 * Main Function
 */
$(document).ready(function(){
 window.onhashchange = function(e){
   $('.nav-pills li').removeClass('active');
   var hash = window.location.hash;
   $(hash + '_link').addClass('active');
  }
});

