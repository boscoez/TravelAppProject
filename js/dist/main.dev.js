"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function ($) {
  "use strict"; // Spinner

  var _$$owlCarousel;

  var spinner = function spinner() {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };

  spinner(); // Initiate the wowjs

  new WOW().init(); // Sticky Navbar

  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $('.navbar').addClass('sticky-top shadow-sm');
    } else {
      $('.navbar').removeClass('sticky-top shadow-sm');
    }
  }); // Dropdown on mouse hover

  var $dropdown = $(".dropdown");
  var $dropdownToggle = $(".dropdown-toggle");
  var $dropdownMenu = $(".dropdown-menu");
  var showClass = "show";
  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(function () {
        var $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      }, function () {
        var $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      });
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  }); // Facts counter

  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
  }); // Back to top button

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  }); // Testimonials carousel

  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }); // Vendor carousel

  $('.vendor-carousel').owlCarousel((_$$owlCarousel = {
    loop: true,
    margin: 45,
    dots: false
  }, _defineProperty(_$$owlCarousel, "loop", true), _defineProperty(_$$owlCarousel, "autoplay", true), _defineProperty(_$$owlCarousel, "smartSpeed", 1000), _defineProperty(_$$owlCarousel, "responsive", {
    0: {
      items: 2
    },
    576: {
      items: 4
    },
    768: {
      items: 6
    },
    992: {
      items: 8
    }
  }), _$$owlCarousel));
})(jQuery);