var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
	color: settings.theme.color,
	title: {
		text: '流行音乐代表人物',
		subtext: '唱片',
		left: 'center',
		textStyle:{
			color:settings.theme.titleColor
		},
		subtextStyle:{
			color:settings.theme.subtitleColor
		},
	},
	tooltip: {
		trigger: 'item'
	},
	legend: {
		textStyle:{
			color:settings.theme.markTextColor
		},
		orient: 'vertical',
		left: '100px'
	},
	series: [{
		name: '唱片',
		type: 'pie',
		radius: '75%',
		label:{
			color:settings.theme.markTextColor,
			width:600,
			height:600
		},
		data: [{
				value: 800,
				name: '邓丽君'
			},
			{
				value: 400,
				name: '刘欢'
			},
			{
				value: 400,
				name: '罗大佑'
			},
			{
				value: 600,
				name: '许冠杰'
			},
			{
				value: 600,
				name: '谭咏麟 '
			},
			{
				value: 700,
				name: '张学友 '
			},
			{
				value: 700,
				name: '周杰伦 '
			}
		]
	}]
};

option && myChart.setOption(option);
myChart.on('mouseover', function(params) {
	document.getElementById('zj').src = "image/zj" + params.dataIndex + ".png";
	document.getElementById('names').innerHTML=option.series[0].data[params.dataIndex].name;
});