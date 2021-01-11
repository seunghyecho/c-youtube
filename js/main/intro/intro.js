$(function(){
    console.log('main intro');

//     //load_youtube
//     var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
//     var key = 'AIzaSyCJRbPH-vDO1Ryn3iZERfc5QQb9nD1sv08';
//     var playlistId = 'PLNjtvANfBJzdwUB22u2u4KzZdZNazkq_y';

//     var options = {
//         part: 'snippet',
//         key: key,
//         maxResults: 10,
//         playlistId: playlistId
//     }

//     load_youtube();

//     //youtube 데이터 호출
//     function load_youtube(){
//         $.ajax({
//             url : URL,
//             dataType : 'jsonp',
//             data : options      
//         })
//         .success(function(data){
//             console.log(data);
//             create_list(data);
//         })
//         .error(function(){
//             alert('Fail to load Youtube data!!');
//         })
//     }

//     //유튜브 목록 생성
// function create_list(data){
//     $(data.items).each(function(index, item){
//         var thumb = item.snippet.thumbnails.medium.url;
//         var title = item.snippet.title;
//         var details = item.snippet.description;
//         var details_len = details.length;
//         var vid_id = item.snippet.resourceId.videoId;
//         var date = item.snippet.publishedAt.substring(0,10);
//         var result = '';
       

//         if(details_len>50){
//             result = details.substring(0,50)+'...';
//         }else{
//             result = details;
//         }

   
//     })
// }

    // metadata : s
    var $intro = $('#intro');
    var $video = $('.inner > div.video');
    var $infoAndUpnext = $('.infoAndUpnext');
    var $metaData = $('.metadata');
    var $metaDescription = $('.meta_description');
    var $btnClose = $metaDescription.children('.top').find('button');
    var videoHt = $video.innerHeight();
    var windowHt = $(window).innerHeight();

    $(window).resize(function(){
        $metaDescription.css({'height' : (windowHt - videoHt)+'px'});
    });


    $metaDescription.fadeOut();
    $metaData.on('click', function(){
        $metaDescription.fadeIn(800, function(){
            $intro.addClass('on');
            $infoAndUpnext.addClass('on');
            $('html, body').addClass('on');
        });
       
    });
    $btnClose.on('click', function(){
        $infoAndUpnext.removeClass('on');
        $metaDescription.fadeOut(800, function(){
            $intro.removeClass('on');
            $('html, body').removeClass('on');
        });
    });
  
    // metadata : e


});