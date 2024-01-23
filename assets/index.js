$(document).ready(function () {
    const elementsToFadeIn = $(
      "#image1, .wraps, .sides, .favorites, .location, .hours"
    );
  
    elementsToFadeIn.each(function (index) {
      $(this)
        .delay(300 * index)
        .fadeIn(4000);
    });
  });