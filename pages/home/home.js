// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {},
    text1:"",
    text2:"",
    result: ""
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
  text1Input(e) {
    this.setData({
      text1: e.detail.value
    })
  },
  text2Input(e) {
    this.setData({
      text2: e.detail.value
    })
      },
  calc() {
    var text1 = this.data.text1;
    var text2 = this.data.text2;
    if (text2 > text1) {
      this.setData({
        result: text2 - text1
      })
    }
    if (text1 >= text2) {
      this.setData({
        result: 15
      })
    }
  }
})