$(document).ready(function() {
    //////////////////////////////////////////////////////////////////
    /////////////////////////////메인페이지/////////////////////////////
    //뎁스 열리는 이벤트
    $('#header .gnb').on('mouseenter',function() {
       $('#header').addClass('on'); 
    }).on('mouseleave',function() {
       $('#header').removeClass('on'); 
    });
    
    //메인비주얼 슬라이드 이벤트, 페이지네이션
    var mySwiper = new Swiper('.main_section0_wrap .main_slider', {
        loop: true,
        simulateTouch: false,
        autoplay: {
            delay:3000,
            disableOnInteraction:false,
        },
        pagination: {
            el: '.main_section0_wrap .swiper-pagination',
            clickable: true,
            bulletElement: 'button',
        },
        
    //좌우 화살표
        navigation: { 
            nextEl: '.main_section0_wrap .swiper-button-next',
            prevEl: '.main_section0_wrap .swiper-button-prev',
        }, 
    });
    
    //메인비주얼 슬라이드 자동재생 관련
    $('#main .main_section0_wrap .main_slider .btn_toggle').on('click', function() {
        $(this).toggleClass('on'); 
        //console.log($(this).hasClass('on'));
        
        if($(this).hasClass('on')) {
            mySwiper.autoplay.stop();
        } else {
            mySwiper.autoplay.start();
        }
    });
    
    //푸터 패밀리사이트 
    $('#footer .family_site .btn_retail').on('click', function() {
        $(this).siblings().stop().slideToggle();
        $(this).toggleClass('on');
    });
    
    //상품 슬라이드
    var mySwiper2 = new Swiper('.product_slider', {
        //slidesPerView:'auto'인 경우 css에서 width를 줄 수 있으며 슬라이드의 크기를 자동으로 잡히게할 경우
        //sliderPerView: 숫자 사용(3컬럼이면 3, 2컬럼이면 2)
        slidesPerView:'auto',
        slidesPerGroup:3,
        loop: true,
        navigation: {
            nextEl: '.main_section2_wrap .swiper-button-next',
            prevEl: '.main_section2_wrap .swiper-button-prev',
        },
    });
    
    //탑버튼 (생성 및 스크롤바위치에 따라 사라지고 나타나기)
    var btnTop =$('#main .btn_top')
    $(window).scroll(function() {
        var btn =$(this).scrollTop();
        //console.log(btn);
        
        if(btn >= 600) {
            $(btnTop).show();
        } else {
            $(btnTop).hide();
        }
    });
    
    //탑버튼(누르면 올라가기)
    btnTop.on('click', function(e){
        e.preventDefault();
        //스크롤바 이동시 html, body(익스,크롬)에 걸어야함
        $('html, body').animate({scrollTop:0}, 300);
    });
    //////////////////////////////////////////////////////////////////
    /////////////////////////////서브페이지/////////////////////////////
    //로케이션 메뉴 열기
    $('#container .location_wrap .location .list').on('click', function() {
        //console.log('실행됨')
        $(this).toggleClass('on');
        $(this).siblings().stop().slideToggle();
    });

    /////////////////////////서브페이지1(앱소개)/////////////////////////
    //배너에 이미지 나오는 효과주기
    $(window).show(function() {  
        $('#container.app_page .smartphone').addClass('on'); 
        $('#container.app_page .app_section .tit_wrap').addClass('on');
    });
    
    //스크롤바값 판단해서 설명섹션 효과주기
    //1번 방법시 - 앱페이지 작동O, 상품페이지 작동X
    if($('#container.app_page').length > 0) {
        var posY1 = $('#container.app_page .content .box.section1').offset().top - 800;
        var posY2 = $('#container.app_page .content .box.section2').offset().top - 800;
        var posY3 = $('#container.app_page .content .box.section3').offset().top - 800;
        var posY4 = $('#container.app_page .content .box.section4').offset().top - 800;
        var posY5 = $('#container.app_page .content .box.section5').offset().top - 800;
        var posY6 = $('#container.app_page .content .box.section6').offset().top - 800;   
        //2번 방법시 - 앱페이지 작동X, 상품페이지 작동O
    /*    var posY1 = $('#container.app_page .content .box.section1').offset({top:-800});
        var posY2 = $('#container.app_page .content .box.section2').offset({top:-800});
        var posY3 = $('#container.app_page .content .box.section3').offset({top:-800});
        var posY4 = $('#container.app_page .content .box.section4').offset({top:-800});
        var posY5 = $('#container.app_page .content .box.section5').offset({top:-800});
        var posY6 = $('#container.app_page .content .box.section6').offset({top:-800});*/
        var section1 = $('#container.app_page .content .box.section1')
        var section2 = $('#container.app_page .content .box.section2')
        var section3 = $('#container.app_page .content .box.section3')
        var section4 = $('#container.app_page .content .box.section4')
        var section5 = $('#container.app_page .content .box.section5')
        var section6 = $('#container.app_page .content .box.section6')

        $(window).scroll(function() {
            var _scrollTop = $(this).scrollTop();

            if(_scrollTop >= posY1) {
                section1.addClass('on');
            }
            if(_scrollTop >= posY2) {
                section2.addClass('on');
            }
            if(_scrollTop >= posY3) {
                section3.addClass('on');
            }
            if(_scrollTop >= posY4) {
                section4.addClass('on');
            }
            if(_scrollTop >= posY5) {
                section5.addClass('on');
            }
            if(_scrollTop >= posY6) {
                section6.addClass('on');
            }

        }); 
    }
    
    
    ////////////////////////서브페이지2(상품소개)////////////////////////
    //베스트아이템 배너
    $('#container.product_page .item_tap li').on('click', function(e) {
        e.preventDefault(); 
        $(this).toggleClass('active').siblings().removeClass('active'); 
        //console.log($(this).hasClass('active'));
        
        var num = $(this).index();
        console.log(num);
        
        if($(this).hasClass('active')) {
            $('#container.product_page .item_banner li').eq(num).addClass('active').show().siblings().removeClass('active');
        }
    });    
    
    
    //카테고리
    $('#container.product_page .category_list li>a').on('click', function(e) {
        e.preventDefault(); $(this).toggleClass('on').parent().siblings().find('a').removeClass('on');
    });
 
    //오른쪽 플로팅메뉴
    $(window).scroll(function(){
        var _scrollTop2 = $(this).scrollTop();
        
    $('#floatmenu').stop().animate({top:_scrollTop2+150}, 600);
    });
    
    //오른쪽 플로팅메뉴-탑버튼 클릭시 스크롤바 애니메이션
    var btnUp = $('#floatmenu .btn_updown .up')
    var btnDown = $('#floatmenu .btn_updown .down')
    
    btnUp.on('click', function(e){
        e.preventDefault();          
        $('html, body').animate({scrollTop:0}, 300);
    });
    
    btnDown.on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:3000}, 300);
    });
    
});//ready 끝  


