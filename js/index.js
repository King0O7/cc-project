$( document ).ready(function() 
{
      $(window).scroll(testScroll);
            var viewed = false;
            function isScrolledIntoView(elem) 
            {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                var elemBottom = elemTop + $(elem).height();
                return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
            }
            
            function testScroll() 
            {
               if (isScrolledIntoView($(".number-1")) && !viewed) 
                {
                    viewed = true;
                    $('.count').each(function () 
                    {
                        $(this).prop('Counter',0).animate(
                        {
                        Counter: $(this).text()
                        }, 
                        {
                                duration: 1500,
                                easing: 'swing',
                                step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                            });
                    }
                                    );
                }
            }
       

            
       

});