$(document).on("ready", function () {
  // Navbar behavior
  $('a[href^="#"]').on("click", function (event) {
    var target = $($(this).attr("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 80,
        },
        1000
      );
    }
  });

  // Fade effect of intro
  $(window).scroll(function () {
    var top = $(window).scrollTop() > 80 ? $(window).scrollTop() : 1;
    $(".fade")
      .stop(true, true)
      .fadeTo(0, 1 / top);
  });

  // Jonas Kofod scroll to top animation
  $(".scrollup").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
