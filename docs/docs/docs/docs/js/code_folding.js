$(document).ready(function() {
    $(".fold").prepend("<button class=\"fold-btn\">+</button>");
    $(".fold").children("code").toggle();
    $(".fold-btn").on("click", function() {
      if($(this).text() === "Fold") {
        $(this).text("+");
      } else {
        $(this).text("-");
      }
      $(this).next("code").toggle("linear");
    });
  });