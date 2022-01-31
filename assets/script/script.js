
// dropdown show & hide
$(".has-sub .menu").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("active")) {
      element.removeClass("active");
      element.children("ul").slideUp(200);
    }
    else {
      element.siblings("li").removeClass('active');
      element.addClass("active");
      element.siblings("li").find("ul").slideUp(200);
      element.children('ul').slideDown(200);
    }
  });
// dropdown show & hide on collapse
//sidebar Menu
$(".has-sub .dropdown-on-collapse").on("mouseover", function () {
  var element = $(this).parent(".has-sub");
  if (element.hasClass("show")) {
    element.removeClass("show");
    element.children(".dropdown-on-collapse").addClass('show');
  }
  else {
    element.siblings(".has-sub").removeClass('show');
    element.siblings(".has-sub").find(".dropdown-on-collapse").removeClass('show');
    element.children('.dropdown-on-collapse').addClass('show');
  }
});

//sidebar Menu
$(document).on('click', '.global', function () {
    $(".dropdown-on-collapse").removeClass('show');
});



  // navbar expand & minimize
$(document).ready(function(){
    $(".collapse-icon").click(function(){
        $(".navbar").toggleClass("collapse");
    });
});


// collapse on mobile size
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww > 600) {
      $('.navbar').removeClass('collapse');
    } else if (ww <= 769) {
      $('.navbar').addClass('collapse');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});



let logo = `assets/images/logo.svg`;

if(localStorage.getItem('darkversion')){
  $('body').addClass('dark-version');
  logo = `assets/images/logo_dark.svg`;
}else{
  $('body').removeClass('dark-version');
  logo = `assets/images/logo.svg`;
}

  $('.dark-mode').on('click', function () {
    $('body').addClass('dark-version');
    $('.dark-mode').addClass('active');
    $('.light-mode').removeClass('active');
    localStorage.setItem('darkversion', true);
    logo = `assets/images/logo_dark.svg`;
    setLogo();
  });
  
  $('.light-mode').on('click', function () {
    $('body').removeClass('dark-version');
    $('.light-mode').addClass('active');
    $('.dark-mode').removeClass('active');
    localStorage.removeItem('darkversion');
    logo = `assets/images/logo.svg`;
    setLogo();
  })
  

  if($('body').hasClass('dark-version')){
    $('.light-mode').addClass('active');
    $('.light-mode').removeClass('active');
  }
  else{
    $('.dark-mode').removeClass('active');
    $('.dark-mode').addClass('active');
  }
  
  
  function setLogo(){
    $('.logo img').attr('src', logo);
  }
  
  
  setLogo();


  $(document).on('click', '.global', function () {
    if ($(".has-sub").hasClass('active')){
      $(".color-mode-wrapper").addClass('relative');
    }
    else{
      $(".color-mode-wrapper").removeClass('relative');
    }
    
});



// var menu = document.querySelector('.menu');
// var menu = document.querySelector('.menu');
// var colorModeWpr = document.querySelector('.color-mode-wrapper');


// colorModeWpr.style.position ="relative"



// menu.onclick = function(){
// 	if(colorModeWpr.style.position =="absolute"){
// 		colorModeWpr.style.position ="relative"
// 	}
// 	else{
// 		colorModeWpr.style.position ="absolute"
// 	}
// }

