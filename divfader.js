// ------------------------------------------------------------
//
// Fading through all content inside the class 'divfader'
//
// ------------------------------------------------------------

// Playback variables
var autoplay = true;
var showControls = true;
var fadeTimer = 400;
var delay = 2000;

var content = $('.divfader-content').children().hide();
var controls;
var	current = content.length-1;
var timeout;


// ------------------------
// Initialization
// ------------------------
// Onload
$(function() {
	if (showControls) {
		initializeControls();
	}

	if (autoplay) cycle();
	else showSlide(0);
});

// Initialize controls (dots)
function initializeControls() {
	// Add divfader-controller to DOM (if it doesn't exist)
	if (!$('.divfader').children().hasClass('divfader-controller')) {
		$('.divfader').append('<div class="divfader-controller"></div>');
	}

	// Add controls to DOM
	for (n = 0; n < content.length; n++) {
		$('.divfader-controller').append('<div class="divfader-control">•</div>');
	}

	// Save controls
	controls = $('.divfader-controller').children();
}


// ------------------------
// Actions
// ------------------------
// Controller clicked (dot)
$('.divfader-controller').on('click',function(event){
	abortCycle();
    showSlide($(event.target).index());
});

// Next clicked
$('.divfader-next').on('click',function(event){
	abortCycle();
    nextSlide();
});

// Previous clicked
$('.divfader-previous').on('click',function(event){
	abortCycle();
    previousSlide();
});

// Cycle through slides
function cycle() {
	// Fade in next slide, recursively
    nextSlide();
    if (autoplay) {
    	timeout = setTimeout(cycle, delay+fadeTimer);
    }
}


// ------------------------
// Playback functions
// ------------------------
// Show specific slide
function showSlide(slideId) {
	// Stop all other animations
	content.stop();

	// Fade out previous slide
	slide = content.eq(current);
	slide.fadeOut(fadeTimer, function() {
		current = slideId;

		// Fade in next slide
		slide = content.eq(slideId);

		// Toggle control
		if (showControls){
			controls.removeClass("divfader-control-active").addClass("divfader-control");
			controls.eq(slideId).removeClass("divfader-control").addClass("divfader-control-active");
			//controls.css({ opacity: 0.3 });
			//controls.eq(slideId).css({ opacity: 1.0 });
		}

		// Fade in
	    slide.fadeIn(fadeTimer);
	});
}

// Show next slide
function nextSlide() {
	showSlide((current+1) % content.length);
}

// Show previous slide
function previousSlide() {
	showSlide((current-1) % content.length);
}

// Abort autoplay cycle
function abortCycle() {
	autoplay = false;
	clearTimeout(timeout);
}
