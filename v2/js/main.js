/**
 *
 * Main Function
 */
$(document).ready(function(){
  onHashChange();
  window.onhashchange = function(e){
    onHashChange(e); 
  }
  if(window.location.hash == ''){
    var href = $('#portfolio_link a').attr('href');
    window.location.href = href;
  }
});

/**
 * Event handler for hash change in url
 */
var onHashChange = function(e){
  $('.nav-pills li').removeClass('active');
  var hash = window.location.hash;
  $(hash + '_link').addClass('active');
  fadeContent(hash+'_content'); 
}

/**
 * Fades content in and Out
 */
var fadeContent  = function(divId){
  var fadeTime = 200;
  $('.content').fadeOut(fadeTime, function(){
    $('.content').addClass('hidden');
    $(divId)
      .removeClass('hidden');
    $(divId).fadeIn(fadeTime);

  });
}
