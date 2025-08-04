(function ($) {
  "use strict";

  // ✅ Header Scroll Effect
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height() || 0;
    var header = $("header").height() || 0;

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  // ✅ Owl Carousel Init (check if exists)
  if ($(".loop").length) {
    $(".loop").owlCarousel({
      center: true,
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      margin: 0,
      responsive: {
        1200: {
          items: 5,
        },
        992: {
          items: 3,
        },
        760: {
          items: 2,
        },
      },
    });
  }

  // ✅ Modal Trigger (leanModal plugin)
  if ($("#modal_trigger").length && $.fn.leanModal) {
    $("#modal_trigger").leanModal({
      top: 100,
      overlay: 0.6,
      closeButton: ".modal_close",
    });
  }

  // ✅ Login/Register Form Toggle
  $(function () {
    $("#login_form").on("click", function () {
      $(".social_login").hide();
      $(".user_login").show();
      return false;
    });

    $("#register_form").on("click", function () {
      $(".social_login").hide();
      $(".user_register").show();
      $(".header_title").text("Register");
      return false;
    });

    $(".back_btn").on("click", function () {
      $(".user_login").hide();
      $(".user_register").hide();
      $(".social_login").show();
      $(".header_title").text("Login");
      return false;
    });
  });

  // ✅ FAQ Accordion (Naccs)
  $(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).hasClass("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });

  // ✅ Mobile Nav Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // ✅ Scroll-to-section with smooth scroll
  $(".scroll-to-section a[href^='#']").on("click", function (e) {
    const hash = this.hash;
    if (hash && $(hash).length) {
      e.preventDefault();
      const target = $(hash).offset().top;

      const width = $(window).width();
      if (width < 991) {
        $(".menu-trigger").removeClass("active");
        $(".header-area .nav").slideUp(200);
      }

      $("html, body").animate(
        {
          scrollTop: target + 1,
        },
        700
      );
    }
  });

  // ✅ On scroll active nav
  function onScroll() {
    var scrollPos = $(document).scrollTop();
    $(".nav a[href^='#']").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.length &&
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav ul li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  $(document).on("scroll", onScroll);

  // ✅ Preloader
  $(window).on("load", function () {
    $("#js-preloader").addClass("loaded");
  });

  // ✅ Mobile submenu toggle
  function mobileNav() {
    var width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 767) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }
  mobileNav(); // jalankan saat load

})(window.jQuery);
