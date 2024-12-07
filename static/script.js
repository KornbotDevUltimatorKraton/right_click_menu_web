/**
 * Dynamical context menu script by Hakan Havutcuoglu 
 * http://www.havutcuoglu.com/ or http://www.havutcuoglu.de/
 * https://codepen.io/havutcuoglu/pen/dyGpWLa
 * This notice MUST stay intact in JS files and SCRIPT tags for free and legal usege.
 */
$('[data-context]').on('contextmenu', function(e) {
  e.preventDefault();
  
  // get the options of context menu
  var selector = $(this).attr('data-context').split(' ');
  
  // hide all options first
  $('#contextmenu > ul > li').hide();
  
  // now show selected options of context menu
  $.each(selector, function(i){
    $('#contextmenu > ul > li.'+selector[i]).show();
  });
  
  // show context menu
  $('#contextmenu').addClass('show').css({
    top: e.pageY,
    left: e.pageX
  });
});

$(document).click(function() {
  // hide context menu
  if ($('#contextmenu').is(':hover') == false) {
    $('#contextmenu').removeClass('show');
  };
});