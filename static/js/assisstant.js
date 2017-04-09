
$(function(){
	$("#cityPicker").click(function(){
		cityPicker();
		console.log('ss');
  	});
})
var cityData = [{
	value: '110000',
	text: '北京市',
	children: [{
		value: "110101",
		text: "东城区"
	}, {
		value: "110102",
		text: "西城区"
	}, {
		value: "110103",
		text: "崇文区"
	}, {
		value: "110104",
		text: "宣武区"
	}, {
		value: "110105",
		text: "朝阳区"
	}, {
		value: "110106",
		text: "丰台区"
	}, {
		value: "110107",
		text: "石景山区"
	}, {
		value: "110108",
		text: "海淀区"
	}, {
		value: "110109",
		text: "门头沟区"
	}, {
		value: "110111",
		text: "房山区"
	}, {
		value: "110112",
		text: "通州区"
	}, {
		value: "110113",
		text: "顺义区"
	}, {
		value: "110114",
		text: "昌平区"
	}, {
		value: "110115",
		text: "大兴区"
	}, {
		value: "110116",
		text: "怀柔区"
	}, {
		value: "110117",
		text: "平谷区"
	}, {
		value: "110228",
		text: "密云县"
	}, {
		value: "110229",
		text: "延庆县"
	}, {
		value: "110230",
		text: "其它区"
	}]
}, {
	value: '120000',
	text: '天津市',
	children: [{
		value: "120101",
		text: "和平区"
	}, {
		value: "120102",
		text: "河东区"
	}, {
		value: "120103",
		text: "河西区"
	}, {
		value: "120104",
		text: "南开区"
	}, {
		value: "120105",
		text: "河北区"
	}, {
		value: "120106",
		text: "红桥区"
	}, {
		value: "120107",
		text: "塘沽区"
	}, {
		value: "120108",
		text: "汉沽区"
	}, {
		value: "120109",
		text: "大港区"
	}, {
		value: "120110",
		text: "东丽区"
	}, {
		value: "120111",
		text: "西青区"
	}, {
		value: "120112",
		text: "津南区"
	}, {
		value: "120113",
		text: "北辰区"
	}, {
		value: "120114",
		text: "武清区"
	}, {
		value: "120115",
		text: "宝坻区"
	}, {
		value: "120116",
		text: "滨海新区"
	}, {
		value: "120221",
		text: "宁河县"
	}, {
		value: "120223",
		text: "静海县"
	}, {
		value: "120225",
		text: "蓟县"
	}, {
		value: "120226",
		text: "其它区"
	}]
}]

function cityPicker(){
	var picker = new mui.PopPicker({
		layer:2
	});
	    picker.setData(cityData);
	    picker.show(function(getselecteditem){
	    $("#cityPicker").find('span').text(getselecteditem[0].text);
	    $("#cityNext").find('span').text(getselecteditem[1].text);
	})
}