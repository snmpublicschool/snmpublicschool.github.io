if($(window).width() >= 1024){
  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + ($(this).innerHeight());
      $("#section1").each(function() {
        /* Check the location of each desired element */
         var objectBottom = $(this).offset().top + $(this).outerHeight();

         /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
           if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
         } else { //object goes out of view (scrolling up)
           if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
         }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + ($(this).innerHeight())*2;
      $("#section2").each(function() {
        /* Check the location of each desired element */
         var objectBottom = $(this).offset().top + $(this).outerHeight();

         /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
           if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
         } else { //object goes out of view (scrolling up)
           if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
         }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });


  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + ($(this).innerHeight())*2;
      $("#section3").each(function() {
        /* Check the location of each desired element */
         var objectBottom = $(this).offset().top + $(this).outerHeight();

         /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
           if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
         } else { //object goes out of view (scrolling up)
           if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
         }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

}





if($(window).width() >= 1024){
  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + ($(this).innerHeight())*1.5;
      $("#Philosophy").each(function() {
        /* Check the location of each desired element */
         var objectBottom = $(this).offset().top + $(this).outerHeight();

         /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
           if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
         } else { //object goes out of view (scrolling up)
           if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
         }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });
}



if($(window).width() >= 1024){
  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + ($(this).innerHeight())*1.4;
      $("table").each(function() {
        /* Check the location of each desired element */
         var objectBottom = $(this).offset().top + $(this).outerHeight();

         /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
           if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
         } else { //object goes out of view (scrolling up)
           if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
         }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

}




















$(function(){
    $('#example1').click(function() {
          var name=prompt("Please Enter Your Name");
          if(name.length!=0)
            {

            alert("Hello"+" "+name+"......Welcome To This Site!");

        }
        else
        alert("Feeling Shy!");

    });
});
