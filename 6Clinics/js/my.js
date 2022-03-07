jQuery.noConflict()(function ($) {
$(document).ready( function(){
    $('nav ul li a').click(function(e) {
    
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top -51
        },1000);
        
  
    });
        
    $(window).scroll(function(){
        if($(window).scrollTop()>=$('#navtop').offset().top){
            $('nav').addClass('fixed');
        }else{
             $('nav').removeClass('fixed'); 
             }
    });
    });
});