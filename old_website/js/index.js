$(function(){
  $('#header h2').click(function() {
    $('#nav').toggleClass('open');
  });
});

$(function(){
  $('#nav ul li a').click(function() {
    $('#nav').toggleClass('open');
  });
});

$(function(){
  $('#nav::before').click(function() {
    $('#nav').toggleClass('open');
  });
});
