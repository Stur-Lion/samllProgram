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
    nocanTap: true,
    timeNum:'获取验证码',
    char_lt: '<',
    verCode: ''
  },
  getVercode:function (e) {
    this.setData({
      verCode: e.detail.value
    })
  },
  bottonNext: function () {
    if(this.data.verCode==''){
      wx.navigateTo({
        url: '../qrCode/qrCode'
      })
    }else{
      wx.navigateTo({
        url: '../refueHistory/refue'
      })
    }
  },
  getverfitionCodeAgain: function(e){
    var that = this;
    if(this.data.timeNum=='获取验证码'){
      that.setData({
        timeNum:60
      })
      function countDown(time) {
        setTimeout(function () {
          that.setData({
            timeNum:--time
          })
          if(time<=0){
            that.setData({
              timeNum:'获取验证码'
            })
          }else{
            countDown(time)
          }
        },1000)
      }
      countDown(60)
    }else{
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '发送短信过于频繁，请稍后再试'
      })
    }
  }
})
