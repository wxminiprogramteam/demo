//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      {
        id: "1",  
        imgUrl: "../../images/xiaochengxu.png",
        caption: "高校小程序大赛讲座",
        content: "了解小程序大赛相关事宜",
      },
      {
        id: "2",
        imgUrl: "../../images/qingxie.jpg",
        caption: "志愿梦·中国梦，共筑青春梦",
        content: "志愿者通识培训",
      },
      {
        id: "3",
        imgUrl: "../../images/huawei .png",
        caption: "枪林弹雨中成长",
        content: "华为全国巡回公益讲座",
      },
      {
        id: "4",
        imgUrl: "../../images/xue.jpg",
        caption: "学而思网校宣讲会",
        content: "了解学而思网校",
      },
      {
        id: "5",
        imgUrl: "../../images/shu.jpg",
        caption: "曙光基金宣讲会",
        content: "助学筑梦，曙光基金助你前行",
      },

    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
})
