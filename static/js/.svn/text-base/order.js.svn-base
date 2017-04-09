$(function(){
	/*mui('.mui-slider').slider({
		interval:3000
	});*/
	
	$("#mortgage-type").click(function(){
		mortgageType();
  	});
  	
  	$("#business-type").click(function(){
  		var obj=$("#mortgage-type").find('span').text();
		businessType(obj);
  	});
  	
  	$("#loan-type").click(function(){
		loanType();
  	});
  	
  	$("#loan-date").click(function(){
		loanDate();
  	});
  	
  	$("#invaild-reason").click(function(){
		invaildReason();
  	});
  	
  	
  	$("#deadline").click(function(){
  		deadLine();
  	});
  	
  	
  	var curDate= showCurDate();
  	$("#loan-date").find("span").text(curDate);
  	
  	$("#return-way").click(function(){
  		returnWay();
  	})
  	
  	$("#return-plan").click(function(){
  		returnPlan();
  	})
  	
  	
	$("#order-borrower-btn").click(function(){
		$("#order-borrower-msg").toggle();
		var txt=$(this).find("span").text();
			if(txt=="点击收起")
			{
				$(this).find("span").removeClass("btnup-icon").addClass("btndown-icon").text("点击展开");
			}
			else{
				$(this).find("span").removeClass("btndown-icon").addClass("btnup-icon").text("点击收起");
			}
	})
	
	$("#order-link-backbtn").click(function(){
		$(".order-link-backcon").toggle();
		var txt=$(this).find(".order-link-backtxt").text();
			if(txt=="点击关闭还款详情")
			{
				$(this).find("i").removeClass("backicon-up").addClass("backicon-down");
				$(this).find(".order-link-backtxt").text("点击查看还款详情");
				$(this).addClass("order-link-backbtn1");
			}
			else{
				$(this).find("i").removeClass("backicon-down").addClass("backicon-up");
				$(this).find(".order-link-backtxt").text("点击关闭还款详情");
				$(this).removeClass("order-link-backbtn1");
			}
	})
	
	
	$(".order-borrower-msg").find("input").keydown(function(){
		$(this).css("color","#444444");
	})
	

	
})

var jsonMortgageType=[
	{value:'car',text:'车辆抵押'},{value:'house',text:'房产抵押'}
	]

var jsonBusinessTypeCar=[
	{value:'car1',text:'押车'},{value:'car2',text:'押手续'},{value:'car3',text:'双押'}
	]

var jsonBusinessTypeHouse=[
	{value:'house1',text:'质押'},{value:'house2',text:'垫资'},{value:'house3',text:'先质后抵'},{value:'house4',text:'单方'},{value:'house5',text:'赎本'},{value:'house6',text:'老龄'},{value:'house7',text:'疑难'},{value:'house8',text:'惠民贷'}
	]

var jsonLoanType=[
	{value:'loan1',text:'先息后本'},{value:'loan2',text:'等额本息'}
	]

var jsonReturnWay=[
	{value:'return1',text:'按月返佣'},{value:'return2',text:'一次性返佣'}
	]


//根据借款期限 还款方式 动态条件调取数值
var  jsonReturnPlan=[
	{value:'plan1',text:'1'},{value:'plan2',text:'2'},{value:'plan3',text:'3'},{value:'plan4',text:'4'},{value:'plan5',text:'5'},{value:'plan6',text:'6'},{value:'plan7',text:'7'},{value:'plan8',text:'8'}
]


var jsonInvaildReason=[
	{value:'invail1',text:'无效原因1'},{value:'invail2',text:'无效原因2'}
    ]

var jsonDeadLine=[{
	value: 'day',
	text: '按天',
	children: [{
			value: "day1",
			text: "1天"
		}, {
			value: "day2",
			text: "2天"
		}, {
			value: "day3",
			text: "3天"
		}, {
			value: "day4",
			text: "4天"
		}, {
			value: "day5",
			text: "5天"
		}, {
			value: "day6",
			text: "6天"
		}, {	
			value: "day7",
			text: "7天"
		}, {
			value: "day8",
			text: "8天"
		}, {
			value: "day9",
			text: "9天"
		}, {
			value: "day10",
			text: "10天"
		}, {
			value: "day11",
			text: "11天"
		}, {
			value: "day12",
			text: "12天"
		}, {
			value: "day13",
			text: "13天"
		}, {
			value: "day14",
			text: "14天"
		}, {
			value: "day15",
			text: "15天"
		}, {
			value: "day16",
			text: "16天"
		}, {	
			value: "day17",
			text: "17天"
		}, {
			value: "day18",
			text: "18天"
		}, {
			value: "day19",
			text: "19天"
		}, {
			value: "day20",
			text: "20天"
		}, {
			value: "day21",
			text: "21天"
		}, {
			value: "day22",
			text: "22天"
		}, {
			value: "day23",
			text: "23天"
		}, {
			value: "day24",
			text: "24天"
		}, {
			value: "day25",
			text: "25天"
		}, {
			value: "day26",
			text: "26天"
		}, {	
			value: "day27",
			text: "27天"
		}, {
			value: "day28",
			text: "28天"
		}, {
			value: "day29",
			text: "29天"
		}, {
			value: "day30",
			text: "30天"
		}]
}, {
	value: 'month',
	text: '按月',
	children: [{
			value: "m1",
			text: "1个月"
		}, {
			value: "m2",
			text: "2个月"
		}, {
			value: "m3",
			text: "3个月"
		}, {
			value: "m4",
			text: "4个月"
		}, {
			value: "m5",
			text: "5个月"
		}, {
			value: "m6",
			text: "6个月"
		}, {
			value: "m7",
			text: "7个月"
		}, {
			value: "m8",
			text: "8个月"
		}, {
			value: "m9",
			text: "9个月"
		}, {
			value: "m10",
			text: "10个月"
		}, {
			value: "m11",
			text: "11个月"
		}, {
			value: "m12",
			text: "12个月"
		},{
			value: "m13",
			text: "13个月"
		}, {
			value: "m14",
			text: "14个月"
		}, {
			value: "m15",
			text: "15个月"
		}, {
			value: "m16",
			text: "16个月"
		}, {
			value: "m17",
			text: "17个月"
		}, {
			value: "m18",
			text: "18个月"
		}, {
			value: "m19",
			text: "19个月"
		}, {
			value: "m20",
			text: "20个月"
		}, {
			value: "m21",
			text: "21个月"
		}, {
			value: "m22",
			text: "22个月"
		}, {
			value: "m23",
			text: "23个月"
		}, {
			value: "m24",
			text: "24个月"
		}]
}

]

function mortgageType(){
	var picker = new mui.PopPicker();
	    picker.setData(jsonMortgageType);
	    picker.show(function(getselecteditem){
	    var mortxt=getselecteditem[0].text;
    	$("#mortgage-type").find('span').text(mortxt);
    	if(mortxt=="车辆抵押")
    		$("#business-type").find('span').text("押手续");
    	else
    		$("#business-type").find('span').text("质押");
	})
}

function businessType(obj){
	var picker = new mui.PopPicker();
	if(obj=="车辆抵押"){
		picker.setData(jsonBusinessTypeCar);
	    picker.show(function(getselecteditem){
    	$("#business-type").find('span').text(getselecteditem[0].text);
		})
	}
	 if(obj=="房产抵押"){
		picker.setData(jsonBusinessTypeHouse);
	    picker.show(function(getselecteditem){
    	$("#business-type").find('span').text(getselecteditem[0].text);
	})     
	}
}

function loanType(){
	var picker = new mui.PopPicker();
	    picker.setData(jsonLoanType);
	    picker.show(function(getselecteditem){
	    $("#loan-type").find('span').text(getselecteditem[0].text);
	})
}

function loanDate(){
	var dtpicker = new mui.DtPicker({
    type: "date",//设置日历初始视图模式
    beginDate: new Date(2016, 01, 01),//设置开始日期
    endDate: new Date(2026, 01, 01),//设置结束日期
    labels: ['Year', 'Mon', 'Day'],//设置默认标签区域提示语
	})
	dtpicker.show(function(e) {
	  $("#loan-date").find('span').text(e.text);
	})
}

function returnWay(){
	var picker = new mui.PopPicker();
	    picker.setData(jsonReturnWay);
	    picker.show(function(getselecteditem){
	    $("#return-way").find('span').text(getselecteditem[0].text);
	})
}

function returnPlan(){
	var picker = new mui.PopPicker();
	    picker.setData(jsonReturnPlan);
	    picker.show(function(getselecteditem){
	    $("#return-plan").find('span').text(getselecteditem[0].text);
	})
}



function invaildReason(){
	var picker = new mui.PopPicker();
	    picker.setData(jsonInvaildReason);
	    picker.show(function(getselecteditem){
	    $("#invaild-reason").find('span').text(getselecteditem[0].text).css("color","#444444")
	})
}

 function showCurDate(){
   var mydate = new Date();
   curDate = "" + mydate.getFullYear() + "-";
   curDate += (mydate.getMonth()+1) + "-";
   curDate += mydate.getDate();
   return curDate;
  }
 
function deadLine(){
	var picker = new mui.PopPicker({
		layer:2
	});
	    picker.setData(jsonDeadLine);
	    picker.show(function(getselecteditem){
	    $("#deadline").find('span').text(getselecteditem[1].text);
	})
}
