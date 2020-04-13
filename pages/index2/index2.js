// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
text: 'this is text'
  },
  btnClick() {
    console.log('aaa'),
    this.setData({
      text: 'changeText'
    })
  }
})