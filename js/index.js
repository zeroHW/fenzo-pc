$(function() {
	jQuery(".slideBox").slide({
		mainCell: ".bd ul",
		effect: "leftLoop",
		autoPlay: true
	});
	jQuery(".banner").slide({
		mainCell: ".bd ul",
		effect: "leftLoop",
		autoPlay: true
	});
	jQuery(".slideBox1").slide({
		mainCell: ".bd ul",
		effect: "leftLoop",
		autoPlay: true
	});
	jQuery(".slideBox3").slide({
		mainCell: ".bd ul",
		effect: "leftLoop",
		autoPlay: true
	});
	//获取屏幕宽度，赋值给三角形的border-width,在缩放时改变其宽度
	getTriangleWidth();
	window.onresize = function() {
		getTriangleWidth();
	}
	function getTriangleWidth() {
		var width = $(window).width()
		$('.back_triangle').css('border-left-width', width);
		$('.back_triangle_up').css('border-right-width', width);
	}
	//技术咨询产品研发运维测试部分的小图标居中显示
	for (var i = 0; i < $('.service_cont ul img').length; i++) {
		var width_img = parseInt($('.service_cont ul img').eq(i).attr('width')) / 2;
		var height_img = parseInt($('.service_cont ul img').eq(i).attr('height')) / 2;
		$('.service_cont ul img').eq(i).css({
			'margin-left': -width_img,
			'margin-top': -height_img
		});
	}
	//首页案例白色部分效果变化
	$('.cases_cont .bd li a').mouseover(function() {
		$(this).children('h3').stop().animate({
			height: '50px'
		}, 200);
	});
	$('.cases_cont .bd li a').mouseout(function() {
		$(this).children('h3').stop().animate({
			height: '0px'
		}, 200);
	});
	//底部联系我们去掉样式和textarea的效果
	var input_len = $('.footer .contact_fr input[type=text]').length;
	for (var i = 0; i < input_len; i++) {
		if ((i + 1) % 2 == 0) {
			$('.footer .contact_fr input[type=text]').eq(i).css('margin-right', '0');;
		}
	}
	$('.footer .contact_fr form div').click(function(event) {
		var evt = event || window.event;
		$(this).css('box-shadow', '0px 0px 1px #fff inset');
		evt.stopPropagation();
	});
	$(document).click(function() {
		$('.footer .contact_fr form div').css('box-shadow', 'none');
	});
	//案例精选页第5,6宽度变换
	$('.choice_cont ul li').eq(4).css('width','635px');
	$('.choice_cont ul li').eq(5).css('height','635px');
	//底部滑过小图标微信出现二维码
	$('.scan_code').mouseover(function() {
		$('.er_code').fadeIn();
		$(this).attr('src','images/weixin_2.png');
	})
	$('.scan_code').mouseout(function() {
		$('.er_code').fadeOut();
		$(this).attr('src','images/weixin_1.png');
	})
	$('.scan_code1').mouseover(function() {
		$('.er_code').fadeIn();
	})
	$('.scan_code1').mouseout(function() {
		$('.er_code').fadeOut();
	})
	$('.in_icon').mouseover(function() {
		$(this).attr('src','images/in_2.png');
	})
	$('.in_icon').mouseout(function() {
		$(this).attr('src','images/in_1.png');
	})
	$('.sina_icon').mouseover(function() {
		$(this).attr('src','images/sina_2.png');
	})
	$('.sina_icon').mouseout(function() {
		$('.er_code').fadeOut();
		$(this).attr('src','images/sina_1.png');
	})
	//页脚logo更换
	$('.logo_bottom img').mouseover(function(){
		$(this).attr('src','images/Fenzo logo2-PC.png')
	})
	$('.logo_bottom img').mouseout(function(){
		$(this).attr('src','images/Fenzo logo1-PC.png')
	})
	//发送消息成功后提示信息,之后重新刷新页面
	$('#send_message').click(function(){
		$('.message_prompt').fadeIn(1000);
		setTimeout(function(){
			$('.message_prompt').fadeOut(1000);
		},1500);
		window.location.href();
	})
	//点击变换背景颜色
	var n=0;
	$('#change_color').on('click',function(){
		var $line_top = '<span class="line line_top"></span>';
		var $line_bottom = '<span class="line line_bottom"></span>';
		var $line_left = '<span class="line line_left"></span>';
		var $line_right = '<span class="line line_right"></span>';
		$(this).children('div').hide();
		$(this).append($line_top, $line_bottom, $line_left, $line_right);
		var wd = $(this).outerWidth(true);
		var hg = $(this).height();
		var time = 1000;
		$(this).find(".line_top").css({left: -wd,top: 0,width: wd,height: 2,opacity: 0}).animate({
			left: 0,opacity: 1
		}, time);
		$(this).find(".line_bottom").css({
			left: wd,
			bottom: 0,
			width: wd,
			height: 2,
			opacity: 0
		}).animate({
			left: 0,
			opacity: 1
		}, time);
		$(this).find(".line_right").css({
			right: 0,
			top: -hg,
			width: 2,
			height: hg,
			opacity: 0
		}).animate({
			top: 0,
			opacity: 1
		}, time);
		$(this).find(".line_left").css({
			left: 0,
			top: -hg,
			width: 2,
			height: hg,
			opacity: 0
		}).animate({
			top: 0,
			opacity: 1
		}, time);
		//文字和背景变换
		var Arraycolor=new Array("url(temp/banner_1.png)","url(images/anli.png)","url(temp/banner.png)","url(temp/service_circle.png)");
		var Arrayword=new Array("产品迭代2","产品迭代3","产品迭代4","产品迭代");
		if (n==(Arraycolor.length)) n=0;
		n++;
		$('.service_circle').css({'background':Arraycolor[n-1],'backgroundSize':'100% 100%'});
		$(this).find('p').text(Arrayword[n-1]);
		showHide();
	});
	//删除span
	function showHide(){
		setTimeout(function(){
			$('#change_color').find('div').show();
			$('#change_color').find('.line').remove();
		},800)
	}
	//弹性回到顶部
	function Buffe(obj){
		var timer = null;
		timer = setInterval(function() {
			var iSpeed = document[obj].scrollTop / 5;
			if (document[obj].scrollTop == 0) {
				clearInterval(timer);
			} else {
				document[obj].scrollTop = document[obj].scrollTop - iSpeed;
			}
		}, 30);
	}
	window.onload = function() {
		oBtn = document.getElementById('to_top');
		oBtn.onclick = function() {
			if (document.documentElement.scrollTop) {
				Buffe('documentElement');
			} else {
				Buffe('body');
			}
		}
	};	
})