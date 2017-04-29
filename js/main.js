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
            $('.showprofile').text(content).append(' <img class="change" src="imgs/pen.png" alt="pen">');
        };   
        $('.change').on('click', function(){
            $('.showprofile').hide();
            $('#profile-content').show();
        });
    });

//ajax weather
    $('#temp_button').click(function(){ 
        var city = $('#city').val();
        $.ajax({
            url: 'https://api.apixu.com/v1/current.json',
            method:'GET',
            data: {key:'00a244191418467d86a61037172704', q:city},
            dataType: 'json',
            success: function(response){
                $('#temp').html(parseInt(response.current.temp_c)+'&deg;'+'C');
                $('#temp_des').html(response.current.condition.text); 
            },
            error: function(){
            $('#temp_des').html('City not found');
            $('#temp').html('');
        }
            
        });   
});
    
    //timer
    function getTime(){
        var today = new Date();
    var hours = today.getHours();
    var mins = today.getMinutes();
    var sec = today.getSeconds();
    if(sec<10){
        sec = '0'+sec; 
       };
    if(mins<10){
        mins = '0'+mins; 
       };
    if(hours<10){
        hours = '0'+hours; 
       };
    if(hours>12){
        $('#ampm').html('PM');
    }else{
        $('#ampm').html('AM');
    };
    var clock = hours +':' + mins + ':' +sec;
    $('#time').html(clock);
        
    };
    getTime();
    setInterval(getTime, 1000);
       
});
