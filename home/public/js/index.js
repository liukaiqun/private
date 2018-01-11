
$(function(){
//顶部小三角滑动菜单效果
$('.jiuxian').hover(
	function(){
	//方法1
	// $(this).find('.myjiu').css({'background-position':'-47px -186px','width':'7px','height':'3px','background-repeat':'no-repeat','position':'relative','top':'-3px'});
	
	//方法2
	$(this).find('.myjiu').css({'transform':'rotate(180deg)','top':'1px'})
	$(this).find('.jiuxiantop').css('background','#fff');
	$(this).find('.mydropdown').show();
},function(){
	//方法1
	// $(this).find('.myjiu').css({'background-position':'-99px 3px','width':'10px','height':'10px','background-repeat':'no-repeat','position':'relative','top':'2px'});
	
	//方法2
	$(this).find('.myjiu').css({'transform':'rotate(0deg)'})
	$(this).find('.myjiu').css({'background-position':'-99px 3px'});
	$(this).find('.jiuxiantop').css('background','#f2f2f2');
	$(this).find('.mydropdown').hide();
})


//左侧导航滑动
$('.div3 .left-menu').mouseenter(function(){
	$(this).css({'background':'#f1f1f1'});
	$(this).find('span').css({'color':'#333'})
	// $('.div3 li').not($(this)).css({'background':'#b61d1d'})

	$(this).find('.right').show();
	$('.right').not($(this).find('.right')).hide();
})

$('.div3 .left-menu').mouseleave(function(){
	$(this).find('.right').hide();
	$(this).css({'background':'#fff'});
	$(this).find('span').css({'color':'#333'})

})

//幻灯片
function pptSlider1(){
	$(".mainppt .paging a").show();
	$(".mainppt .paging a:first").addClass("active");
	var num = $(".mainppt .paging a:first").attr("rel");
	var arr=[1,2,3,4,5,6,7,8,9];

	var imgs=arr.slice((num-1)*3,num*3);
	//imgs=[1,2,3]

	for(var i=0;i<imgs.length;i++){

		$('.'+imgs[i]).show();

	}


	var imageWidth = $(".mainppt .window").width();
	var imageSum = $(".mainppt .image_reel img").size();
	var imageReelWidth = imageWidth * imageSum;

	$(".mainppt .image_reel").css({"width":imageReelWidth});


	var rotate = function(){
		var triggerID = $active.attr("rel")-1;
		var image_reelPosition = imageWidth * triggerID;
		
		$(".mainppt .paging a").removeClass("active");
		$active.addClass("active");
		
		
		$(".mainppt .image_reel").animate({
			left:-image_reelPosition
		},500);

		act=$('.mainppt .paging a.active').attr('rel');

		imgs=arr.slice((act-1)*3,act*3);
		for(var i=0;i<imgs.length;i++){
			$('.'+imgs[i]).show();
		}
	}


	var rotateSwitch = function(){
		play = setInterval(function(){
			$('.mainppt .img').hide();
			$active = $(".mainppt .paging a.active").next();
			if($active.length == 0){
				$active = $(".mainppt .paging a:first")
			}
			rotate();
		},5000)
	}
	rotateSwitch();


	$(".mainppt .image_reel a").hover(function(){
			clearInterval(play);
		},function(){
			rotateSwitch();
	})


	$(".mainppt .paging a").click(function(){
		$('.mainppt .img').hide();
		$active = $(this);

		var act=$(this).attr('rel');

			var imgs=arr.slice((act-1)*3,act*3);
			for(var i=0;i<imgs.length;i++){
				$('.'+imgs[i]).show();
			}

		clearInterval(play);
		rotate();
		rotateSwitch();
		return false;
	})
};
pptSlider1();


//疯狂抢购标签页效果
$(".indexTabBoxBottom .indexTabCon").first().show();
$(".indexTabBoxTop ul li").mouseenter(function(){
	$(this).addClass("active");
	$(".indexTabBoxTop ul li").not($(this)).removeClass("active");
	idx = $(this).index(".indexTabBoxTop ul li");

	// $(".indexTabBoxBottom .indexTabCon").not().hide();
	$(".indexTabBoxBottom .indexTabCon").eq(idx).show();
	$(".indexTabBoxBottom .indexTabCon").not($(".indexTabBoxBottom .indexTabCon").eq(idx)).hide();

});

$(".indexTabRight .indexTabNew .indexTabNewCon").first().show();
$(".indexTabRight .indexTabNew .indexTabNewNav li").mouseenter(function(){
	$(this).addClass("active");
	$(".indexTabRight .indexTabNew .indexTabNewNav li").not($(this)).removeClass("active");
	idx = $(this).index(".indexTabRight .indexTabNew .indexTabNewNav li");

	// $(".indexTabBoxBottom .indexTabCon").not().hide();
	$(".indexTabRight .indexTabNew .indexTabNewCon").eq(idx).show();
	$(".indexTabRight .indexTabNew .indexTabNewCon").not($(".indexTabRight .indexTabNew .indexTabNewCon").eq(idx)).hide();

})


//疯狂抢购右侧上方第一个幻灯片
function pptSlider2(){
	$(".indexTuanbox .paging a").show();
	$(".indexTuanbox .carousel .paging a:first").addClass("active");
	
	
	var imageWidth = $(".indexTuanbox .window").width();
	var imageSum = $(".indexTuanbox .image_reel img").size();
	var imageReelWidth = imageWidth * imageSum;
	
	$(".indexTuanbox .image_reel").css({"width":imageReelWidth});
	
	
	var rotate = function(){
		var triggerID = $active2.attr("rel")-1;
		var image_reelPosition = imageWidth * triggerID;
		
		$(".indexTuanbox .paging a").removeClass("active");
		$active2.addClass("active");
		
		
		$(".indexTuanbox .image_reel").animate({
			left:-image_reelPosition
		},500);
	}
	
	
	
	var rotateSwitch = function(){
		play2 = setInterval(function(){
			$active2 = $(".indexTuanbox .paging a.active").next();
			if($active2.length == 0){
				$active2 = $(".indexTuanbox .paging a:first")
			}
			rotate();
		},3000)
	}
	rotateSwitch();
	
	
	$(".indexTuanbox .image_reel a").hover(function(){
			clearInterval(play2);
		},function(){
			rotateSwitch();
	})
	
	
	$(".indexTuanbox .paging a").click(function(){
		$active2 = $(this);
		clearInterval(play2);
		rotate();
		rotateSwitch();
		return false;
	})
}

pptSlider2();

//疯狂抢购右侧上方第二个幻灯片
function pptSlider3(){
	$(".indexAdFocus .paging a").show();
	$(".indexAdFocus .carousel .paging a:first").addClass("active");
	
	
	var imageWidth = $(".indexAdFocus .window").width();
	var imageSum = $(".indexAdFocus .image_reel img").size();
	var imageReelWidth = imageWidth * imageSum;
	
	$(".indexAdFocus .image_reel").css({"width":imageReelWidth});
	
	
	var rotate = function(){
		var triggerID = $active3.attr("rel")-1;
		var image_reelPosition = imageWidth * triggerID;
		
		$(".indexAdFocus .paging a").removeClass("active");
		$active3.addClass("active");
		
		
		$(".indexAdFocus .image_reel").animate({
			left:-image_reelPosition
		},500);
	}
	
	
	
	var rotateSwitch = function(){
		play3 = setInterval(function(){
			$active3 = $(".indexAdFocus .paging a.active").next();
			if($active3.length == 0){
				$active3 = $(".indexAdFocus .paging a:first")
			}
			rotate();
		},2000)
	}
	rotateSwitch();
	
	
	$(".indexAdFocus .image_reel a").hover(function(){
			clearInterval(play3);
		},function(){
			rotateSwitch();
	})
	
	
	$(".indexAdFocus .paging a").click(function(){
		$active3 = $(this);
		clearInterval(play3);
		rotate();
		rotateSwitch();
		return false;
	})
}

pptSlider3();



//优惠推荐下方滚动效果
s=0;
v=-1200;

$(".raceRight").click(function(){
	s+=v;
	
	if(s<=-2400){
		s=-2400;
	}

	//写法1
	// n=s/v;
	// $(".indexRaceBox .titleBox .rightNavBox span").eq(n).addClass("active");
	// $(".indexRaceBox .titleBox .rightNavBox span").not($(".indexRaceBox .titleBox .rightNavBox span").eq(n)).removeClass("active");


	//设置指示灯(写法2)
	setLight();

	$(".receBoxs").stop().animate({
		"left":s+"px"
	},500);
})

$(".raceLeft").click(function(){
	s-=v;
	if(s>=0){
		s=0;
	}
	
	//写法1
	
	// n=s/v;
	// $(".indexRaceBox .titleBox .rightNavBox span").eq(n).addClass("active");
	// $(".indexRaceBox .titleBox .rightNavBox span").not($(".indexRaceBox .titleBox .rightNavBox span").eq(n)).removeClass("active");

	//设置指示灯(写法2)
	setLight();

	$(".receBoxs").stop().animate({
		"left":s+"px"
	},500);
	
})

//优惠推荐右上角指示灯
$(".indexRaceBox .titleBox .rightNavBox span").click(function(){
	//第一种方法
	//$(this).addClass("active").siblings(".indexRaceBox .titleBox .rightNavBox span").removeClass("active");
	
	
	//第二种方法
	$(this).addClass("active");
	$(".indexRaceBox .titleBox .rightNavBox span").not($(this)).removeClass("active");
	idx=$(this).index(".indexRaceBox .titleBox .rightNavBox span");

	s=idx*v;
	$(".receBoxs").stop().animate({
		"left":s+"px"
	},500);
})

//控制指示灯
function setLight(){
	n=s/v;
	$(".indexRaceBox .titleBox .rightNavBox span").eq(n).addClass("active");
	$(".indexRaceBox .titleBox .rightNavBox span").not($(".indexRaceBox .titleBox .rightNavBox span").eq(n)).removeClass("active");
}



//白酒馆幻灯片
function pptSlider4(){
	$(".whiteWineJs .paging a").show();
	$(".whiteWineJs .carousel .paging a:first").addClass("active");
	
	
	var imageWidth = $(".whiteWineJs .window").width();
	var imageSum = $(".whiteWineJs .image_reel img").size();
	var imageReelWidth = imageWidth * imageSum;
	
	$(".whiteWineJs .image_reel").css({"width":imageReelWidth});
	
	
	var rotate = function(){
		var triggerID = $active4.attr("rel")-1;
		var image_reelPosition = imageWidth * triggerID;
		
		$(".whiteWineJs .paging a").removeClass("active");
		$active4.addClass("active");
		
		
		$(".whiteWineJs .image_reel").animate({
			left:-image_reelPosition
		},500);
	}
	
	
	
	var rotateSwitch = function(){
		play4 = setInterval(function(){
			$active4 = $(".whiteWineJs .paging a.active").next();
			if($active4.length == 0){
				$active4 = $(".whiteWineJs .paging a:first")
			}
			rotate();
		},2000)
	}
	rotateSwitch();
	
	
	$(".whiteWineJs .image_reel a").hover(function(){
			clearInterval(play4);
		},function(){
			rotateSwitch();
	})
	
	
	$(".whiteWineJs .paging a").click(function(){
		$active4 = $(this);
		clearInterval(play4);
		rotate();
		rotateSwitch();
		return false;
	})
}

pptSlider4();



//葡萄酒馆幻灯片
function pptSlider5(){
	$(".redWineJs .paging a").show();
	$(".redWineJs .carousel .paging a:first").addClass("active");
	
	
	var imageWidth = $(".redWineJs .window").width();
	var imageSum = $(".redWineJs .image_reel img").size();
	var imageReelWidth = imageWidth * imageSum;
	
	$(".redWineJs .image_reel").css({"width":imageReelWidth});
	
	
	var rotate = function(){
		var triggerID = $active5.attr("rel")-1;
		var image_reelPosition = imageWidth * triggerID;
		
		$(".redWineJs .paging a").removeClass("active");
		$active5.addClass("active");
		
		
		$(".redWineJs .image_reel").animate({
			left:-image_reelPosition
		},500);
	}
	
	
	
	var rotateSwitch = function(){
		play5 = setInterval(function(){
			$active5 = $(".redWineJs .paging a.active").next();
			if($active5.length == 0){
				$active5 = $(".redWineJs .paging a:first")
			}
			rotate();
		},2000)
	}
	rotateSwitch();
	
	
	$(".redWineJs .image_reel a").hover(function(){
			clearInterval(play5);
		},function(){
			rotateSwitch();
	})
	
	
	$(".redWineJs .paging a").click(function(){
		$active5 = $(this);
		clearInterval(play5);
		rotate();
		rotateSwitch();
		return false;
	})
}

pptSlider5();


//洋酒馆幻灯片
function pptSlider6(){
	$(".foreignWineJs .paging a").show();
	$(".foreignWineJs .carousel .paging a:first").addClass("active");
	
	
	var imageWidth = $(".foreignWineJs .window").width();
	var imageSum = $(".foreignWineJs .image_reel img").size();
	var imageReelWidth = imageWidth * imageSum;
	
	$(".foreignWineJs .image_reel").css({"width":imageReelWidth});
	
	
	var rotate = function(){
		var triggerID = $active6.attr("rel")-1;
		var image_reelPosition = imageWidth * triggerID;
		
		$(".foreignWineJs .paging a").removeClass("active");
		$active6.addClass("active");
		
		
		$(".foreignWineJs .image_reel").animate({
			left:-image_reelPosition
		},500);
	}
	
	
	
	var rotateSwitch = function(){
		play6 = setInterval(function(){
			$active6 = $(".foreignWineJs .paging a.active").next();
			if($active6.length == 0){
				$active6 = $(".foreignWineJs .paging a:first")
			}
			rotate();
		},2000)
	}
	rotateSwitch();
	
	
	$(".foreignWineJs .image_reel a").hover(function(){
			clearInterval(play6);
		},function(){
			rotateSwitch();
	})
	
	
	$(".foreignWineJs .paging a").click(function(){
		$active6 = $(this);
		clearInterval(play6);
		rotate();
		rotateSwitch();
		return false;
	})
}

pptSlider6();


//养生酒&黄酒&啤酒幻灯片
function pptSlider7(){
	$(".HealthWineJs .paging a").show();
	$(".HealthWineJs .carousel .paging a:first").addClass("active");
	
	
	var imageWidth = $(".HealthWineJs .window").width();
	var imageSum = $(".HealthWineJs .image_reel img").size();
	var imageReelWidth = imageWidth * imageSum;
	
	$(".HealthWineJs .image_reel").css({"width":imageReelWidth});
	
	
	var rotate = function(){
		var triggerID = $active7.attr("rel")-1;
		var image_reelPosition = imageWidth * triggerID;
		
		$(".HealthWineJs .paging a").removeClass("active");
		$active7.addClass("active");
		
		
		$(".HealthWineJs .image_reel").animate({
			left:-image_reelPosition
		},500);
	}
	
	
	
	var rotateSwitch = function(){
		play7 = setInterval(function(){
			$active7 = $(".HealthWineJs .paging a.active").next();
			if($active7.length == 0){
				$active7 = $(".HealthWineJs .paging a:first")
			}
			rotate();
		},2000)
	}
	rotateSwitch();
	
	
	$(".HealthWineJs .image_reel a").hover(function(){
			clearInterval(play7);
		},function(){
			rotateSwitch();
	})
	
	
	$(".HealthWineJs .paging a").click(function(){
		$active7 = $(this);
		clearInterval(play7);
		rotate();
		rotateSwitch();
		return false;
	})
}

pptSlider7();


//食品幻灯片
function pptSlider8(){
	$(".foodAndWineJs .paging a").show();
	$(".foodAndWineJs .carousel .paging a:first").addClass("active");
	
	
	var imageWidth = $(".foodAndWineJs .window").width();
	var imageSum = $(".foodAndWineJs .image_reel img").size();
	var imageReelWidth = imageWidth * imageSum;
	
	$(".foodAndWineJs .image_reel").css({"width":imageReelWidth});
	
	
	var rotate = function(){
		var triggerID = $active8.attr("rel")-1;
		var image_reelPosition = imageWidth * triggerID;
		
		$(".foodAndWineJs .paging a").removeClass("active");
		$active8.addClass("active");
		
		
		$(".foodAndWineJs .image_reel").animate({
			left:-image_reelPosition
		},500);
	}
	
	
	
	var rotateSwitch = function(){
		play8 = setInterval(function(){
			$active8 = $(".foodAndWineJs .paging a.active").next();
			if($active8.length == 0){
				$active8 = $(".foodAndWineJs .paging a:first")
			}
			rotate();
		},2000)
	}
	rotateSwitch();
	
	
	$(".foodAndWineJs .image_reel a").hover(function(){
			clearInterval(play8);
		},function(){
			rotateSwitch();
	})
	
	
	$(".foodAndWineJs .paging a").click(function(){
		$active8 = $(this);
		clearInterval(play8);
		rotate();
		rotateSwitch();
		return false;
	})
}

pptSlider8();


// 官方推荐下方的下滑块
$(".contentThree .titleBox li").eq(0).css({"color":"#c00"});

$(".contentThree .titleBox li").mouseenter(function(){

	$(this).css({"color":"#c00"});
	$(".contentThree .titleBox li").not($(this)).css({"color":"#666"});

	left = $(this).position().left;
	
	$(".contentThree .titleSlider").stop().animate({
		"left":left+"px"
	},100)
	
})

//官方推荐中的品牌图标滑动效果

$(".contentThree .logoBox li img").hover(
	function(){

		$(this).stop().animate({
			"left":"-100px"
		},300)

	},
	function(){

		$(this).stop().animate({
			"left":"0px"
		},300)

	}
)

//官方推荐中的品牌图标标签页效果

$(".contentThree .logoBox .slider").eq(0).show();

$(".contentThree .titleBox li").mouseenter(function(){

	idx = $(this).index(".contentThree .titleBox li");

	$(".contentThree .logoBox .slider").eq(idx).show();

	$(".contentThree .logoBox .slider").not($(".contentThree .logoBox .slider").eq(idx)).hide();


})


//官方推荐中的第一套图标标签做有控制
$(".contentThree .controlRight").click(function(){
	$(".contentThree .logoBox .slider .one").animate({
		"left":"-1200px"
	},200)
})

$(".contentThree .controlLeft").click(function(){
	$(".contentThree .logoBox .slider .one").animate({
		"left":"0px"
	},200)
})


//回到顶部
sw = $(window).width();

$(".returnTop").css({"height":sw+"px"})

//整个窗口右侧我导航栏
$(".rightsbc1").mouseenter(function(){
	$(".rightsbc1").find(".returnTopIcon").css({"background-position":"-20px -163px"});
	$(".rightsbc1").find(".returnTopFont").css({"color":"#fff"});
	x = $(this).position().left+35;
	y = $(this).position().top;
	$(".sidebarUser").show().css({"top":y+"px","right":x+"px"});


})
$(".rightsbc1").mouseleave(function(){
	$(".sidebarUser").hide();
	$(".rightsbc1").find(".returnTopFont").css({"color":"#666"});
	$(".rightsbc1").find(".returnTopIcon").css({"background-position":"0px -163px"});
})

//整个窗口右侧收藏导航栏
$(".rightsbc2").mouseenter(function(){
	$(".rightsbc2").find(".returnTopIcon").css({"background-position":"-60px -163px"});
	$(".rightsbc2").find(".returnTopFont").css({"color":"#fff"});

	x = $(this).position().left+35;
	y = $(this).position().top+20;
	$(".sidebarUser2").show().css({"top":y+"px","right":x+"px"});
})
$(".rightsbc2").mouseleave(function(){
	$(".sidebarUser2").hide();
	$(".rightsbc2").find(".returnTopIcon").css({"background-position":"-40px -163px"});
	$(".rightsbc2").find(".returnTopFont").css({"color":"#fff"});
})


//整个窗口右侧购物车导航栏
$(".rightsbc3").mouseenter(function(){
	$(".rightsbc3").find(".returnTopIcon").css({"background-position":"-140px -163px"});
	$(".rightsbc3").find(".returnTopFont").css({"color":"#fff"});
})
$(".rightsbc3").mouseleave(function(){

	$(".rightsbc3").find(".returnTopIcon").css({"background-position":"-120px -163px"});
	$(".rightsbc3").find(".returnTopFont").css({"color":"#fff"});
})

//整个窗口右侧下方导航栏

//窗口右侧反馈
$(".returnTop .rightSidebarBot .fankui").mouseenter(function(){
	$(".returnTop .rightSidebarBot .fankui").find("i").css({"background-position":"3px -203px"});

	x = $(this).position().left+35;
	y = $(this).position().top;

	$(".fankui-left").show().css({"top":y+"px","right":x+"px"});
})
$(".returnTop .rightSidebarBot .fankui").mouseleave(function(){
	$(".returnTop .rightSidebarBot .fankui").find("i").css({"background-position":"3px -186px"});
	$(".fankui-left").hide();
})

//窗口右侧微信
$(".returnTop .rightSidebarBot .weixin").mouseenter(function(){
	$(".returnTop .rightSidebarBot .weixin").find("i").css({"background-position":"-19px -204px"});

	x = $(this).position().left+35;
	y = $(this).position().top;
	
	$(".weixin-left").show().css({"top":y+"px","right":x+"px"});
})
$(".returnTop .rightSidebarBot .weixin").mouseleave(function(){
	$(".returnTop .rightSidebarBot .weixin").find("i").css({"background-position":"-19px -186px"});

	$(".weixin-left").hide();
})


//窗口右侧返回顶部样式效果
$(".returnTop .rightSidebarBot .rtop").mouseenter(function(){
	$(".returnTop .rightSidebarBot .rtop").find("i").css({"background-position":"-40px -203px"});
})
$(".returnTop .rightSidebarBot .rtop").mouseleave(function(){
	$(".returnTop .rightSidebarBot .rtop").find("i").css({"background-position":"-40px -186px"});
})

//窗口右侧返回顶部
$(".returnTop .rightSidebarBot .rtop").click(function(){
	s = $(window).scrollTop();
	v = 50;

	sobj = setInterval(function(){
		s-=v;
		if(s<=0){
			s=0;
			clearInterval(sobj);
		}

		$(window).scrollTop(s);
	},10)

})




//左侧滚动监听

//返回顶部样式
$(".scrollLeft .floorBack").mouseenter(function(){
	$(this).find("i").css({"background-position":"-95px -190px"});
})
$(".scrollLeft .floorBack").mouseleave(function(){
	$(this).find("i").css({"background-position":"-74px -190px"});
})

//返回顶部效果
$(".scrollLeft .floorBack").click(function(){
	s = $(window).scrollTop();
	v = 50;

	sobj = setInterval(function(){
		s-=v;
		if(s<=0){
			s=0;
			clearInterval(sobj);
			$(".scrollLeft").hide();
		}

		$(window).scrollTop(s);
	},10)
})

//左侧第一层
floorOneName = $(".scrollLeft .floorOne").find("a").attr("name");
$(".scrollLeft .floorOne").find("a").html(floorOneName).css({"display":"block"});
$(".scrollLeft .floorOne").find("i").hide();

$(".scrollLeft .floorOne").mouseenter(function(){
	floorOneName2 = $(".scrollLeft .floorOne").find("a").attr("name2");
	
	$(this).find("a").html(floorOneName2).css({"display":"block"}).animate({
		"width":"70px"
	},500);

	$(this).find("i").hide();
})
$(".scrollLeft .floorOne").mouseleave(function(){
	
	$(this).find("a").animate({
		"width":"30px"
	},200,function(){
		$(this).hide();
		$(".scrollLeft .floorOne").find("i").show();
		myScroll();
	});
})

$(".scrollLeft .floorOne").click(function(){
	f = $(this).find("a").attr("name");
	t = $("#"+f).offset().top-200;
	$(window).scrollTop(t);
})

//左侧第二层
$(".scrollLeft .floorTwo").mouseenter(function(){

	floorOneName2 = $(".scrollLeft .floorTwo").find("a").attr("name2");
	
	$(this).find("a").html(floorOneName2).css({"display":"block"}).animate({
		"width":"90px"
	},500);

	$(this).find("i").hide();
})
$(".scrollLeft .floorTwo").mouseleave(function(){
	
	$(this).find("a").animate({
		"width":"30px"
	},200,function(){
		$(this).hide();
		$(".scrollLeft .floorTwo").find("i").show();
		myScroll();
	});
})

$(".scrollLeft .floorTwo").click(function(){
	f = $(this).find("a").attr("name");
	t = $("#"+f).offset().top-200;
	$(window).scrollTop(t);
})


//左侧第三层
$(".scrollLeft .floorThree").mouseenter(function(){
	
	floorOneName2 = $(".scrollLeft .floorThree").find("a").attr("name2");
	
	$(this).find("a").html(floorOneName2).css({"display":"block"}).animate({
		"width":"70px"
	},500);

	$(this).find("i").hide();
})
$(".scrollLeft .floorThree").mouseleave(function(){
	
	$(this).find("a").animate({
		"width":"30px"
	},200,function(){
		$(this).hide();
		$(".scrollLeft .floorThree").find("i").show();
		myScroll();
	});
})

$(".scrollLeft .floorThree").click(function(){
	f = $(this).find("a").attr("name");
	t = $("#"+f).offset().top-200;
	$(window).scrollTop(t);
})


//左侧第四层
$(".scrollLeft .floorFour").mouseenter(function(){
	
	floorOneName2 = $(".scrollLeft .floorFour").find("a").attr("name2");
	
	$(this).find("a").html(floorOneName2).css({"display":"block"}).animate({
		"width":"130px"
	},500);

	$(this).find("i").hide();
})
$(".scrollLeft .floorFour").mouseleave(function(){
	
	$(this).find("a").animate({
		"width":"30px"
	},200,function(){
		$(this).hide();
		$(".scrollLeft .floorFour").find("i").show();
		myScroll();
	});
})

$(".scrollLeft .floorFour").click(function(){
	f = $(this).find("a").attr("name");
	t = $("#"+f).offset().top-200;
	$(window).scrollTop(t);
})

//左侧第五层
$(".scrollLeft .floorFive").mouseenter(function(){
	
	floorOneName2 = $(".scrollLeft .floorFive").find("a").attr("name2");
	
	$(this).find("a").html(floorOneName2).css({"display":"block"}).animate({
		"width":"70px"
	},500);

	$(this).find("i").hide();
})
$(".scrollLeft .floorFive").mouseleave(function(){
	
	$(this).find("a").animate({
		"width":"30px"
	},200,function(){
		$(this).hide();
		$(".scrollLeft .floorFive").find("i").show();
		myScroll();
	});
})

$(".scrollLeft .floorFive").click(function(){
	f = $(this).find("a").attr("name");
	t = $("#"+f).offset().top-200;
	$(window).scrollTop(t);
})


//左侧滚动监听开始

$(window).scroll(function(){
	myScroll();
	
})







function myScroll(){
	st = $(window).scrollTop();

	firstTop = $(".comTitle .newIndexIcon").first().offset().top;
	if(st<firstTop){
		$(".scrollLeft").hide();
	}else{
		$(".comTitle .newIndexIcon").each(function(){
			ot = $(this).offset().top;

			if(st>=ot){
				$(".scrollLeft").show();

				fname = $(this).attr("id");

				$(".scrollLeft a[name="+fname+"]").html(fname).css({"display":"block"});
				$(".scrollLeft a[name="+fname+"]").next("i").hide();

				$(".scrollLeft .scrollLeftA").not($(".scrollLeft a[name="+fname+"]")).each(function(){
					fname2 = $(this).attr("name2");
					$(this).html(fname2).hide();
					$(this).next().show();
				})
			}
		})
	}
}



});
