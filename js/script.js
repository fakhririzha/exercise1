$('.navbar-toggler').on('click', () => {
  $('#navbarDropdown').toggleClass('navbar-expanded');
});

// $('.nav-link').on('click', (e) => {
//   e.preventDefault();

//   $('html, body').animate({
//     scrollTop: $($(this).attr('href')).offset().top
//   }, 500);
// });

// $('a[href*="#"]').on('click', function (e) {
//   e.preventDefault();

//   $('html, body').animate({
//     scrollTop: $($(this).attr('href')).offset().top
//   }, 500, 'linear');
// });

$("a.nav-link").on('click', function (event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});
