$(function () {
    // 겹치지 않게 하기 위해 아이디를 줌!!!!

    // @언어 선택 //
    // 밸류값 갖고 와서 고 누르면 그 사이트로 이동하게 하기
    $("#btnLang").click(function () {
        url = $("#langList").val() /* value 선택함 */

        //  console.log(url);

        window.open(url); /* 새창으로 */
    })

    // @언어 선택 끝//



    ////////////// 주요뉴스 시민참여 탭 //////////////////////
    $('.slide .sc-title').click(function (e) {
        e.preventDefault(); /* a 태그 있을 때 무조건 필요 */

        $(this).parent().addClass('active').siblings('.slide').removeClass('active');

        // $('.slide .btn-autoplay').removeClass('active').attr('aria-label','자동재생 정지');

        if ($(this).parent().hasClass('news')) {
            $('#slide2 .btn-autoplay').removeClass('active').attr('aria-label','자동재생 정지');

            //주요뉴스 (뉴스라는 클래스 있어?)
            slide1.autoplay.start();
            slide2.autoplay.stop();
            slide1.slideTo(0);
        } else {

            $('#slide1 .btn-autoplay').removeClass('active').attr('aria-label','자동재생 정지');

            // 시민참여
            slide1.autoplay.stop();
            slide2.autoplay.start();
            slide2.slideTo(0);
        }
    })

    /////// 주요뉴스 슬라이드 /////////////
    const slide1 = new Swiper("#slide1", {
        // simulateTouch:false, 터치금지
        pagination: {
            el: ".fraction",
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current">${current}</span>/<span class="total">${total}</span>
            `;
            },
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },

        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });
    /////// 주요뉴스 슬라이드 끝/////////////


    /////// 시민참여 슬라이드 /////////////
    const slide2 = new Swiper("#slide2", {
        // simulateTouch:false, 터치금지
        pagination: {
            el: ".fraction",
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current">${current}</span>/<span class="total">${total}</span>
            `;
            },
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },

        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });
    /////// 시민참여 슬라이드 끝/////////////

    slide2.autoplay.stop();

    /////////// 주요뉴스 시민참여 탭 끝 //////////////////////

    // 하단 이미지 배너 3개씩////////////
    const slideBanner = new Swiper("#slideBanner", {
        // simulateTouch:false, 터치금지
        loop: true,
        /* 앞 뒤 붙여줌,, 무한 루프 */
        slidesPerView: 3,
        spaceBetween: 43,
        pagination: {
            el: ".fraction",
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current">${current}</span>/<span class="total">${total}</span>
            `;
            },
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },

        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });

    // 하단 이미지 배너 끝 3개씩////////////

    /* @slideBanner, #slide1 , #slide2 */

    //   auto play
    $('.btn-autoplay').click(function () {


        // 통일시키기
        parentId = $(this).parents('.swiper').attr('id');


        if (parentId == 'slide1') {
            // alert('1');
            if ($(this).hasClass('active')) {
                const slideStart = slide1.autoplay.start();
            } else {
                const slideStop = slide1.autoplay.stop();
            }
        } else if (parentId == 'slide2') {
            if ($(this).hasClass('active')) {
                const slideStart = slide2.autoplay.start();
            } else {
                const slideStop = slide2.autoplay.stop();
            }
        } else if (parentId == 'slideBanner') {
            if ($(this).hasClass('active')) {
                const slideStart = slideBanner.autoplay.start();
            } else {
                const slideStop = slideBanner.autoplay.stop();
            }
        }

        if ($(this).hasClass('active')) { // 두번 클릭했을 때
            // slideBanner.autoplay.start();
            $(this).removeClass('active').attr('aria-label', '자동재생 정지');

        } else {
            // 첫 클릭
            // slideBanner.autoplay.stop();
            $(this).addClass('active').attr('aria-label', '자동재생 적용');
            // 만약에가 필요함..
        }

    })
    //   auto play 끝



    $('.sc-titleTab').click(function () {
        $(this).addClass('on').siblings().removeClass('on');

        target = $(this).data('target');
        $(target).addClass('active').siblings().removeClass('active');
    })



    // 관련 사이트 메뉴 //
    $('.sc-relate .rel-item').click(function (e) {
        e.preventDefault();

        isSup = $(this).siblings('.sub-wrap').length;

        // console.log(isSup);

        if(isSup){

            if($(this).hasClass('on')){
                $('.rel-item').removeClass('on');
                $('.sub-wrap').stop().slideUp();
            }else{
                $('.sub-wrap').stop().slideUp();
                $(this).siblings('.sub-wrap').stop().slideDown();
                $('.rel-item').removeClass('on');
                $(this).addClass('on')
            }


        }
    })

    // 탭으로 이동 열리기 닫히기,,,

    $('.sub-wrap .sub-item:first-child').keydown(function(e){
        if(e.keyCode === 9 && e.shiftKey){
            // 키코드 콘솔에 찍기
            $('.sub-wrap').stop().slideUp();
            $('.rel-item').removeClass('on');
        }
    })
    $('.sub-wrap .sub-item:last-child').keydown(function(e){
        if(e.keyCode === 9 && !e.shiftKey){
            $('.sub-wrap').stop().slideUp();
            $('.rel-item').removeClass('on');
        }
    })


})

// height 0보다 커졌을 때, 탑버튼 생김!!! 
// scrollTop 으로 올라가기
//jquery top 이동 검색해서 하기!!!!!