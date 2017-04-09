$(function() {
	$(".order-borrwer-delicon").click(function(){
		$(this).parent(".order-borrower-row").addClass("order-row-showdel").off('click');
		return false;
	});

    $(".order-borrower-row").on('click',orderRowHandle);
    $(".order-borrower").on("click swipeRight swipeLeft",".order-row-showdel", function(){
    	var $this = $(this);
    	$this.removeClass("order-row-showdel");
    	$this.on('click',orderRowHandle);
    	return false;
    });

    $(".order-borrower-del").click(function(){
    	alert("delete");
    	return false;
    });
})

function orderRowHandle(){
	alert('tiaozhuan');
	return false;
}