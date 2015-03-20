// // this apparently doesn't work ;-[]
// Meteor.defer(function() {
// 	console.log("navbar don't exist")
// 	var navbar = $('.navbar');
// 	var origOffsetY = navbar.offset().top;
// })

// $(window).scroll(function() {
// 	function scroll() {
// 		console.log("See if sticky")
// 	    if ($(window).scrollTop() >= origOffsetY) {
// 	    	console.log("Sticky")
// 	        $('.navbar').addClass('affix');
// 	        $('.content').addClass('navbar-padding');
// 	    } else {
// 	    	console.log("UnSticky:  WindowTop "+ $(window).scrollTop() + " >= offesetY" +origOffsetY +" ")
// 	        $('.navbar').removeClass('affix');
// 	        $('.content').removeClass('navbar-padding');
// 	    }
// 	}
// 	document.onscroll = scroll;
// })