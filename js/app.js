$(document).ready(function() {
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		console.log('mousedown');
		// play hadouken sound
		// show hadouken and animate it the right of screen
	})
	.mouseup(function(){
		console.log('mouseup');
		// ryu goes back to his ready position
	})
});