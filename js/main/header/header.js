$(function(){
    console.log('main header');

    var $header = $('#header');
    var $inner = $header.children('.inner');
    var $icons = $inner.children('.icons');
    var $menuBtn = $('.menuBtn');
    var $backBtn = $('.backBtn');
    var $searchLayout = $('#searchLayout');
    var $settingLayout = $('#settingLayout');

    //공통 : 외부영역 클릭 시 팝업창 숨김
    $(document).mouseup(function(e){
        //검색창
        if($searchLayout.has(e.target).length === 0){
            $searchLayout.fadeOut();
        }
        //설정창
        if($settingLayout.has(e.target).length === 0){
            $settingLayout.fadeOut();
        }
    });

    //설정창
    $settingLayout.hide();

    $icons.children('a:last-child').on('click', function(){
        // 설정창 보임
        $settingLayout.fadeIn();
    });

    $settingLayout.find('li:last-child').on('click', function(e){
        // 설정창 숨김
        e.preventDefault();
        $settingLayout.fadeOut();
    });


    // 검색창
    $searchLayout.hide();

   
    $icons.children('a:first-child').on('click', function(){
        // 검색창 보임
        $searchLayout.fadeIn();
    });
    
    $backBtn.on('click',function(){
        // 검색창 숨김
        $searchLayout.fadeOut();
    });


    // 메뉴
    $menuBtn.on('click', function(){
        var $menuList = $('#menuList');
        $menuList.slideToggle();
    });

   

    
});