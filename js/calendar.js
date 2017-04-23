$(document).ready(function(){
    //home and about
    $('#navbar-right li a').click(function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings('li').removeClass('active');
    });
    
     //change months 
    $('.last-month1').click(function(){
        var current_div = $(this).closest('li').index();  
        $('#months li').eq(current_div).children().css('visibility', 'hidden');
        current_div -=1;
        $('#months li').eq(current_div).children().css('visibility', 'visible');

    });
     
    $('.next-month1').click(function(){
        var current_div = $(this).closest('li').index();  
        $('#months li').eq(current_div).children().css('visibility', 'hidden');
        current_div +=1;
        if(current_div < 12){
           $('#months li').eq(current_div).children().css('visibility', 'visible');
           }else{
           $(' #months li').eq(11).children().css('visibility', 'visible');    
           };
    });
   
    //Store the last clicked item in a variable
    var lastClicked;
    //pop up event window at clicked position
    $(document).on('click', '.right-cal td', function(e){
        var current_td = $(this);
        //get the coordinates
        var posX = e.pageX; 
        var posY = e.pageY;
        
        //show event window below or above 
        if($('#edit-container').css('display') == 'none'){
            if($(this).parent().hasClass('event-down')){
            $('.triangle').css({
                'bottom':-7,
                'border-right': '1px solid rgba(153, 153, 153, 0.5)',
                'border-bottom': '1px solid rgba(153, 153, 153, 0.5)',
                'border-left': 0,
                'border-top': 0
            });
            $('#event-container').css({'left': parseInt(posX)-175, 'top': parseInt(posY)-260, 'display': 'block'});   
        }else{
            $('.triangle').css({
                'bottom':194,
                'border-right': 0,
                'border-bottom': 0,
                'border-left': '1px solid rgba(153, 153, 153, 0.5)',
                'border-top': '1px solid rgba(153, 153, 153, 0.5)'
            });
            $('#event-container').css({'left': parseInt(posX)-175, 'top': parseInt(posY)-40, 'display': 'block'});
        };
           //change color upon clicked
            $(this).css('background', 'rgba(255, 228, 1, .8)');
            //do sth. to the last-clicked element
            $(lastClicked).css('background', 'white');
        };
    
        //close event window
        $('.calendar-close').click(function(){
        $(this).parent().css('display', 'none'); 
        $(current_td).css('background', 'white');
    });
 
        //assign the clicked element to the lastClicked variable
        lastClicked = $(this); 

        }); 
        
    //retrieve the content upon "create"
        $('#create').click(function(){
            var content = $('.event').val();
            $('#event-container').css('display', 'none'); 
            $('.right-cal td').css('background', 'white'); 
            //display the info
            $('<div class="event_list"></div>').appendTo($(lastClicked)).text(content);
            $('.event').val('');
        });
    
    //edit and delete events
    $(document).on('click', '.event_list', function(e){
        e.stopPropagation();
        var current_event = $(this);
        current_event.parent().css('background', 'rgba(255, 228, 1, .1)');
        //get the coordinates
        var X = e.pageX; 
        var Y = e.pageY;
        var winX = parseInt($(window).width())* .18;
        var winY1 = parseInt($(window).height())* .40;
        var winY2 = parseInt($(window).height())* .06;
        //show event window below or above
        if($(this).parents('tr').hasClass('event-down')){
            $('.triangle').css({
                'bottom':-7,
                'border-right': '1px solid rgba(153, 153, 153, 0.5)',
                'border-bottom': '1px solid rgba(153, 153, 153, 0.5)',
                'border-left': 0,
                'border-top': 0
            });
            $('#edit-container').css({'left': parseInt(posX)-winX, 'top': parseInt(posY)-winY1, 'display': 'block'});
        }else{
            $('.triangle').css({
                'bottom':194,
                'border-right': 0,
                'border-bottom': 0,
                'border-left': '1px solid rgba(153, 153, 153, 0.5)',
                'border-top': '1px solid rgba(153, 153, 153, 0.5)'
            });
            $('#edit-container').css({'left': parseInt(posX)-winX, 'top': parseInt(posY)-winY2, 'display': 'block'});
        };
        
        $('#edit-container').find('input.event').val($(this).text());
        
        //save change
        $('#save').click(function(){ 
            current_event.parent().css('background', 'white');
            current_event.text($('#edit-container').find('input.event').val());
            $('#edit-container').css('display', 'none');
            
        });
        
        
        //delete 
        $('#delete').click(function(){
            current_event.parent().css('background', 'white');
            current_event.remove();
            $('#edit-container').css('display', 'none'); 
            
        });

        
        
    });
    
    

    });//whole function
    
    

