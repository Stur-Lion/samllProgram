//index.js
//获取应用实例
const app = getApp()

var common = require("../../utils/common.js");
var utilMd5 = require('../../utils/md5.js');

Page({
  onLoad: function (options) {
    var that = this
    this.setData({
      tel: options.tel
    });
    wx.login({
      success: function (r) {
        var code = r.code;//登录凭证
        if (code) {
          //2、调用获取用户信息接口
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                code: r.code,
                encryptedData: res.encryptedData,
                iv:res.iv
              });
            },
            fail: function () {
              that.openToast('获取用户信息失败','info')
            }
          })

        } else {
          console.log('获取用户登录态失败！' + r.errMsg)
        }
      },
      fail: function () {
        console.log('获取信息失败')
      }
    })
  },
  data: {
    tel:'',
    nocanTap: true,
    timeNum:'获取验证码',
    char_lt: '<',
    verCode: '',
    code: '',
    encryptedData: '',
    iv: ''
  },
  getVercode:function (e) {
    this.setData({
      verCode: e.detail.value
    })
  },
  bottonNext: function () {
    if(this.data.verCode==''){
      this.openToast('请输入完整验证码')
    }else{
      wx.request({
        url: common.url+'/app/check/messages-code',
        method: 'POST',
        data: {
          phone: this.data.tel,
          message_code: this.data.verCode,
          code: this.data.code,
          encryptedData: this.data.encryptedData,
          iv: this.data.iv
        },
        success: function (data) {
          var res = common.changeData(data.data);
          console.log(res);
          if(res.retcode==1){
            var gas_station_id = res.data.gas_station_id.join(',');
            console.log(gas_station_id);
            wx.navigateTo({
              url: '../refueHistory/refue?gas_station_id='+gas_station_id
            })
          }
        },
        fail: function () {
          console.log('系统错误')
        }
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
      countDown(60);
      /*获取验证码*/
      var usertelephone = this.data.tel
      wx.request({
        url: common.url+'/api/get/random-key',
        method: 'POST',
        data: {
          phone: usertelephone
        },
        success: function (res) {
          console.log(res);
          if(res.data.retcode==1){
            var randomKey = res.data.data.randomKey;
            var timestamp = Date.parse(new Date());
            wx.request({
              url: common.url+'/api/get/bind-code', //请求短信
              method: 'POST',
              data: {
                phone: usertelephone,
                timestamp: timestamp,
                signal: utilMd5.hexMD5(usertelephone+randomKey+timestamp)
              },
              success: function (res) {
                console.log(res);
                if(res.data.retcode==1){
                  var gas_station_id = res.data.gas_station_id.join(',');
                  console.log(gas_station_id);
                  wx.navigateTo({
                    url: '../refueHistory/refue?gas_station_id='+gas_station_id
                  })
                }else{
                  that.openToast(res.data.info[0])
                }
              },
              fail: function () {
                console.log('系统错误')
              }
            })
          }
        },
        fail: function () {
          console.log('系统错误')
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '发送短信过于频繁，请稍后再试'
      })
    }
  },
  openToast: function (notice) {
    wx.showModal({
      title: '提示',
      showCancel: false,
      content: notice,
      success: function (res) {
        console.log(res)
      }
    })
  }
})
