// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
list: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
wx.request({
  url: 'https://www.fastmock.site/mock/115d876b2fe8850e5185ea824064d585/Group/GroupList',
  success(res) {
    console.log(res.data.GroupList)
    that.setData({
list: res.data.GroupList
    })
  }
})
  },

})