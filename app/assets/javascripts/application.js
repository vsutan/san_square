// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var mainbottom = $('#myCarousel').offset().top + $('#myCarousel').height();

// On Scroll
$(window).on('scroll', function () {
	var stop = $(window).scrollTop();
	var elementOne = document.getElementById('navbar-regular');
	var elementTwo = document.getElementById('navbar-scroll');

    elementOne.display="none";
    elementTwo.display="block";
/*	if (stop > mainbottom) {
		elementOne.display="none";
		elementTwo.display="block";
	} else {
		elementOne.display="block";
		elementTwo.display="none";
	}*/
});