$(document).ready(function() {

  $(".hamburger").click(function() {
    $(".nav-links").toggleClass("active");
  });

 
  $(".booking-form").submit(function(e) {
    e.preventDefault();
    alert("Booking Confirmed! We will contact you soon.");
    $(this).trigger("reset");
  });
});
