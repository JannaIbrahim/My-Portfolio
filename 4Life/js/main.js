
(function ($) {
    'use strict';
    
//-----start preloader
        var $window = $(window);

    $window.on('load',function(){
        $('.preloader').fadeOut('slow',function(){
            $(this).remove();
        });
    });
//-----endpreloader
    
//------start navbar
//jQuery.noConflict()(function ($) {
//$(document).ready( function(){
//$(window).scroll(function(){
//        if($(window).scrollTop()>=$('#navtop').offset().top){
//            $('nav').addClass('fixed');
//        }else{
//             $('nav').removeClass('fixed'); 
//             }
//    });
//    
//------end navbar
    

//});
//});
})(jQuery);                   