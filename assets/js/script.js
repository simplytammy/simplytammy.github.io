// window.onload = function() {
// 		var delayLoad;
// 		var loader = document.getElementById('myloader');

// 		function slowLoad() {
// 			delayLoad = setTimeout(removeLoader, 1000);
// 		}
// 		slowLoad();

// 		function removeLoader() {
// 			loader.style.display = 'none';
// 		}

// 	}
	// Animations init
wow = new WOW({
	boxClass: 'wow', // default
	animateClass: 'wow', // default
	offset: 0, // default
	mobile: true, // default
	live: true // default
})
wow.init();
//============> jQuery <==============

$(document).ready(function() {
	// Smooth scrolling
	let scrollLink = $('.scroll');

	scrollLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});

	// Back to top

	let btn = $('#top');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	//Tooltip init
	$('[data-toggle="tooltip"]').tooltip();

});