$(function(){
	FastClick.attach(document.body);


/*tab切换*/
	$(".order-tap li").click(function(){
		
		var index=$(this).index();
		$(this).siblings().removeClass("order-tap-on");
		$(this).addClass("order-tap-on");
		$(".order-topcon").children("div").eq(index).show();
		$(".order-topcon").children("div").eq(index).siblings().hide();
	})
/*二级tab样式*/
	$(".order-tap-sub li").click(function(){
		$(this).siblings().find("a").removeClass("tap-sub-active");		
		$(this).find("a").addClass("tap-sub-active");
	})


/*input delete*/
$(".del-input").focus(function(){
	$(".del-input").next("i").remove();
	$(this).parent().append('<i></i>');
	var del=$(this).next("i");
	del.click(function(){
		$(this).parent().find(".del-input").val("");
		$(this).remove();
	});

})

/*输入框效果*/
// $("input").keydown(function(){
// 		$(this).css("color","#444444");
// })

	// mui.toast("重置密码成功");

	// mui.confirm('<div class="alert-icon alert-bankcard"></div><p>响应监管要求，保障投资人安全，您<br/>需要设置唯一提现卡，便于提现</p>',' ',["取消", "设置提现卡"],function(){
	// 	var $target = event.target;
	// 	if($target.innerHTML === "设置提现卡"){
	// 		console.log("设置提现卡");
	// 	}
	// },'div');

	/*mui.confirm('<div class="alert-icon alert-phone"></div><p>亲，请下载森强融APP后，才可以<br/>进行此项操作哦！</p>',' ',["取消", "免费下载"],function(){
		var $target = event.target;
		if($target.innerHTML === "免费下载"){
			console.log("免费下载");
		}
	},'div');*/

	/*mui.confirm('<div class="alert-icon icon-evelope"></div><p>您获取短信验证码过于频繁<br/>请明天再试哦！</p>',' ',["知道了"],function(){
		console.log("知道了");
	},'div');*/

	/*mui.confirm('<p class="alert-warnmsg">是否确认删除图片？</p>',' ',['取消','确认删除'],function(){
		var $target = event.target;
		if($target.innerHTML === "确认删除"){
			console.log("确认删除");
		}
	},'div');*/

	/*mui.confirm('<p class="alert-warnmsg">是否确认抢单？</p>',' ',['取消','确认抢单'],function(){
		var $target = event.target;
		if($target.innerHTML === "确认抢单"){
			console.log("确认抢单");
		}
	},'div');*/

	/*mui.confirm('<p class="alert-warnmsg">确定退出登录？</p>',' ',['取消','退出'],function(){
		var $target = event.target;
		if($target.innerHTML === "退出"){
			console.log("退出");
		}
	},'div');*/

	/*mui.confirm('<p class="alert-warnmsg">我们将发送验证码短消息至<br/>186 1021 4207</p>',' ',['取消','退出'],function(){
		var $target = event.target;
		if($target.innerHTML === "退出"){
			console.log("退出");
		}
	},'div');*/

	/*mui.confirm('<div class="alert-msgcode"><div class="alert-msgcode-title">请输入图形验证码</div><div class="alert-msgcode-inputwraper"><input type="text" placeholder="请输入图形中的字符" id="alertMsgCode"/><span class="imgcode">1321</span></div><div class="msgcode-errer"><i class="exclamation-icon"></i>图形验证码不能为空</div></div>',' ',['取消','退出'],function(){
		var $target = event.target;
		if($target.innerHTML === "退出"){
			console.log("退出");
		}
	},'div');*/
});


/*获取短信倒计时*/
$(".mobile-getyzm").bind("click", function(){
	$(this).hide();
	$(".mobile-gettime").show()
	timer();
})
var timers=59;
var timer1;
	
function timer(){
		timer1 = setInterval("getCode()",1000);
	}

	function getCode(){
		if(timers<10){
			$("#login-Countdown").html("0"+(timers--));
		}else{
			$("#login-Countdown").html(timers--);
		}
		if(timers==-1){
			$("#login-Countdown").html(60);
			$(".mobile-gettime").hide()
			$(".mobile-getyzm").text("重新获取").show();
			timers=59
			clearInterval(timer1);
		}
	}



/*底部锁定效果*/
$("#fixedBottom .btmbox").click(function(){
	var index=$(this).index();
	$(this).find('span').css("color","#0ea3f0;");
	$(this).find('.btmIcon').removeClass('btmIcon'+index).addClass('btmIcon'+index+'-'+index);
	var s=$("#fixedBottom .btmbox").length;
})