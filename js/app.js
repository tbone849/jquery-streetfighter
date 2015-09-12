$(document).ready(function() {
	var hovering = "no";
	var mousedown = "no";
	var xdown = "no";
	// ryu ready (hover)
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		hovering = "yes";
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		hovering = "no";
	})

	// ryu throwing (click)
	.mousedown(function(){
		playHadouken();
		mousedown = "yes";
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.ryu-cool').hide();
		$('.hadouken').finish().show().animate(
			{'left': '1040px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '540px');
			});
	})
	.mouseup(function(){
		mousedown = "no";
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
	$('#ryu-music')[0].volume = 0.5;
	$('#ryu-music')[0].load();
	$('#ryu-music')[0].play();

	// ryu cool (x key)
	$(document).keydown(function(e){
		if (e.keyCode==88){
			$('.ryu-ready').hide(); 
			$('.ryu-still').hide();
			xdown = "yes";
			if(mousedown == "yes"){
				$('.ryu-cool').hide();
			}else {
				$('.ryu-cool').show(); // x down, show cool
			}
			
		}
	}).keyup(function(e){
		if (e.keyCode==88){
			xdown = "no";
			$('.ryu-cool').hide(); // x up, hide cool
			if(hovering == "yes"){
				$('.ryu-ready').show(); // x up on hover, show ready
			}
			if (hovering == "no"){
				$('.ryu-still').show(); // x up off ryu, show still
			}	
		}
	});

});




function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

