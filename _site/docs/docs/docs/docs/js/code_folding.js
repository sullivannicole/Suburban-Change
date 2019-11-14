$(document).ready(function() {
    $(".fold").prepend("<button class=\"fold-btn\">Unfold</button>");
    $(".fold").children("code").toggle();
    $(".fold-btn").on("click", function() {
      if($(this).text() === "Fold") {
        $(this).text("Unfold");
      } else {
        $(this).text("Fold");
      }
      $(this).next("code").toggle("linear");
    });
  });