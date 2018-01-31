//index.js
//获取应用实例
const app = getApp()

var common = require("../../utils/common.js");

Page({
  onLoad:function () {
    wx.login({
      success: function (r) {
        console.log(r);
        var code = r.code;//登录凭证
        if (code) {
          //2、调用获取用户信息接口
          wx.getUserInfo({
            success: function (res) {
              console.log(res);
              console.log({encryptedData: res.encryptedData, iv: res.iv, code: code})
              //3.解密用户信息 获取unionId
              wx.request({
                url: 'http://yangcong-vip.s1.natapp.cc/app/get/userInfo',//自己的服务接口地址
                method: 'POST',
                data: {encryptedData: res.encryptedData, iv: res.iv, code: code},
                success: function (data) {
                  var res = JSON.parse(data.data.substr(2));
                  console.log(res);
                  console.log(res.retcode);
                  if(res.retcode==1){
                    console.log(1);
                  }else{
                    alert('获取信息失败')
                  }
                },
                fail: function () {
                  console.log('系统错误')
                }
              })
            },
            fail: function () {
              console.log('获取用户信息失败')
            }
          })

        } else {
          console.log('获取用户登录态失败！' + r.errMsg)
        }
      },
      fail: function () {
        alert('获取信息失败')
      }
    })
  }
})
