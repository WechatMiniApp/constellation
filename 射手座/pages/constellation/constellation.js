// pages/constellation/constellation.js
var util = require('../../utils/util.js');

Page({
  data:{
    tips: "事无巨细，今天的你忙碌异常，工作中许多琐事都需要你亲自处理，你可能需要在工作中运用大量的沟通技巧来获得自己想要的结果，好在合作运不错，对方多半是明事理的爽快人。",
    date: "",
    all: "3",
    work: "4",
    love: "3",
    money: "2",
    health: "2"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
    var _this = this;
     wx.request({
              url: 'http://hqz-123.tpddns.cn',
              data: {
                "consName": "射手座",
                "type":  "today",
                "key": "54f72d1be058cc6a3eb9dcae1b64ad69"
              },
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              header: {'Content-Type':'application/json'}, // 设置请求的 header
              success: function(res){
                // success
                
                var date = util.formatTime(new Date);
                var all = util.operation(util.toPoint(res.data.all));
                var work = util.operation(util.toPoint(res.data.work));
                var love = util.operation(util.toPoint(res.data.love));
                var money = util.operation(util.toPoint(res.data.money));
                var health = util.operation(util.toPoint(res.data.health));

                console.log(res)

                _this.setData({
                  tips: res.data.summary,
                  date: date,
                  all: all,
                  work: work,
                  love: love,
                  money: money,
                  health: health
                })
              }
            })
   
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})