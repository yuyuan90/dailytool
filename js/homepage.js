$(document).ready(function(){
    //home and about
    $('#navbar-right li a').click(function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings('li').removeClass('active');
    });
    
    //show modal
    $('#left-button').click(function(){
        $('#leftModal').css('display', 'block');
    });
    
    //tabs for signup or login
    $('.title').click(function(){
        
        var other_tab = $(this).parent().siblings('.tab');
        
        $(this).siblings('form, button').css('visibility', 'visible');
        $(this).css('border-bottom','none');
        
        
        other_tab.children('form, button').css('visibility', 'hidden');
        other_tab.children('.title').css('border-bottom','1px solid #ccc');
    });
    
    //close modal
    $('.close').click(function(){
        $('#leftModal').css('display', 'none');
    });
    
});