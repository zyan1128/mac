$(function(){
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<730){
            $('.header1').css('display','none');
            $('.header2').css('display','block');
            $('.foot ul').css('display','none');
            $('.foot h3 span').css('display','block');
            $('.foot .row h3').css({'border-bottom':'1px solid #E3E3E3','border-top':'1px solid #E3E3E3','height':'38px','line-height':'38px'});
            $('.foot h3').click(function(){
                $(this).next().slideToggle(200);
            });
        }else{
            $('.header1').css('display','block');
            $('.header2').css('display','none');
            $('.foot ul').css('display','block');
            $('.foot h3 span').css('display','none');
            $('.foot .row h3').css({'border':'none'});
        }
    })
    $(window).resize();
    $('.menubtn').click(function(){
        $(".son").slideToggle(200);
        $(".son2").css('display','none');
    });
    $('.dai').click(function(){
        $(".son2").slideToggle(200);
        $(".son").css('display','none');
    });


    var num=0;
    var lunbo=function(){
        num++;
        if(num==$('.box .list').length-1){
            $('.box').animate({marginLeft:-num*100+'%'},function(){
                $('.box').css({marginLeft:0});
            });
            num=0;
        }else{
            $('.box').animate({marginLeft:-num*100+'%'});
        }
        $('.btnlist li').css({border:'none',background:'#999'});
        $('.btnlist li').eq(num).css({border:'1px solid #2097D2',background:'none'});
    };
    var time=setInterval(lunbo,4000);

    $('.btnlist li').click(function(){
        clearInterval(time);
        var index=$(this).index('.btnlist li');
        num=index;
        $('.btnlist li').css({border:'none',background:'#999'});
        $(this).css({border:'1px solid #2097D2',background:'none'});
        $('.box').animate({marginLeft:-num*100+'%'});
    });

    $('.btnlist li').hover(function(){
        $(this).css({border:'none',background:'#333'});
    },function(){
        $(this).css({border:'none',background:'#999'});
    });
    $('.box').mousedown(function(e){
        e.preventDefault();
    })


    var margin;
    touch.on(".box","dragstart",function(ev){
        margin=$(".box")[0].offsetLeft;
    });
    touch.on(".box","drag",function(ev){
        $(".box").css('marginLeft',margin+ ev.x);
    });
    touch.on('.box','dragend',function(ev){
        if(Math.abs(ev.x)>300|| ev.factor<5){
            if(ev.direction=='left'){
                num++;
                if(num==$('.box .list').length-1){
                    $('.box').animate({marginLeft:-num*100+'%'},function(){
                        $('.box').css({marginLeft:0});
                    });
                    num=0;
                }else{
                    $('.box').animate({marginLeft:-num*100+'%'});
                }
                $('.btnlist li').css({border:'none',background:'#999'});
                $('.btnlist li').eq(num).css({border:'1px solid #2097D2',background:'none'});
            }else if(ev.direction=='right'){
                num--;
                if(num==-1){
                    num=0;
                    $('.box').animate({marginLeft:-num*100+'%'});
                    return;
                }else{
                    $('.box').animate({marginLeft:-num*100+'%'});
                }
                $('.btnlist li').css({border:'none',background:'#999'});
                $('.btnlist li').eq(num).css({border:'1px solid #2097D2',background:'none'});
            }
        }else{
            $('.box').animate({marginLeft:-num*100+'%'});
        }

        console.log(ev.direction,ev.x,ev.y,ev.factor);
    });



})