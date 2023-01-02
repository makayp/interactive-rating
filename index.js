let rating;
$(".rate").click(function () {
  $(".rate").removeClass("pressed");
  $(this).addClass("pressed");
  rating = this.id;
});

$(".btn").click(function () {
  if (rating) {
    $("#rate").hide();
    $(".result").text(`You selected ${rating} out of 5`);
    $("#thank-you").fadeIn();
  }
});
