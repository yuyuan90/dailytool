$(document).ready(function(){  
   //home and about
    $('#navbar-right li a').click(function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings('li').removeClass('active');
    });
});