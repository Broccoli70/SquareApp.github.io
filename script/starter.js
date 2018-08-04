$(window).on("load", () => {
  $("#logo").animate({
    opacity: 0,
  }, 500, function(){
        $("#display").animate({
          opacity: 0,
        }, 250, function(){
          $("#display").css({display: "none"}),
          $("html").css({overflow: "auto"})
        })
  });
});
