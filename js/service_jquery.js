$(document).ready(function(){

    // jQuery methods go here...

    $(".service-detailss").mouseenter(function(){
         $(this).addClass("serviceenter"
        );
        $(this).removeClass("serviceout"
        );
      
      
      });
      $(".service-detailss").mouseleave(function(){
        $(this).addClass(
       "serviceout"
        );
        $(this).removeClass(
       "serviceenter"
        );
      });

 /*     
      $(".service-2-detailss").mouseenter(function(){
        $(".service-2-detailss").addClass("serviceenter"
        );
        $(".service-2-detailss").removeClass("serviceout"
        );
      
      
      });
      $(".service-2-detailss").mouseleave(function(){
        $(".service-2-detailss").addClass(
       "serviceout"
        );
        $(".service-2-detailss").removeClass(
       "serviceenter"
        );
      });

      $(".service-3-detailss").mouseenter(function(){
        $(".service-3-detailss").addClass("serviceenter"
        );
        $(".service-3-detailss").removeClass("serviceout"
        );
      
      
      });
      $(".service-3-detailss").mouseleave(function(){
        $(".service-3-detailss").addClass(
       "serviceout"
        );
        $(".service-3-detailss").removeClass(
       "serviceenter"
        );
      });
  */
  });