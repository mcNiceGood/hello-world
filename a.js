//回到顶部的事件
	var _bannerTop=$(".banner-con-r-t").offset().top;
	$(window).scroll(function(){
		var _scrollTop=$(window).scrollTop();
		if(_scrollTop>=_bannerTop){
			$(".returnTop").fadeIn(500);
		}else{
			$(".returnTop").fadeOut(500);
		}
	})
	$(".returnTop").click(function(){
		$("body").animate({scrollTop:0},600);
		return false;
	})