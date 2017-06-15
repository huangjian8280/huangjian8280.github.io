$(function(){
	    $(window).scroll(function ()
        {
        var st = $(this).scrollTop();
        if(st>100){
            $(".head").addClass("fixd");
            $(".head img").css({"height":"45px"});
            $(".word").css({"marginTop":"10px"})
        }else{
              $(".head").removeClass("fixd");
              $(".head img").css({"height":"auto"});
              $(".word").css({"marginTop":"45px"})
        }
        });
        // 让字逐渐出现
        $(document).ready(function(){
        var arr = ["技","术","的","追","求","永","无","止","境"];
        var flag = 0;
        var timer = setInterval(function(){
            var str = "";
            for(var i = 0;i < flag;i++){
                str += arr[i];
            }
            $(".word").html(str);
            flag++;
            if(flag == arr.length+1){
                clearInterval(timer);
            }
        },600);
    });
})