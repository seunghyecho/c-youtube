$(function(){
    console.log('main intro');

    // metadata : s
    var $intro = $('#intro');
    var $video = $('.inner > div.video');
    var $infoAndUpnext = $('.infoAndUpnext');
    var $metaData = $('.metadata');
    var $metaDescription = $('.meta_description');
    var $metaWrap = $('.meta_description > .wrap');
    var $btnClose = $metaDescription.children('.top').find('button');
   

    // $metaDescription.css({'height' : (windowHt - videoHt)+'px'});
    // console.log($metaDescription.innerHeight());
    // $metaWrap.css({'height' : (windowHt - videoHt)+'px'});


    $(window).resize(function(){
        var videoHt = $video.innerHeight();
        var windowHt = $(window).innerHeight();
        $metaDescription.css({'height' : (windowHt - videoHt)+'px'});
        console.log(videoHt, $metaDescription.innerHeight());
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
            // $('html, body').removeClass('on');
        });
    });
  
    // metadata : e


});