$(document).ready(function(){
    //home and about
    $('#navbar-right li a').click(function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings('li').removeClass('active');
    });
    
    $('.pause').hide();
    $('.mute').hide();
 
    var audio; 
    var playlist = [
{
title: '三線の花',
artist: 'Begin',
album: '三線の花',
cover:'../imgs/begin.jpg',
mp3: '../music/Begin - 三線の花.mp3'
},
{
title: 'Dans Les Rues de Ma Jeunesse',
artist: 'Gérard Darmon',
album: 'On SAime',
cover: 'imgs/On.jpg',
mp3: 'music/Gérard Darmon - Dans Les Rues de Ma Jeunesse.mp3'
},
{
title: 'In My Life',
artist: 'John Lennon',
album: 'Imagine: John Lennon',
cover: 'imgs/John_Lennon_-_Imagine_John_Lennon.jpg',
mp3: 'music/John Lennon - In My Life.mp3'
},
{
title: 'За тебя, Родина-мать',
artist: 'Lube',
album: 'За тебя, Родина-мать!',
cover: 'imgs/За_тебя,_Родина-мать!_cover.jpg',
mp3: 'music/Lube - За тебя, Родина-мать.mp3'
},
{
title: 'Closer',
artist: 'Travis',
album: 'Closer',
cover: 'imgs/closer.jpg',
mp3: 'music/Travis - Closer.mp3'
},
{
title: 'Unaccompanied Cello Suite No. 1 in G Major, BWV 1007 Prélude (Instrumental) - instrumental',
artist: 'Yo-Yo Ma',
album: 'Bach: Cello Suites Nos. 1, 5 & 6',
cover: 'imgs/yoyo-ma.jpg',
mp3: 'music/Yo-Yo Ma - Unaccompanied Cello Suite No. 1 in G Major, BWV 1007 Prélude (Instrumental) - instrumental.mp3'
}, 
{
title: 'Summer',
artist: '久石譲',
album: 'Encore',
cover: 'imgs/久石譲 - Summer.jpg',
mp3: 'music/久石譲 - Summer.mp3'
},
{
title: 'D.M. (AsianMix) - remix',
artist: '門倉聡',
album: 'METAL SAGA',
cover: 'imgs/D.M.jpg',
mp3: 'music/MONGOL800 - こいのうた.mp3'
},
{
title: '歌をあなたに',
artist: '中島みゆき',
album: '私の声が闻こえますか',
cover: 'imgs/歌をあなたに.jpg',
mp3: 'music/中島みゆき - 歌をあなたに.mp3'
}           
];
     
	// Load playlist 
    for ( var i=0; i<playlist.length; i++){ 
        $('#playlist').append('<li>'+playlist[i].artist + '-' + playlist[i].title+'</li>');

  };
     //Create a New Audio Object
    audio = new Audio();
    
  var currentTrack=0; 

    //when track ended
   var ended = function(){
		audio.currentTime = 0;
        $('.p_pace').css('width', '0');
		if (currentTrack < playlist.length){
            switchTrack(++currentTrack);
            
        } 
	} 
    
   //switch track
   var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}
		initAudio(track);
	} 
   //load music
   var initAudio = function (i){
        var item = playlist[i];
        var cover = item.cover;
        var title = item.title;
        var artist = item.artist;
        var album = item.album;
            audio.src=item.mp3;
            audio.autoplay = true;
         
        $('.cover').attr('src', cover);
        $('.title').html(title);
        $('.artist').html(artist);
        $('.album').html(album);
        $('#playlist li').removeClass('playing').eq(i).addClass('playing');
        audio.addEventListener('ended', ended, false);
        $('.pause').show();
        $('.playbutton').hide();
        showDuration();
         
   };          
   
  initAudio(currentTrack);  
         
//click playlist
$('#playlist li').click(function(){
    var i = $(this).index();
    initAudio(i);
    showDuration();
});
    
//play button
$('.playbutton').click(function(){
    audio.play();
    $('.pause').show();
    $('.playbutton').hide();
    showDuration();
});

 //pause button
$('.pause').click(function(){
    audio.pause();
    $('.playbutton').show();
    $('.pause').hide();
});

 //prev button
$('.prev').click(function(){
    var prev = $('#playlist li.playing').index() - 1;
    if (prev == -1){
        prev = 8;
    }
    initAudio(prev);
    audio.play;
    showDuration();
    
});
    
$('.next').click(function(){
    var next = $('#playlist li.playing').index() + 1;
    if (next ==9){
        next = 0;
    }
    initAudio(next);
    audio.play;
    showDuration();
    
});
    
//Time Duration 
function showDuration(){
    if(!audio.currentTime){
		$('.time').html('0:00');
	};
    $(audio).bind('timeupdate', function(){
        var s = parseInt(audio.currentTime%60);
        var m = parseInt((audio.currentTime / 60) % 60);
        if (s<10){
            s = '0'+s;
        }
        $('.time').html(m + ':' + s);
        
        var value=0;
       if (audio.currentTime > 0){
            value = Math.floor((100 / audio.duration) * audio.currentTime);
            $('.p_pace').css('width', value+'%');
        };
     
    });
    
};

//volume slider   
var setVolume = function(value){
    audio.volume = localStorage.volume = value;
    $('.v_pace').css('width', value * 100 + '%'); 
};

var volume = localStorage.volume || 0.5; 
    
$('.v_slider').slider({max:1, min:0, step:0.01, value: volume, slide:function(event, ui){
    setVolume(ui.value);
    $('.mute_enable').removeClass('mute');
  } }).children('.v_pace').css('width', volume * 100 + '%'); 
    
    
    $('.mute_enable').click(function(){
        if ($(this). hasClass('mute')){
           
            $(this).removeClass('mute');
            setVolume($(this).data('volume'));
            
        }else {
            $(this).data('volume', audio.volume).addClass('mute'); //$.data()向class为.mute_enable的元素存储数据
            setVolume(0);
        }    
});
  
// progress slider 
    $('.p_slider').slider({step: 0.1, slide:function(event, ui){   
        audio.currentTime = audio. duration * ui.value / 100;
        showDuration();
       $('.p_pace').css('width', ui.value + '%');
}});  
 
})
    
