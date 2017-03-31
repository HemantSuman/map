//mcustome scroll bar
function mcustome() {
	$(".mcustom").mCustomScrollbar({theme:"dark-3",
			//setHeight:675,
			axis:"y",
			contentTouchScroll: true,});
	$(".chatbox").mCustomScrollbar({
		theme:"dark-3",
		setHeight:300,
		axis:"y",
		contentTouchScroll: true,
		 setTop:"-999999px"

	});

}

/* Equal Height of Element
==================================*/
function heightAdjust() {
	if($(window).width() < 480) {
		$('#signupGroup .gray-box').unSyncHeight();
		$('.same-ht').unSyncHeight();
		$('.product-box').unSyncHeight();
		$('.grid-view .list-row').unSyncHeight();

	} else {
		$('#signupGroup .gray-box').syncHeight({updateOnResize: true});
		$('.same-ht').syncHeight({updateOnResize: true});
		$('.product-box').syncHeight({updateOnResize: true});
		$('.grid-view .list-row').syncHeight({updateOnResize: true});
	}
}

/* Responsive Menu + Dropdown
==================================*/
$('.header-nav .nav').flexMenu({ responsivePattern: 'none'});
$('.menu-icon').click(function(){
	$('#header-main').toggleClass('active');
});

function socialShareToggle(){
	$(".social-share").click(function(){ $(".pt-share-icons").toggle(100); });
}

/*fix header on scroll*/
function stickyHeader(){
	//Check to see if the window is top if not then display button
	if($(window).width()>767){
  		$(window).scroll(function(){
		    if ($(this).scrollTop() > 100) {
		      $('header').addClass('sticky');
		    } else {
		      $('header').removeClass('sticky');
		    }

  		});
  	}
}

/*Custom category selectbox
=====================================*/
function customSelectBox(){
	var selectWrap = $(".custom-selectbox");
	var selectVal = $(".custom-selectbox .selected");
	var selectOptions = $(".custom-selectbox .select-options");
	var selectOptionsli = $(".custom-selectbox .select-options li");
	var selectOptionsVal = $(".custom-selectbox .select-options a");
	selectVal.click(function(){
		selectOptions.show();
		selectWrap.addClass("open");

	});
	$(document).click(function(e) {
		if( e.target.id != 'selectval') {
			if( e.target.id != 'dropdown-icon') {
				selectOptions.hide();
				selectWrap.removeClass("open");

			}
		}
	});
	selectOptionsVal.click(function(e){
		selectVal.html($(this).html());
		selectOptionsli.removeClass("active");
		$(this).parent().addClass("active");
		//$('ul.dropdown').slideUp();
		selectOptions.hide();
	});

	/*if  li has nth level elements*/
	if(selectOptionsli.children('ul').length > 0){
		//selectOptionsli.children('ul').before('<span id="dropdown-icon" class="dropdown-icon"></span>');
		selectOptionsli.children('ul').addClass("dropdown");
		selectOptionsli.children('ul').parent().addClass("has-dropdown");
	}
	/*$(document).on('click', '.dropdown-icon', function(){
		$(this).next('ul').toggle(100);
	});*/
}

//multilevelDropdown


/*custom toggle filter for refine search*/
function toggleFilter(){
	var toggleFilter = $(".toggle-filter");
	var toggleElement = $(".toggle-element");
	var toggleFilterLabel = $(".toggle-filter label");
	if(toggleFilter.children('ul').length > 0){
		toggleElement.before('<span class="dropdown-arrow"></span>');
	}
	toggleFilterLabel.click(function(){
		$(this).siblings(".toggle-element").toggle(200);
		$(this).parent().toggleClass('active');
	})

}

/*Refine search mobile view
================================*/
function refineSearchMobile(){
	/*mobile-view*/
	if($(window).width() < 992){
		var searchTitle = $("aside.search-section .title");
		var searchForm = $("aside.search-section .search-form");

		searchTitle.click(function(){
			searchForm.css({"display": "block"});
		});
	}
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
	//$('#select-options-1').ddslick();
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
			dots: true,
			nav:false,
			mouseDrag:false,
			responsiveClass:true,
		    responsive:{
		        0:{
		            dots:false,
		        },
		        767:{
		            dots:false,
		        }
		    }
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
		items:4,
		autoplay:false,
		smartSpeed:1000,
		dots: false,
		nav:true,
		navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            margin:10,
	            nav:false,
	        },
	        600:{
	            items:3,
	            nav:false,
	            margin:10
	        },
	        1000:{
	            items:4
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

/*car-details page main slider banner
==========================================*/
$('#image-gallery').lightSlider({
    gallery:true,
    item:1,
    thumbItem:12,
    slideMargin: 0,
    speed:500,
    auto:false,
    loop:true,
		prevHtml:'<i class="fa fa-long-arrow-left"></i>',
		nextHtml:'<i class="fa fa-long-arrow-right"></i>',
    onSliderLoad: function() {
        $('#image-gallery').removeClass('cS-hidden');
    }
});

/*accordian toggle function
==========================================*/
function accordianItem(){
	var itemDesc = jQuery("ul.accordian .item-desc");
    $(document).on('click', '.item-title', function(){

        if($(this).next().is(':visible'))
		{
            $(this).next('.item-desc').slideToggle(200);
            $(this).parent().toggleClass('active');
        }
        else
		{
            itemDesc.slideUp(200);
            itemDesc.parent().removeClass('active');
            $(this).next('.item-desc').slideDown(200);
            $(this).parent().addClass('active');
        }
    });
    $(window).on('load', function()
	{
		itemDesc.eq(0).slideDown(200);
		itemDesc.eq(0).parent().addClass('active');
	});
}

function mobileToggleFunction(){
	if($(window).width()<767){
		$(".mobile-toggle h4").click(function(){
			/*if($(this).parent().hasClass("active")){
				$(this).parent().toggleClass("active");
			}
			else{
				$("h4").parent().removeClass("active");
				$(this).parent().addClass("active");
			}*/

			if($(this).parent().find("ul").is(":visible")){
				$(this).parent().find("ul").slideUp(100);
			}
			else{
				$(".mobile-toggle").find("ul").slideUp(100);
				$(this).parent().find("ul").slideDown(100);
			}

		});
	}
}

/*grid-view listing function
================================*/
function viewListing(){
	$(document).on("click", ".view-type li", function(){
		$(this).parent().children("li").removeClass("active");
		$(this).addClass("active");
		$('.search-listing.grid-view>ul>li').unSyncHeight();
		if($(this).hasClass("list_view")){
			//alert("list_view");
			$(".search-listing").addClass("list-view").removeClass("grid-view");
			//$('.search-listing.grid-view>ul>li').unSyncHeight();
		}
		else{
			//alert("grid_view");
			$(".search-listing").addClass("grid-view").removeClass("list-view");
			$('.search-listing.grid-view>ul>li').syncHeight({updateOnResize: true});
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

function timepickerFunction(){
	try {
		$(".timepicker1").timepicker();

	}
	catch (e) {
	   console.log(e + " found on current page");
	}
}
function colorpickerFunction(){
	try {
		$("#cp2").colorpicker();
	}
	catch (e) {
	   console.log(e + " found on current page");
	}
}

/*function mixitUp(){
	 try {
	  var $container = $('.grid');
	        // init Masonry
	        var $grid = $('.grid').masonry({
	            // options...
	        });

	        $container.imagesLoaded(function () {
	            $container.masonry('reloadItems');
	            $container.masonry({
	                isInitLayout: true,
	                //itemSelector: '.mason_jar_item'
	            });
	        });
	 }
	 catch (e) {
	    console.log(e + " found on current page");
	 }
}*/

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

	$('ul.km-list').dropdown({
		toggleText: '0Km',
		maxHeight: 100,
		// Classes
		classes: {
		  // Icons
		  backIcon: 'fa fa-angle-left',
		  iconNext: 'fa fa-angle-right'
		},
	});

}


function customSelect(){
//	$( ".custom-select" ).selectmenu();
}

function searchfieldOffeset(){
	$(".saved-search").click(function(){
		var searchOffeset= $(".searchfield").offset();
		var searchfieldWidth = $(".searchfield").outerWidth();
		if($(".dropdown-menu.saved-search-popup").is(':visible')){
            $(".dropdown-menu.saved-search-popup").css({
				display: "none"
			});
        }
        else{
        	//console.log(searchOffeset);
			$(".dropdown-menu.saved-search-popup").css({
				top: searchOffeset.top + 57,
				left: searchOffeset.left,
				width: searchfieldWidth,
				position: "absolute",
				display: "block"
			});
        }
	});
	$(window).click(function() {
		$(".dropdown-menu.saved-search-popup").css({
			display: "none"
		});
	});
	$(".dropdown-menu.saved-search-popup").click(function(event){
	    event.stopPropagation();
	});
}


$(document).ready(function () {
	mcustome();
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
	customSelect();
	customSelectBox();
	socialShareToggle();
	toggleFilter();
	accordianItem();
	searchfieldOffeset();
	timepickerFunction();
	colorpickerFunction();

});


$(window).on('resize', function() {
  	bannerCarousel();
	heightAdjust();
	featuredCarousel();
	fashionSale();
	advbanner();
	stickyHeader();
	stickyHeader();
	customCategorySearch();
	viewListing();
	datepickerFunction();
	refineSearchMobile();
	mobileToggleFunction();
	searchfieldOffeset();
	timepickerFunction();
	colorpickerFunction();
});

$(window).on('load resize', function() {
	//mixitUp();
	refineSearchMobile();
	mobileToggleFunction();
	mcustome();

});

/*call a function on click my tablist
=========================================*/
$(document).on("click", "#myTabs a", function(){
	//mixitUp();
});

$( "#accordion" ).accordion();
