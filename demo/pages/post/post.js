// pages/post/post.js

let list = [
  {
    id: "1",
    caption: "caption1",
    time: "time1",
    place: "place1",
    content: "content1",
  },
  {
    id: "2",
    caption: "caption2",
    time: "time2",
    place: "place2",
    content: "content2",
  },
  {
    id: "3",
    caption: "caption3",
    time: "time3",
    place: "place3",
    content: "content3",
  },
  {
    id: "4",
    caption: "caption4",
    time: "time4",
    place: "place4",
    content: "content4",
  },
  {
    id: "5",
    caption: "caption5",
    time: "time5",
    place: "place5",
    content: "content5",
  }
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
      item : list[options.id-1]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})