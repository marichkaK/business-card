$(".nav.navbar-nav").on("click", function(){
   $(".nav.navbar-nav").find(".active").removeClass("active");
  debugger;
   $(this).addClass("active");

});