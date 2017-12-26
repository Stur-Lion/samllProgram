//index.js
//获取应用实例
const app = getApp()

var common = require("../../utils/common.js");

Page({
  data: {
    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,
    usertelephone: '13200136698'
  },
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
                method: 'get',
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                data: {encryptedData: res.encryptedData, iv: res.iv, code: code},
                success: function (data) {
                  console.log(data);

                  //4.解密成功后 获取自己服务器返回的结果
                  if (data.data.status == 1) {
                    var userInfo_ = data.data.userInfo;
                    console.log(userInfo_)
                  } else {
                    console.log('解密失败')
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
        callback(false)
      }
    })
  },
  bindCountryCodeChange: function (e) {
    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  bindTel: function () {
    if(common.validFrom('telephone',this.data.usertelephone,'')=='true'){
      this.openToast('请输入正确手机号','info')
    }else{
      wx.navigateTo({
        url: '../verificationCode/code?tel=' + this.data.usertelephone
      })
    }
  },
  usertel: function (e) {
    this.setData({
      usertelephone: e.detail.value
    })
  },
  openToast: function (notice,icon) {
    wx.showModal({
      title: '提示',
      showCancel: false,
      content: '手机号输入不合法',
      success: function (res) {
        console.log(res)
      }
    })
  },
})
