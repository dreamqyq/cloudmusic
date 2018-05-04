//返回顶部组件
$.fn.UiBackTop=function () {
    var ui= $(this),
        topBtn=$('<a class="ui-top" href="#7"></a>'),
        winHeight=$(window).height();
    ui.append(topBtn);
    $(window).scroll(function () {
        var scrollHeight=$(window).scrollTop();
        if(scrollHeight>450){
            topBtn.show();
        }else {
            topBtn.hide();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            'scrollTop':0
        },300)
    })
}

// 轮播图组件
$.fn.UiSlider = function(){

    var ui = $(this);

    var wrap = $('.ui-slider-wrap');

    var btn_prev = $('.ui-slider-arrow .left',ui);
    var btn_next = $('.ui-slider-arrow .right',ui);

    var items  = $('.ui-slider-wrap .item',ui);
    var tips  =$('.ui-slider-process .item',ui);

    //	预定义

    var current = 0;
    var size = items.size();
    var width = items.eq(0).width();
    var enableAuto = true;

    //	设置自动滚动感应（如果鼠标在 wrap 中，不要自动滚动）
    ui
        .on('mouseover',function(){
            enableAuto = false;
        })
        .on('mouseout',function(){
            enableAuto = true;
        })


    //	具体操作
    wrap
        .on('move_prev',function(){
            if(current<=0){
                current = size;
            }
            current = current - 1 ;
            wrap.triggerHandler('move_to',current);
        })
        .on('move_next',function(){
            if( current >= size-1){
                current = -1;
            }
            current = current + 1 ;
            wrap.triggerHandler('move_to',current);
        })
        .on('move_to',function(evt,index){
            wrap.css('left',index*width*-1);
            tips.removeClass('item_focus').eq(index).addClass('item_focus');
        })
        .on('auto_move',function(){

            setInterval(function(){
                enableAuto && wrap.triggerHandler('move_next');
            },2000);

        })
        .triggerHandler('auto_move');

    //	事件
    btn_prev.on('click',function(){
        wrap.triggerHandler('move_prev');
    });
    btn_next.on('click',function(){
        wrap.triggerHandler('move_next');
    });
    tips.on('click',function(){
        var index = $(this).index();
        wrap.triggerHandler('move_to',index);
    })

}

$(function(){
    $('body').UiBackTop();
    $('.ui-slider').UiSlider();
})