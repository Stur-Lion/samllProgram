//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  cunzhu:function () {
    wx.setStorage({
      key:"cc",
      data:"123123123"
    })
    wx.navigateTo({
      url: '../other/other'
    })
  },
  get:function () {

  }
})
