$(function(){
	//login-code触发按钮显示
	$("#login-yzm").on("keyup",function(){
		var yzm=$(this).val();
		if(yzm.length==6){
			$(".login-btn").addClass("login-active");
		}
		else{
			$(".login-btn").removeClass("login-active");
		}
	})

	//login-pwd触发按钮显示
	$("#login-pwd").on("keyup",function(){
		var pwd=$(this).val();
		if(pwd.length>=6&&pwd.length<=20){
			$(".login-btn").addClass("login-active");
		}
		else{
			$(".login-btn").removeClass("login-active");
		}
	})

	//register-step1触发按钮
	$("#phone").on("keyup",function(){
		var phone=$(this).val();
		if(phone.length==11){
			$(".login-btn").addClass("login-active");
		}
		else{
			$(".login-btn").removeClass("login-active");
		}
	})

	//register-step2触发按钮
	$("#reg-pwd").on("keyup",function(){
		var pwd=$(this).val();
		var yzm=$("#reg-yzm").val();
		if(pwd.length>=6&&pwd.length<=20&&yzm.length==6){
			$(".login-btn").addClass("login-active");
		}
		else{
			$(".login-btn").removeClass("login-active");
		}
	})

	$("#reg-yzm").on("keyup",function(){
		var yzm=$(this).val();
		var pwd=$("#reg-pwd").val();

		if(yzm.length==6&&pwd.length>=6&&pwd.length<=20){
			$(".login-btn").addClass("login-active");
		}
		else{
			$(".login-btn").removeClass("login-active");
		}
	})

	//login-code 密码显示隐藏
	$(".eye-white").on("click",function(){
		if ($(".login-psd input").attr("type") == "password") {
	        $(".login-psd input").attr("type", "text");
	        $(this).removeClass('eye-close-white').addClass('eye-open-white');
		}else if($(".login-psd input").attr("type") == "text"){
	        $(".login-psd input").attr("type", "password");
	        $(this).removeClass("eye-open-white").addClass("eye-close-white")
	    }
	})

	//动态添加删除按钮
	$("#phone").on("keydown",function(e){
		var flag=$(this).val()==null||$(this).val()=="";
		var iboolen=$(this).parent().find("i");
		var k=e.keyCode;

		if(flag&&iboolen.length==0&&k!=8){
			$(this).after('<i></i>');
		}
		if($(this).val().length==1&&iboolen.length==1&&k==8){
			$(".login-del i").remove();
		}
		$(".login-del i").click(function(){
			$(this).remove();
			$("#phone").val("");
			$(".login-btn").removeClass("login-active");
		})
	})



	$("#reg-yzm").on("keydown",function(e){
			var flag=$(this).val()==null||$(this).val()=="";
			var iboolen=$(this).parent().find("i");
			var k=e.keyCode;

			if(flag&&iboolen.length==0&&k!=8){
				$(this).after('<i></i>');
			}
			if($(this).val().length==1&&iboolen.length==1&&k==8){
				$(".verification-code i").remove();
			}
			$(".verification-code i").click(function(){
				$(this).remove();
				$("#reg-yzm").val("");
				$(".login-btn").removeClass("login-active");
			})
	})

	$("#login-yzm").on("keydown",function(e){
			var flag=$(this).val()==null||$(this).val()=="";
			var iboolen=$(this).parent().find("i");
			var k=e.keyCode;

			if(flag&&iboolen.length==0&&k!=8){
				$(this).after('<i></i>');
			}
			if($(this).val().length==1&&iboolen.length==1&&k==8){
				$(".verification-code i").remove();
			}
		$(".verification-code i").click(function(){
			$(this).remove();
			$("#login-yzm").val("");
			$(".login-btn").removeClass("login-active");
		})
	})

	$("#login-pwd").on("keydown",function(e){
			var flag=$(this).val()==null||$(this).val()=="";
			var iboolen=$(this).parent().find("i");
			var k=e.keyCode;

			if(flag&&iboolen.length==0&&k!=8){
				$(this).after('<i></i>');
			}
			if($(this).val().length==1&&iboolen.length==1&&k==8){
				$(".login-psd i").remove();
			}
		$(".login-psd i").click(function(){
			$(this).remove();
			$("#login-pwd").val("");
			$(".login-btn").removeClass("login-active");
		})
	})
	
	
	mui.toast("重置密码成功");



		// $(function(){
		// 	$('.pop-message').animate({
  //               top:'10%',
  //               opacity:1,
  //           }, 2000, 'ease-in-out',function (){
		// 		$(this).animate({
	 //                top:'0',
	 //                opacity:0,
	 //            }, 2000, 'ease-out-in')
		// 	})
		// })	
	
//	-----------------手机号3 4 4 
	// $("#phone").keypress(function(){
	// 	var phone = $(this).val();
	// 	if(phone.length==3||phone.length==8){
	// 		$(this).val(phone+" ");
	// 	}
	// 	$("#asd").html(phone.length);
	// });
	

	
//	------------点击登录验证手机号正则
	// $(".btn1").on("click",function(){
	// 	var phone = $("#phone").val();
	// 	if(!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(phone.replace(/\s/g,""))){
	// 		  alert('手机号码有误');
	// 		  return false;
	// 		}
		
	// })
	


//-------------------中间四位手机号变为*-----------开始
//  
//    // Firefox, Google Chrome, Opera, Safari, Internet Explorer from version 9
//      function OnInput (event) {
//          alert ("The new content: " + event.target.value);
//		var phone = $("#phone").val();
	//  var mphone =phone.substr(3,4);
	//  var lphone = phone.replace(mphone,"****");
	//  $("#phone").val(lphone);
//      }
//  // Internet Explorer
//      function OnPropChanged (event) {
//          if (event.propertyName.toLowerCase () == "value") {
//              alert ("The new content: " + event.srcElement.value);
//          }
//      }

	// $("#phone").focusout(function () { 
	// 	$("#phone").val($("#phone").val().substring(0, 3) + "****" + $("#phone").val().substring(7, 11));
	// });
	
//-------------------中间四位手机号变为*-----------结束
	

	
});



