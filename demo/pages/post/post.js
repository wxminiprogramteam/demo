// pages/post/post.js

let list = [
  {
    id: "1",
    caption: "高校小程序大赛讲座",
    time: "3月20号 19:30-20:30",
    place: "第七教学楼127多功能厅",
    content: "本次大赛是基于微信小程序平台的创新应用开发设计竞赛。大赛面向全球高校在校生开放，旨在通过竞赛的方式提升学生进行Web应用的设计与开发能力，特别是运用微信生态小程序平台开发技术进行创新实践的能力，实现以赛促学、以赛促教、以赛促用，推动微信生态体系的人才培养和产学研用",
  },
  {
    id: "2",
    caption: "志愿者通识培训会",
    time: "3月23日 8:30-11:45 13:30-16:45",
    place: "第6教学楼129",
    content: "志愿者的微笑是城市最美的名片，志愿者的微笑是城市最美的名片，是否你也有着对志愿活动燃烧的热情，是否你也曾，想过自己活动现场的炫酷身影，是否你心中有一个志愿者的梦 但是，现在！！！Now ！！！“志愿·中国梦”百场志愿者培训进高校活动杭州电子科技大学专场重磅来袭！给你一个丰富志愿者技能的机会点亮你生命的火火火火火 ",
  },
  {
    id: "3",
    caption: "华为“枪林弹雨中成长”全国巡回公益讲座",
    time: "3月14 18:30-20:30",
    place: "第7教学楼127多功能厅",
    content: "content3",
  },
  {
    id: "4",
    caption: "“学而思”宣讲会",
    time: "3月13 13:00",
    place: "第12教学楼302",
    content: "content4",
  },
  {
    id: "5",
    caption: "助学筑梦，曙光基金助你前行",
    time: "3月18日 13:30",
    place: "第七教学楼北 122",
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