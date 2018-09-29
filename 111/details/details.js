/* 
  如有问题联系32395032 
微信号18431298559
   
*/
 

import axios from '../../utils/config';  
import * as echarts from '../../ec-canvas/echarts';
var Charts = require('../../utils/wxcharts.js'),
  lisr = require("../../utils/list.js"),
  apl = require('../../utils/apl');
 


/*
            图片时间跨度
4.1.待上映   
4.1.1.首日预售
映前30天~~映前1天
4.1.2.票房榜
无        
4.1.3.评分榜
无 
4.1.4.其他
映前90~~上映首日
4.2.热映中
4.2.1.首日预售
映前30天~~映前1天
4.2.2.票房榜
上映首日~~上映45天
4.2.3.评分榜
无
4.2.4.其他
映前60天~~上映30天
 */
                  
Page({
  data: {     
    selected: 0,
    name: [],                         
    srollto: '',
          
    width: wx.getSystemInfoSync().windowWidth,
    shang: false,      
    _height: 280,


    weibo:{},
    wuliao :{},
    piaofang:{},
    xiangkan:{},
    redu :{},
    weixin:{},
    yushou :{},
    pingfei:{}

  },
  onLoad: function (e) {
    var t = this,
      dir = e.dir.split(',');
    t.aplset(e, dir);   
              
  },
  onReady(){
  },
    
  init_bar (t) {   
    var h=this;
// **********************1。echarts获取ID***********************
  // 热度
    h.barComponent = h.selectComponent('#redu1');
    h.barComponent2 = h.selectComponent('#redu2');
    h.barComponent3 = h.selectComponent('#redu3');
    h.barComponent4 = h.selectComponent('#redu4');
    h.barComponent5 = h.selectComponent('#redu5');
    h.barComponent6 = h.selectComponent('#redu6');

  // 预售
    h.yushou = h.selectComponent('#ys_1');  
    h.yushou2 = h.selectComponent('#ys_2'); 

  // 微博
    h.weibo = h.selectComponent('#weibo1');
    h.weibo2 = h.selectComponent('#weibo2');
    h.weibo3 = h.selectComponent('#weibo3');
    h.weibo4 = h.selectComponent('#weibo4');

  // 物料传媒
    h.wk = h.selectComponent('#wk1');
    h.wk2 = h.selectComponent('#wk2');
    h.wk3 = h.selectComponent('#wk3');
  // 微信  
    h.wx = h.selectComponent('#wx1');
    h.wx2 = h.selectComponent('#wx2');
  // 想看
    h.xk = h.selectComponent('#xk_1');
    h.xk_2 = h.selectComponent('#xk_2');
    h.xk_4 = h.selectComponent('#xk_4');
    h.xk_5 = h.selectComponent('#xk_5');
  // 票房  
    h.pf = h.selectComponent('#pf_1');
    h.pf_2 = h.selectComponent('#pf_2');
    h.pf_3 = h.selectComponent('#pf_3');
    h.pf_4 = h.selectComponent('#pf_4');
  // 评分
    h.score = h.selectComponent('#score_1');
    h.score_3 = h.selectComponent('#score_3');
    h.score_4 = h.selectComponent('#score_4');
     

// ***********************2.echarts必写*******************************
// 热度
  this.barComponent.init((canvas, width, height) => {
      // 初始化图表                      
      const barChart = echarts.init(canvas, null, {
        width: width,   
        height: height
      });                                
      barChart.setOption(this.getBarOption(t).redu1);
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return barChart;
  }); 
  this.barComponent2.init((canvas, width, height) => {          
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });          
      barChart.setOption(this.getBarOption(t).redu2);
      return barChart;       
  });
   this.barComponent3.init((canvas, width, height) => {          
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });          
      barChart.setOption(this.getBarOption(t).redu2);
      return barChart;       
  });
    this.barComponent4.init((canvas, width, height) => {          
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });          
      barChart.setOption(this.getBarOption(t).redu2);
      return barChart;       
  });
     this.barComponent5.init((canvas, width, height) => {          
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });          
      barChart.setOption(this.getBarOption(t).redu2);
      return barChart;       
  });
      this.barComponent6.init((canvas, width, height) => {          
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });          
      barChart.setOption(this.getBarOption(t).redu2);
      return barChart;       
  });

// 预售
  this.yushou.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu2);
      return barChart;
  });
  this.yushou2.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu2);
      return barChart;
  });
// 微博
    this.weibo.init((canvas, width, height) => {
      // 初始化图表                      
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return barChart;
    });
    this.weibo2.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    }); 
    this.weibo3.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });
    this.weibo4.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });
// 物料传媒 
    this.wk.init((canvas, width, height) => {
      // 初始化图表                      
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu2);
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return barChart;
    });
    this.wk2.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });
    this.wk3.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu2);
      return barChart;
    }); 
// 微信
    this.wx.init((canvas, width, height) => {
      // 初始化图表                      
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu2);
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return barChart;
    }); 
    this.wx2.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });
// 想看榜 
    this.xk.init((canvas, width, height) => {
      // 初始化图表                      
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return barChart;
    });
    this.xk_2.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });   
    this.xk_4.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });  
    this.xk_5.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });
// 票房
    this.pf.init((canvas, width, height) => {
      // 初始化图表                      
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return barChart;
    });
    this.pf_2.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });                
    this.pf_3.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });
    this.pf_4.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });
// 评分 
    this.score.init((canvas, width, height) => {
      // 初始化图表                      
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return barChart;
    });
    this.score_3.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });
    this.score_4.init((canvas, width, height) => {
      const barChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      barChart.setOption(this.getBarOption(t).redu1);
      return barChart;
    });


  },

// ************************3.echarts数据**************************
  getBarOption (t) {
   
    var redu = this.data.redu;
    //return 请求数据
    return{         
      'redu1':{   
        legend: {
          data: [redu._baidu[0].name,redu._baidu[1].name,"aaa"]
        },                  
        color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(245, 245, 245, 0.8)',
          borderWidth: 1,
          borderColor: '#aaa',
          padding: 5,
          textStyle: {
            color: '#000'
          },
         
          position: function (pos, params, el, elRect, size) {
            var obj = { top: 10 };
            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
            return obj;
          },
          extraCssText: 'width: 170px'

        },    
      xAxis: {   
        type: 'category',
        boundaryGap: false,
        data:[1,2,3,3,4,5,6,4,8,7,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39] 
        // data:redu._baidu._xy,  
      },          
      yAxis: {
        x: 'center',
        max:100000,        
        min:0,    
        type: 'value',
                                  
      },            
        grid: {  
          left: 55    
        },       
      series: [{
        name: redu._baidu[0].name,
        type: 'line',
        smooth: true,
        symbol: "none",
        data: [10000, 20000, 30000, 25000, 15000, 20000, 15000, 16880, 45000, 78000, 56000, 23000, 45000, 15000, 12000, 16000, 49000, 25000, 15000, 20000, 15000, 16880, 45000, 78000, 56000, 23000, 45000, 15000, 12000, 16000, 49000,25000,46000,34000,32000,46000,35000,26000]
        // data: redu._baidu[0].value
      }, {                      
        name: redu._baidu[1].name,
        type: 'line',
          symbol: "none",
        smooth: true,
        data: redu._baidu[1].value
      },{ 
        name: "aaa",
        type: 'line',
        smooth: true,
        symbol: "none",
        data: [20000, 10000, 30000, 45000, 25000, 30000, 25000, 26880, 55000, 88000, 66000, 13000, 75000, 55000, 42000, 16000, 49000, 25000, 15000, 70000, 25000, 36880, 42000, 16000, 49000, 25000, 15000, 70000,25000, 15000, 70000, 25000, 36880, 42000, 16000, 42000]
        // data: redu._baidu[0].value
      }], 
      width:285,
      height:200
    }, 
     'redu2': {
        color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
       tooltip: {
         trigger: 'axis',
         backgroundColor: 'rgba(245, 245, 245, 0.8)',
         borderWidth: 1,
         borderColor: '#aaa',
         padding: 5,
         textStyle: {
           color: '#000'
         },
         position: function (pos, params, el, elRect, size) {
           var obj = { top: 10 };
           obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
           return obj;
         },
         extraCssText: 'width: 170px'

       },  
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: redu._weibo._xy,
        },
        yAxis: {
          x: 'center',
          max:100000,        
          min: 0,
          type: 'value',
        },  
       grid: {
         left: 55
       },  
        series: [{
          name: redu._weibo[0].name,
          type: 'line', 
          smooth: true, 
          symbol: "none",
          data: redu._weibo[0].value
        }, {
          name: redu._weibo[1].name,
          type: 'line', 
          smooth: true,  
            symbol: "none",
          data: redu._weibo[1].value
        }],   
        width: 300,
        height: 200
      }
    }
  },          
  aplset(e, dir) {
    var t = this,
      w = apl.movie,
      _cavcas = {},
      data = {
        id: dir[1],
        flag: 1
      };       
    t.setData({
      name: lisr.name,
      yanse: lisr.yanse
    })     
    lisr.name.forEach((v, index) => {
      if (v.name == dir[0]) {
        t.Qinhuan(e, index)
      }
    })  
    if (dir[0] == '首日预售榜') {
      data.platfilm = dir[1]
    }   
    // 详情页信息------------------
    axios.post(w.xiang, data).then(res => {
      t.setData({
        xiang: res
      })
    })        
    _cavcas.weibo = {}
    _cavcas.wuliao = {}
    _cavcas.redu = {}
    _cavcas.weixin = {}
    _cavcas.xiangkan = {}
    _cavcas.piaofang = {}
    _cavcas.yushou = {}
    _cavcas.pingfei = {}

    /*
      物料榜单信息---------------
    */
    axios.post(w.wuliao.tou, data).then(res => {
      t.setData({
        wuliao: res
      })
      // console.log(this.data.wuliao);
    })
    // 每日趋势表
    axios.post(w.wuliao.meiri, data).then(res => {
      _cavcas.wuliao.meiri = charts(_cavcas.dianzan, res)

    })


    /*
      微博话题榜单 ----------------

    */
    // 微博头部信息排名展示
    axios.post(w.weibo.tou, data).then(res => {
      t.setData({   
        weib_top: res
      })
      // console.log(this.data.weib_top);
    })
    // 微博话题论坛
    axios.post(w.weibo.pai, data).then(res => {
      t.setData({
        weib_pai: res
      })
    }) 
    // 热门微博
    axios.post(w.weibo.remen, data).then(res => {
      _cavcas.weibo.remen = charts(_cavcas.dianzan, res)
    })
    // 微博转发数
    axios.post(w.weibo.zhuanfa, data).then(res => {
      _cavcas.weibo.zhuanfa = charts(_cavcas.dianzan, res)

    })
    // 微博评论数趋势
    axios.post(w.weibo.pinlun, data).then(res => {
      _cavcas.weibo.pinglun = charts(_cavcas.dianzan, res)
    })
    // 微博点赞趋势
    axios.post(w.weibo.dianzan, data).then(res => {
      _cavcas.weibo.dianzan = charts(_cavcas.dianzan, res)
    })
    /*
      热度榜单所有--------

    */
    //  百度指数
    axios.post(w.redu._baidu, data).then(res => {
      _cavcas.redu._baidu = charts(_cavcas.dianzan, res)

    })
    // 微信指数榜单
    axios.post(w.redu._weixin, data).then(res => {
      // console.log(w.redu._weixin,data);
      // console.log(res); 
      _cavcas.redu._weixin = charts(_cavcas.dianzan, res)
    })
    // 热度榜单
    // 微博榜图表
    axios.post(w.redu._weibo, data).then(res => {
      _cavcas.redu._weibo = charts(_cavcas.dianzan, res)
    })


    /*
      猫眼想看榜所有----------
    */
    // 猫眼图表
    axios.post(w.xiangkan.maoya, data).then(res => {
      _cavcas.xiangkan.maoya = charts(_cavcas.dianzan, res)
    })
    // 性别占比
    axios.post(w.xiangkan.xingbie, data).then(res => {
      _cavcas.xiangkan.xingbie = _pinZhaun(_cavcas.dianzan, res)
    })
    // 年龄占比
    axios.post(w.xiangkan.nianling, data).then(res => {
      _cavcas.xiangkan.nianling = _pinZhaun(_cavcas.dianzan, res)

      cavvss(_cavcas,t)
    })
    // 地域占比
    axios.post(w.xiangkan.diyu, data).then(res => {
      _cavcas.xiangkan.diyu = _pinZhaun(_cavcas.dianzan, res)
    })


    /*
    票房榜信息-------------
    */   
    // 单日趋势
    axios.post(w.piaofang.danri, data).then(res => {
      _cavcas.piaofang.danri = charts(_cavcas.dianzn, res)
      cavvss(_cavcas,t)
    })
    // 累计趋势
    axios.post(w.piaofang.leiji, data).then(res => {
      _cavcas.piaofang.leiji = charts(_cavcas.dianzan, res)
    })
    // 日排占比趋势
    axios.post(w.piaofang.ripai, data).then(res => {
      _cavcas.piaofang.ripai = charts(_cavcas.dianzan, res)
    }) 
    // 日场次占比趋势
    axios.post(w.piaofang.rici, data).then(res => {
      _cavcas.piaofang.rici = charts(_cavcas.dianzan, res)
    })


    /*
      评分榜所有-------------
    */
    // 本案评分
    axios.post(w.pingfei.beian, data).then(res => {
      t.setData({
        pinFei_top: res
      })
    })
    // 同类评分
    axios.post(w.pingfei.tonglei, data).then(res => {

      t.setData({
        tongLei: res
      })

      cavvss(_cavcas,t)

    })
  },

 
 
  /*
    微博榜单的 热门话题讨论数更新
  */
  FenGxi() {
    var t = this,
      _height,
      height = t.data._height;
    if (height == 280) {
      _height = 500
    } else {
      _height = 280
    }
    t.setData({
      _height: _height

    })
  },
  // 微博话题讨论更新
  gengxin(e) { 
    var t = this,
      _hright;
    if (t.data._height == 345) {
      _hright = 600
    } else {
      _hright = 345
    }
    t.setData({
      _height: _hright,
    })
  },
  //  勤换naber
  selected(e) {
    var h = this;
    var index = e.currentTarget.dataset.idnex;
    this.Qinhuan(e, index)
  },
  //  勤换naber
  Qinhuan(e, i) {
    var window = this.data.width / 5
    this.setData({
      selected: i,
      current: i,
      srollto: (i - 2) * window
    })
  },



  onShareAppMessage: function () {
    // 用户点击右上角分享e
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})

// 折线图拆分
function charts(_cavcas, res) {
  _cavcas = {}
  for (var i = 0; i < res.shang.length; i++) {
    _cavcas[i] = {}
    _cavcas[i].value = []
    _cavcas._xy = [] 
    _cavcas[i].name = res.shang[i].name
    res.shang[i].value.forEach((data, index) => {
      if (index > 10 && index < 20) {
        _cavcas[i].value.push(res.shang[i].value[index])
        _cavcas._xy.push(res.hez[index])
      }
    })
  }
  return _cavcas
}

// 拼装数据拆分封装
function _pinZhaun(_cavcas, res) {
  _cavcas = {  
    maoy: [],   
    taopp: []
  };
  for (var insr in res.maoy) {
    var maoy = res.maoy[insr]
    _cavcas.maoy.push(maoy)
  }
  for (var insr in res.taopp) {
    _cavcas.taopp.push(res.taopp[insr])
  }
  return _cavcas
}


function cavvss(t,h) {
  h.setData({
      weibo:t.weibo,
      wuliao : t.wuliao,
      piaofang :t.piaofang,
      xiangkan : t.xiangkan,
      redu : t.redu,
      weixin : t.weixin,
      yushou : t.yushou,
      pingfei : t.pingfei
  })
   
    h.init_bar(t)






    // 热度
  // redu1
  // new Charts({
  //   canvasId: 'redu1',
  //   type: 'line',
  //   categories: redu._baidu._xy,
  //   series: [{
  //     name: redu._baidu[0].name,
  //     color: "#ec7853",
  //     data: redu._baidu[0].value,
  //     format: function (val) {
  //       return val;
  //     }
  //   }, {
  //     name: redu._baidu[1].name,
  //     color: "#ff0000",
  //     data: redu._baidu[1].value,
  //     format: function (val) {
  //       return val;
  //     }
  //   }, {
  //     name: '爱情公寓',
  //     color: "#ec3076",
  //     data: [123, 181, 164, 63, 130, 133, 153, 102, 51],
  //     format: function (val) {
  //       return val;
  //     }
  //   }, {
  //     name: '生如夏花',
  //     color: "#ffd846",
  //     data: [143, 77, 164, 123, 185, 330, 272, 271, 249],
  //     format: function (val) {
  //       return val;
  //     }
  //   }],
  //
  //   yAxis: {
  //     min: 0,
  //     max: 500,
  //     disabled: false,
  //     gridColor: '#fff'
  //   },
  //   width: 350,
  //   height: 300,
  //   dataLabel: false
  // });



}
