/* Equal Height of Element
==================================*/
function heightAdjust() { 
	if($(window).width() < 767) {	
		$('#signupGroup .gray-box').unSyncHeight();
		$('.same-ht').unSyncHeight();
		$('.product-box').unSyncHeight();
	} else {	
		$('#signupGroup .gray-box').syncHeight({updateOnResize: true});
		$('.same-ht').syncHeight({updateOnResize: true});	
		$('.product-box').syncHeight({updateOnResize: true});
	}
}

/* Responsive Menu + Dropdown
==================================*/
$('.header-nav .nav').flexMenu({ responsivePattern: 'toggle'}); 
$('.menu-icon').click(function(){ 
	$('.header-nav .nav').toggleClass('active');  
});

/*fix header on scroll*/
function stickyHeader(){
	//Check to see if the window is top if not then display button
  	$(window).scroll(function(){
	    if ($(this).scrollTop() > 100) {
	      $('header').addClass('sticky');
	    } else {
	      $('header').removeClass('sticky');
	    }
  	});
}

/*ddslick intialization
=============================*/
function customCategorySearch(){
	$('#select-category').ddslick();
	$('#my-selectbox-1').ddslick();
	$('#my-selectbox-2').ddslick();
	$('#my-selectbox-3').ddslick();
	$('#my-selectbox-4').ddslick();
	$('#my-selectbox-5').ddslick();
	$('#my-selectbox-6').ddslick();
	$('#my-selectbox-7').ddslick();
	$('#my-selectbox-8').ddslick();
	$('#select-options-1').ddslick();
	$('#select-options-2').ddslick();
}

/*home page tabbing carousel
===============================*/
function bannerCarousel(){
	var items = $('.banner-carousel img');
	if(items.length > 1) {
		$('.banner-carousel').owlCarousel({
			animateOut: 'fadeOut',
	    	animateIn: 'fadeIn',
	    	lazyLoad:true,
			loop: true, 
			margin:0,  
			items:1, 
			autoplay:true,
			smartSpeed:1000,
			dots: false,
			nav:false,
			mouseDrag:false
		});
	} else {
		$('.banner-carousel').owlCarousel({
			animateOut: 'fadeOut',
	    	animateIn: 'fadeIn',
	    	lazyLoad:true,
			loop: false, 
			margin:0,  
			items:1, 
			autoplay:true,
			smartSpeed:1000,
			dots: false,
			nav:false,
			mouseDrag:false
		});
	}
}

/*featured carousel
===============================*/
function featuredCarousel(){
	$('.featured-carousel').owlCarousel({
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		loop: true, 
		margin:30,  
		items:3, 
		autoplay:false,
		smartSpeed:1000,
		dots: false,
		nav:true,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            margin:10
	        },
	        600:{
	            items:2,
	            nav:false,
	            margin:10
	        },
	        1000:{ 
	            items:3
	        }
	    }
	});
}

/*fashion sale banner carousel
===================================*/
function fashionSale() {
	var items = $('.fashion-sale img');
	if(items.length > 1) {
	    $('.fashion-sale').owlCarousel({
		    items:1,
		    lazyLoad:true,
		    loop:true,
		    margin:10,
		    autoplay:true
		});
	} else {
	    $('.fashion-sale').owlCarousel({
		    items:1,
		    lazyLoad:true,
		    loop:false,
		    margin:10,
		    autoplay:true
		});
	}
}


/*adevertisement banner carousel
===================================*/
function advbanner(){
	var items = $('.adv-banner img');
	if(items.length > 1) {
	    $('.adv-banner').owlCarousel({
		    items:1,
		    lazyLoad:true,
		    loop:true,
		    margin:10,
		    autoplay:true
		});
	} else {
	    $('.adv-banner').owlCarousel({
		    items:1,
		    lazyLoad:true,
		    loop:false,
		    margin:10,
		    autoplay:true
		});
	}
}


/*grid-view listing function
================================*/
function viewListing(){
	$(document).on("click", ".view-type li", function(){
		$(this).parent().children("li").removeClass("active");
		$(this).addClass("active");
		if($(this).hasClass("list_view")){
			//alert("list_view");
			$(".search-listing").addClass("list-view").removeClass("grid-view");
		}
		else{
			//alert("grid_view");
			$(".search-listing").addClass("grid-view").removeClass("list-view");
		}
	})
}

function datepickerFunction(){
	try {
		$(".datepicker").datepicker();
	}
	catch (e) {
	   console.log(e + " found on current page");
	}
}

function mixitUp(){
	try {
		$('.grid').masonry();
	}
	catch (e) {
	   console.log(e + " found on current page");
	}
}

function bxsliderPager(){
	try {
		$('.bxslider').bxSlider({
		  pagerCustom: '#bx-pager',
		  controls: false
		});
	}
	catch (e) {
	   //console.log(e + " found on current page");
	}
}
	
function multilevelDropdown(){
	$('ul.dropdown-list').dropdown({
		toggleText: 'All Categories',
		maxHeight: 100,
		// Classes
		classes: {
		  // Icons
		  backIcon: 'fa fa-angle-left',
		  iconNext: 'fa fa-angle-right'
		},
	});

}



$(document).ready(function () {		
	bannerCarousel();
	heightAdjust();
	featuredCarousel();
	fashionSale();
	advbanner();
	stickyHeader();
	customCategorySearch();
	viewListing();
	datepickerFunction();
	bxsliderPager();
	multilevelDropdown();
});


$(window).on('resize', function() {	
  	bannerCarousel();
	heightAdjust();
	featuredCarousel();
	fashionSale();
	advbanner();
	stickyHeader();
	customCategorySearch();
	viewListing();
	datepickerFunction();
});

$(window).on('load', function() {
	mixitUp();
});	

/*call a function on click my tablist
=========================================*/
$(document).on("click", "#myTabs a", function(){
	mixitUp();
});