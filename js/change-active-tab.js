 <script>
   function change-active-tab(){ $(".nav .nav-link").on("click", function(){
       $(".nav").find(".active").removeClass("active");
            $(this).addClass("active");
     });
     }
  </script>