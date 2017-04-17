$(document).ready(function(){
    
    //home and about
    $('#navbar-right li a').click(function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings('li').removeClass('active');
    });
 
    var currentpic;
    var thumbnail;
    //creat url array
    var imagesrc = new Array();
    $('#thumbnail img').each(function(){
            imagesrc.push($(this).attr('src'));
    });
    
    //autoplay
    function autoplay(){
        currentpic = $.inArray($('#enlarge img').attr('src'), imagesrc);
       
        if(currentpic==imagesrc.length-1){
            $('#enlarge img').fadeOut(500, function(){
                $(this).attr('src', imagesrc[0]);  
            }).fadeIn(500);
            
            $('img.pic').eq(currentpic).removeClass('selected');
            $('img.pic').eq(0).addClass('selected'); 
            
        }else{
            $('#enlarge img').fadeOut(500, function(){
                $(this).attr('src', imagesrc[currentpic+1]);
            }).fadeIn(500);

            $('img.pic').eq(currentpic).removeClass('selected');
            $('img.pic').eq(currentpic+1).addClass('selected');   
        }
    };
    
    var int=setInterval(autoplay,2500);
    
    //left-arrow key
    $('#left-arrow').click(function(){
        $('img.pic').removeClass('selected');
        currentpic = $.inArray($('#enlarge img').attr('src'), imagesrc);
        if(currentpic==0){
            $('#enlarge img').attr('src', imagesrc[imagesrc.length-1]);
        }else{
            $('#enlarge img').attr('src', imagesrc[currentpic-1]);
        };
        
    });
    
    //right-arrow key
    $('#right-arrow').click(function(){
        $('img.pic').removeClass('selected');
        currentpic = $.inArray($('#enlarge img').attr('src'), imagesrc);
        if(currentpic==imagesrc.length-1){
            $('#enlarge img').attr('src', imagesrc[0]);
        }else{
            $('#enlarge img').attr('src', imagesrc[currentpic+1]);
        };
        
    });
    
    //enlarge
    $('img.pic').click(function(){
        thumbnail = $(this).attr('src');
        $('img[src!=thumbnail]').removeClass('selected');
        $(this).addClass('selected');
        $('#enlarge img').attr('src', thumbnail);
        
    });
      
        
});