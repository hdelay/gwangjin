$(function(){

    // menu hover

    $('nav .inner > ul > li').hover(function(){
        $('.headerDim').stop().slideDown(200);
        $('header nav ul ul').stop().slideDown(200);
        $(this).addClass('on');
    }, function(){
        $('.headerDim').stop().slideUp(200);
        $('header nav ul ul').stop().slideUp(200);
        $('nav .inner > ul > li').removeClass('on');
    });

    // slick slide
    $(".keyvisualList").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,		// 자동 스크롤 사용 여부
		autoplaySpeed : 3000, 	// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover : true		// 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정
    });

    // notice tab
    var noticeTab = $('.tabTit ul li');
    var noticeTabList = $('.tabList > div');
    noticeTab.click(function(e){
        e.preventDefault();
        var idx = $(this).index();
        noticeTab.removeClass('on');
        $(this).addClass('on');

        noticeTabList.hide();
        noticeTabList.eq(idx).show();
    });

    // mobile location
    $('.location > ul > li > a').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('on');
    });

    // mobile nav
    $('.mobileMenuBtn a').click(function(e){
        e.preventDefault();
        $('.mobileMenu').addClass('active');
        $('header').append('<div class="mobileMenuDim"></div>');
    });
    // 외부영역 클릭 시 팝업 닫기
    $(document).mouseup(function (e){
        var $nav = $(".mobileMenu");
        if($nav.has(e.target).length === 0){
            $nav.removeClass('active');
            $('.mobileMenuDim').addClass('active');
        }
    });
    // close
    $('.mobileMenuClose a').click(function(e){
        e.preventDefault();
        $('.mobileMenu').removeClass('active');
        $('.mobileMenuDim').addClass('active');
    });

    // 회원가입안내 레이어팝업 닫기
    $('.popupClose').click(function(e){
        e.preventDefault();
        $('.layerPopup').hide();
        $('.popupDim').hide();
    });
    

    // mobile menu dropDown
    $('.mobileMenu > ul > li > a').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('on');
    });











































});