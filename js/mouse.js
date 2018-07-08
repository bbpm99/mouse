$(document).ready(function() {
	$(".mouse").hide();
	$(".start").on("click", start);
	$( ".mouse" ).on( "click", notify );
});

function newPosition() {
	var h = $(window).height() - 20;
	var w = $(window).width() - 20;

	var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function moveMouse() {
	var newq = newPosition();	
    $(".mouse").animate({ top: newq[0], left: newq[1] }, function(){
      moveMouse();        
    });
};

//when click mouse
function notify() {
  alert( "You Win!" );
  //say how long it took
  $(".mouse").stop();
}

//starting
function start() {
	$(".mouse").show();
	$('.start').remove();
  moveMouse();
  //start timer
}

