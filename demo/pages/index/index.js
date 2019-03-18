//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      {
        id: "1",
        imgUrl: "../../images/orientation.png",
        caption: "caption1",
        content: "content1",
      },
      {
        id: "2",
        imgUrl: "../../images/pencil.png",
        caption: "caption2",
        content: "content2",
      },
      {
        id: "3",
        imgUrl: "../../images/school_bus.png",
        caption: "caption3",
        content: "content3",
      },
      {
        id: "4",
        imgUrl: "../../images/set_square.png",
        caption: "caption4",
        content: "content4",
      },
      {
        id: "5",
        imgUrl: "../../images/studies.png",
        caption: "caption5",
        content: "content5",
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
