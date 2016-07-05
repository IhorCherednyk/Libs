$(document).ready(function() {
	// animation waypoint
	$(".s1-animate .item1").animated("zoomIn")
	$(".s1-animate .item2").animated("fadeInDown")
	$(".s1-animate .item3").animated("fadeIn");
	$(".s1-animate .item4").animated("fadeInRight");


	// addclass waypoint
	$(".s2-waypoint").waypoint(function(){
		$(".s2-wrap .item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("off").addClass("on");	
			}, 50*index);
		});

	}, {
		offset: "25%"
	});
	// DRAW
	$(".s3-svg").waypoint(function(){
		$(".svg-wrap").each(function(index) {
			var ths = $(this);
			setTimeout(function() {
				var myAnimation = new DrawFillSVG({
					elementId: "sw" + index
				});			
				ths.removeClass("").addClass("");	
			}, 600*index);
		});

		this.destroy();

	}, {
		offset: "25%"
	});

	$(".s4-wrap .iner").equalHeights();


	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		fluidSpeed : 2000,
		autoplaySpeed : 2000,
		navSpeed : 1000,
		dotsSpeed : 1000,
		dragEndSpeed : 1000
	});

});
