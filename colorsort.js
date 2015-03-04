
function shuffle(m) {
  var rand, $rand;
  rand=Math.floor(Math.random() * m--);
  $('li:eq('+ m +')').
  after($('li:eq('+ rand +')')).
  insertBefore($('li:eq('+ rand +')'));

  if(m) {
    setTimeout(shuffle, 100, m);
  }
}

var $colors = $('li');
var basicSort = $colors.sort (function(a,b) {
  return $(a).find("p").text() > $(b).find("p").text();
});


$('#shuffle').on('click', function() {
  shuffle($('li:eq').length);
});


$('#sort').on('click', function(){
  $('.wrapper ul').html(basicSort);
});
 
