$(function(){

    $('.sc-titleTab').click(function(){
        $(this).addClass('on').siblings().removeClass('on');

        target = $(this).data('target');
        $(target).addClass('active').siblings().removeClass('active');
    })



    // 관련 사이트 메뉴 //
    $('.sc-relate .rel-item').click(function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');

        $(this).find('.sub-wrap').stop().slideDown()
    })


})