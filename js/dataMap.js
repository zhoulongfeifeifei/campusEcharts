//教师考勤情况
$(function() {
    // 基于准备好的dom，初始化echarts实例
    var attendanceLeft = echarts.init(document.getElementById('attendanceLeft'));
    option = {
    	 title: {
	        text: '教师考勤情况',
	        left: 'left',
	        textStyle: {
                fontSize: '12',
                color:'#fff',
                fontWeight:'normal'
            }
	    },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            textStyle: {
                fontSize: '12',
                color:'#fff'
            },
            data:['到校人数','请假人数','未到人数']
        },
        series: [
            {
                name:' ',
                type:'pie',
                x:'button',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'buttom'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    color:'#fff'
                },
                data:[
                    {value:335, name:'到校人数'},
                    {value:310, name:'请假人数'},
                    {value:234, name:'未到人数'}
                ]
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    attendanceLeft.setOption(option);
    window.addEventListener("resize", function() {
        attendanceLeft.resize();
    });

});
//学生考勤情况
$(function(){
    // 基于准备好的dom，初始化echarts实例
    var attendanceRight = echarts.init(document.getElementById('attendanceRight'));
    option = {
    	backgroundColor: "#344b58",//加背景
        title: {
	        text: '学生考勤情况',
	        left: 'left',
	        textStyle: {
                fontSize: '12',
                color:'#fff',
                fontWeight:'normal'
            }
	    },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            textStyle: {
                fontSize: '12',
                color:'#fff'
            },
            data:['到校人数','请假人数','未到人数']
        },
        series: [
            {             
                type:'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'button'
                    },
                    emphasis: {
                        show: false                      
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'到校人数'},
                    {value:310, name:'请假人数'},
                    {value:234, name:'未到人数'}
                ]
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    attendanceRight.setOption(option);
    window.addEventListener("resize", function() {
        attendanceRight.resize();
    });

});
//老师工作进度
$(function () {
    // 基于准备好的dom，初始化echarts实例
    var preTeacher = echarts.init(document.getElementById('preTeacher'));
    option = {
    	backgroundColor: "#344b58",//加背景
    	color: ['#66cceb'],//柱子的颜色
    	title: {
	        text: '前十',
	        left: 'center',
	        textStyle: {
                fontSize: '12',
                color:'#66cceb',
                fontWeight:'normal'
            }
	    },
        tooltip: {//控制划过的显示
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
             formatter: "{b}: {c}%"
        },
        textStyle: {
            color: '#fff',
        },
        toolbox: {
            feature: {
                
            }
        },
        grid: {
            left: '9%',
            right: '8%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
             
             
        },
        yAxis: {
            type: 'category',
            data: ['王夏明老师', '张晓芳老师', '姜晓文老师', '王夏明老师', '李芳芳老师', '白晶晶老师', '李明月老师','李白月老师','张晓峰老师','珊珊老师','亮亮老师'],
            backgroundColor:'#66cceb'
        },
        series: [{
            name: '',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    formatter: '{c}%'
                }
            },
            data: [73, 86, 85, 100, 83, 90, 80,85, 86, 95],
             
        }
        ]
    };
// 使用刚指定的配置项和数据显示图表。
    preTeacher.setOption(option);
    window.addEventListener("resize", function() {
        preTeacher.resize();
    });
});
$(function () {
    // 基于准备好的dom，初始化echarts实例
    var lastTeacher = echarts.init(document.getElementById('lastTeacher'));
    option = {
    	title: {
	        text: '后十',
	        left: 'center',
	        textStyle: {
                fontSize: '12',
                color:'#66cceb',
                fontWeight:'normal'
            }
	    },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: "{b}: {c}%"
        },
        textStyle: {
            color: '#fff',
        },
        toolbox: {
            feature: {
                //				saveAsImage: {}
            }
        },
        grid: {
            left: '9%',
            right: '8%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['王夏明老师', '张晓芳老师', '姜晓文老师', '李芳芳老师', '白晶晶老师', '李明月老师','李白月老师','张晓峰老师','珊珊老师','亮亮老师'],
        },
        series: [{        
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    formatter: '{c}%'
                }
            },
            data: [43, 36, 45, 30, 33, 50, 30,25, 26, 45]
        }
        ]
    };
// 使用刚指定的配置项和数据显示图表。
    lastTeacher.setOption(option);
    window.addEventListener("resize", function() {
        lastTeacher.resize();
    });
});
//教学活跃度
$(function () {
    // 基于准备好的dom，初始化echarts实例
    var workMap = echarts.init(document.getElementById('workMap'));
    option = {
    	backgroundColor: "#344b58",//加背景
        tooltip: {
            trigger: 'axis'
        },
        legend: {//加颜色
        	textStyle:{
	            color:'#fff'
	        },
            data:['教师','学生','家长'],
        },
        grid: {
            left: '1%',
            right: '2%',
            bottom: '1%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            boundaryGap: false,
            data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            type: 'value'
        },
        series: [
            {
                name:'教师',
                type:'line',
                stack: '总量',
                data:[0, 13, 101, 134, 90, 230, 210,235,34,234,125,240,125,240,32,120,123,34,156,32,67,34,34,249]
            },
            {
                name:'学生',
                type:'line',
                stack: '总量',
                data:[20,182,45,191,234,290,330,310,4,125,240,125,101,134,90,230,210,125,240,125,240,230, 210,235]
            },
            {
                name:'家长',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410,310,4,125,240,234,125,240,330,310,4,125,40,32,120,90, 230, 210]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    workMap.setOption(option);
    window.addEventListener("resize", function() {
        workMap.resize();
    });
})
//资源相关
$(function () {
    var resourceNum=echarts.init(document.getElementById('resourceNum'));
    option = {
        backgroundColor: "#344b58",
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                textStyle: {
                    color: "#fff"
                }

            },
        },

        legend: {
            x: '10%',
            top: '11%',
            textStyle: {
                color: '#90979c',
            },
            data: ['原始', '新增']
        },


        calculable: true,
        xAxis: [{
            type: "category",
            axisLine: {
                lineStyle: {
                    color: '#90979c'
                }
            },
            splitLine: {
                "show": false
            },
            axisTick: {
                "show": false
            },
            splitArea: {
                "show": false
            },
            axisLabel: {
                interval: 0,

            },
            data: ['课件','题库','同步课堂'],
        }],
        yAxis: [{
            type: "value",
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#90979c'
                }
            },
            axisTick: {
                "show": false
            }
        }],

        series: [{
            name: "原始",
            type: "bar",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
                normal: {
                    color: "rgba(255,144,128,1)",
                    label: {
                        show: true,
                        textStyle: {
                            color: "#fff"
                        },
                        position: "insideTop",
                        formatter: function(p) {//柱子的显示
                            return p.value > 0 ? (p.value+'例') : '';
                        }
                    }
                }
            },
            data: [
                270,
                576,
                720
            ],
        },

            {
                name: "新增",
                type: "bar",
                itemStyle: {
                    normal: {
                        color: "rgba(0,191,183,1)",
                        barBorderRadius: 0,
                        label: {
                            show: true,
                            position: "top",
                            formatter: function(p) {
                                return p.value > 0 ? ('新增'+p.value+'例') : '';
                            }
                        }
                    }
                },
                data: [
                    32,
                    150,
                    80
                ]
            },
        ]
    }
    resourceNum.setOption(option);
    window.addEventListener("resize", function() {
        resourceNum.resize();
    });
})
$(function () {
    var resourceQing = echarts.init(document.getElementById('resourceQing'));
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
        	textStyle: {
                color: '#fff',
            },
            data:['浏览','下载','分享']
        },
        grid: {
            left: '1%',
            right: '2%',
            bottom: '1%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                data : ['课件','题库','同步课堂']
            }
        ],
        yAxis : [
            {
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                type : 'value',
                axisLabel: {
                    formatter: '{value}%'
                }
            }
        ],
        series : [
            {
                name:'浏览',
                type:'bar',
                itemStyle:{
                	normal:{               		              		
                		label: {
	                        show: true,
	                        position: 'top',
	                        formatter: function(p) {//柱子的显示
	                            return p.value > 0 ? (p.value+'%') : '';
	                        }
	                    }
                	}                    
                },
                data:[76,88,56]
            },
            {
                name:'下载',
                type:'bar',
                itemStyle:{//主要是针对柱子的
                    normal:{             		
                		label: {
	                        show: true,
	                        position: 'top',
	                        formatter: function(p) {//柱子的显示
	                            return p.value > 0 ? (p.value+'%') : '';
	                        }
	                    }
                	}     
                },
                data:[22, 82, 91,]
            },
            {
                name:'分享',
                type:'bar',
                itemStyle:{
                    normal:{            		
                		label: {
	                        show: true,
	                        position: 'top',
	                        formatter: function(p) {//柱子的显示
	                            return p.value > 0 ? (p.value+'%') : '';
	                        }
	                    }
                	}     
                },
                data:[50,54, 90]
            }
        ]
    };
    resourceQing.setOption(option);
    window.addEventListener("resize", function() {
        resourceQing.resize();
    });
});
//教学相关
$(function () {
    var teachLeft=echarts.init(document.getElementById('teachLeft'));
    option = {  
    	title:{
    		text: '作业完成率',
	        left: 'center',
	        textStyle: {
                fontSize: '12',
                color:'#66cceb',
                fontWeight:'normal'
            }
    	},
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
             formatter: "{b}: {c}%"
        },
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
//          axisLabel: {//自定义y轴的显示
//              formatter: '{value}%'
//          }
        },
        series: [
            {
                type:'line',                
                symbolSize:30,
                symbol:'circle',
                data:[20, 39, 20, 48, 62, 42, 65],
                itemStyle:{
                    normal:{
                        // color:'red'
                        borderType:"solid"
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}%',//b是x轴c是y轴
                        position: 'inside' //值显示
                    }
                }
            }
        ]
    };
    teachLeft.setOption(option);
    window.addEventListener("resize", function() {
        teachLeft.resize();
    });
})
$(function () {
    var teachRight=echarts.init(document.getElementById('teachRight'));
    option = {
    	backgroundColor: "#344b58",//加背景
    	color: ['#66cceb'],//柱子的颜色
    	title:{
    		text: '作业效率',
	        left: 'center',
	        textStyle: {
                fontSize: '12',
                color:'#66cceb',
                fontWeight:'normal'
            }
    	},
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: "{b}: {c}分钟"
        },
        textStyle: {
            color: '#fff',
        },
        toolbox: {
            feature: {
                //				saveAsImage: {}
            }
        },
        grid: {
            left: '9%',
            right: '8%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        series: [{
            name: '周一',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                     formatter: '{c}分钟'
                }
            },
            data: [73, 103, 53, 83, 173, 135, 173]
        }
        ]
    };
    teachRight.setOption(option);
    window.addEventListener("resize", function() {
        teachRight.resize();
    });
})
//资源数量
$(function () {
    var ziNum=echarts.init(document.getElementById('ziNum'));
    option = {
        backgroundColor: "#344b58",//加背景
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                textStyle: {
                    color: "#fff"
                }

            },
//          formatter: "{b}: {c}%"
        },

        legend: {
            x: '4%',
            top: '3%',
            textStyle: {
                color: '#90979c',
            },
            data: ['原始', '新增']
        },


        calculable: true,
        xAxis: [{
            type: "category",
            axisLine: {
                lineStyle: {
                    color: '#90979c'
                }
            },
            splitLine: {
                "show": false
            },
            axisTick: {
                "show": false
            },
            splitArea: {
                "show": false
            },
            axisLabel: {
                interval: 0,

            },
            data: ['网站','微门户','标牌'],
        }],
        yAxis: [{
            type: "value",
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#90979c'
                }
            },
            axisTick: {
                "show": false
            },
            axisLabel: {
                formatter: '{value}'
            }
        }],

        series: [{
            name: "原始",
            type: "bar",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
                normal: {
                    color: "rgba(255,144,128,1)",
                    label: {
                        show: true,
                        textStyle: {
                            color: "#fff"
                        },
                        position: "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? ('原始'+p.value) : '';
                        }
                    }
                }
            },
            data: [
                75,
                85,
                92
            ],
        },
            {
                name: "新增",
                type: "bar",
                itemStyle: {
                    normal: {
                        color: "rgba(0,191,183,1)",
                        barBorderRadius: 0,
                        label: {
                            show: true,
                            position: "top",
                            formatter: function(p) {
                                return p.value > 0 ? ('新增'+p.value) : '';
                            }
                        }
                    }
                },
                data: [
                    5,
                    5,
                    2
                ]
            },
        ]
    };
    ziNum.setOption(option);
    window.addEventListener("resize", function() {
        ziNum.resize();
    });
})
//浏览量
$(function () {
    var chuanNum = echarts.init(document.getElementById('chuanNum'));
    option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
        	textStyle:{
	            color:'#fff'
	        },
            data:['网站','微门户']
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '1%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            type: 'value'
        },
        series: [
            {
                name:'网站',
                type:'line',
                data:[12000, 13200, 10001, 13004, 90000, 2300, 21000]
            },
            {
                name:'微门户',
                type:'line',
                data:[20020, 18002, 19001, 23400, 20090, 30030, 30010]
            }
        ]
    };
    chuanNum.setOption(option);
    window.addEventListener("resize", function() {
        chuanNum.resize();
    });
});
//传播任务完成率
$(function () {
    var chuanLv = echarts.init(document.getElementById('chuanLv'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: "{b}:{c}%"
        },

        grid: {
            left: '1%',
            right: '2%',
            bottom: '1%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {},
                 
            }
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            boundaryGap: false,
            data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            type: 'value',
            axisLabel: {
                formatter: '{value}%'
            }
            
        },
    series: [
        {
            type:'line',                
            symbolSize:20,
            symbol:'circle',
            data:[12, 32, 11, 34, 90, 23, 21,67,86,85,74,65],
            itemStyle:{
            	normal:{
                	borderType:'solid',    //定义样式          	 
               	}
            },   	
            label: {//填充 内容
            	normal:{
            		show: true,
	                position: 'inside',//值显示的位置
	                formatter: '{c}%'
	            	}
                 
            }                                             
        }
      ]
    };
    chuanLv.setOption(option);
    window.addEventListener("resize", function() {
        chuanLv.resize();
    });
})