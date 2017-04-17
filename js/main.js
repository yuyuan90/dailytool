$(document).ready(function(){
    //home and about
    $('#navbar-right li a').click(function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings('li').removeClass('active');
    });
    
    //bees parallax control
    $('.bee').plaxify();
    $.plax.enable();
    
    //show description 
    
    $('#row11').mouseenter(function(){
        $('#row11 a').css('visibility', 'visible');
    }).mouseleave(function(){
        $('#row11 a').css('visibility', 'hidden');
    });
    
    $('#row21').mouseenter(function(){
        $('#row21 a').css('visibility', 'visible');
    }).mouseleave(function(){
        $('#row21 a').css('visibility', 'hidden');
    });
    
    $('#row22').mouseenter(function(){
        $('#row22 a').css('visibility', 'visible');
    }).mouseleave(function(){
        $('#row22 a').css('visibility', 'hidden');
    });
    
    $('#row23').mouseenter(function(){
        $('#row23 a').css('visibility', 'visible');
    }).mouseleave(function(){
        $('#row23 a').css('visibility', 'hidden');
    });
    
    $('#row24').mouseenter(function(){
        $('#row24 a').css('visibility', 'visible');
    }).mouseleave(function(){
        $('#row24 a').css('visibility', 'hidden');
    });
    
    $('#row32').mouseenter(function(){
        $('#row32 a').css('visibility', 'visible');
    }).mouseleave(function(){
        $('#row32 a').css('visibility', 'hidden');
    });
    
    
    $('#row33').mouseenter(function(){
        $('#row33 a').css('visibility', 'visible');
    }).mouseleave(function(){
        $('#row33 a').css('visibility', 'hidden');
    });
    
    $('#row41').mouseenter(function(){
        $('#row41 a').css('visibility', 'visible');
    }).mouseleave(function(){
        $('#row41 a').css('visibility', 'hidden');
    });
    
    //shopping cart breath
    function breath(){
           $('#row24 img').fadeOut(1000).delay(50).fadeIn(1000, function(){breath()});
           
       }; 
    
    breath();
    
    //change profile
    $('#profile-content').on('keydown', function(e){
        var key = e.keyCode;
        if(key == 13){
            var content = $('#profile-content').val();
            $('#profile-content').hide();
            $('#profile').append('<div class="showprofile"></div>');
            $('.showprofile').text(content).append(' <img class="change" src="<div>Icons made by <a href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>">');
        };   
        $('.change').on('click', function(){
            $('.showprofile').hide();
            $('#profile-content').show();
        });
    });


    
    
});
