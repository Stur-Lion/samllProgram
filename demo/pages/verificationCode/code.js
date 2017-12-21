//index.js
//获取应用实例
const app = getApp()

var common = require("../../utils/common.js");

Page({
  onLoad: function (options) {
    console.log(options)
    this.setData({
      tel: options.tel
    })
  },
  data: {
    tel:'',
    nocanTap: true
  },
  bottonNext: function () {
    wx.navigateTo({
      url: '../refueHistory/refue'
    })
  },
  getverfitionCodeAgain: function(e){
    console.log(e)
    
  }
})
