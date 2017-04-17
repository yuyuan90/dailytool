$(document).ready(function(){
    //home and about
    $('#navbar-right li a').click(function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings('li').removeClass('active');
    });
    
    //popup window
    $('.item').click(function(){
  
        var name = $(this).find('p.item-description').text();
        var image = $(this).find('img').attr('src');
        var price1 = $(this).find('.sale').text();
        var price2 = $(this).find('.pre-price').text();

        $('#left p').text(name);
        $('#left img').attr('src', image);
        $('#price span.sale').text(price1);
        $('#price span.prev-price').text(price2);
        
        $('#popup-container').css('visibility', 'visible');
        $('.close').click(function(){
        $('#popup-container').css('visibility', 'hidden');
    });
    });
    
    //back-to-top
    $(window).on('scroll', function(){
        if($(this).scrollTop() > window.outerHeight){
            $('#back-to-top').css('visibility', 'visible');   
        }else{
            $('#back-to-top').css('visibility', 'hidden');  
        };
    });

    //filter
    $('#category li').on('click', function(){
        var category = $(this).attr('id');
        if(category == 'album'){
            $('.item').hide();
            $('.album-cover').show();
        }else if(category == 'game'){
            $('.item').hide();
            $('.game-cover').show();
                 }
        else if(category == 'picture'){
            $('.item').hide();
            $('.animal-pic').show();    
                }
        else if(category == 'all'){ 
            $('.item').show();
    }else{
            alert('New features coming soon...');
    };
        $('#search').val('');
    });
    
    //search
    $('#search-icon').click(function(){
        var keywords = $(this).siblings().val().toLowerCase();
        $('#content-container div').each(function(){
            var result = $(this).text().toLowerCase().indexOf(keywords);
            if(result === -1){
                $(this).hide();
            };
            if(keywords === ''){
                $('.item').show();
            };
        });
    });
    $('#search').keypress(function(e){
        if(e.keyCode == 13)
        $('#search-icon').click();
    });
    
    //calculation
   var sum = 0;
   var total = 0;
   $('#add').click(function(){
       //calculation for sum
        var quantity = $(this).prev().val();
        var price = $(this).parent('#form').siblings('#price').find('.sale').text();
        if (quantity!= ''){
            total = total + quantity * price;
            $('#dialog span').text(total);
            $('#dialog').css('visibility', 'visible').fadeIn(1000, function(){$(this).delay(500).fadeOut(1500)});

           //change quantity
            sum = sum + parseInt($('#quantity').val());
            $('#goods').text(sum);
            $('#quantity').val('1');
        }
            $('#popup-container').css('visibility','hidden');
        
    });
    

});
