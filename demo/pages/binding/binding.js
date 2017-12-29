//index.js
//获取应用实例
const app = getApp()

var common = require("../../utils/common.js");

Page({
  data: {
    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,
    usertelephone: ''
  },
  onLoad:function () {
    var that  =this;
    wx.login({
      success: function (r) {
        that.showloading()
        var code = r.code;//登录凭证
        if (code) {
          //2、调用获取用户信息接口
          wx.getUserInfo({
            success: function (res) {
              //3.解密用户信息 获取unionId
              wx.request({
                url: common.url+'/app/get/userInfo',//自己的服务接口地址
                method: 'POST',
                data: {encryptedData: res.encryptedData, iv: res.iv, code: code},
                success: function (data) {
                  var res = common.changeData(data.data)
                  if(res.retcode==0){  // 解析失败 跳二维码页面，
                    toQrCode()
                  }else if(res.retcode==1){ //已经绑定且为油站员工或者油站管理员，跳加油历史
                    var gas_station_id = res.data.gas_station_id.join(',');
                    wx.navigateTo({
                      url: '../refueHistory/refue?gas_station_id='+gas_station_id
                    })
                  }else if(res.retcode==2){ //已经绑定但不是油站员工或者油站管理员，跳二维码
                    toQrCode()
                  }else if(res.retcode==3){ //未发生绑定 跳填写手机页面
                    //在当前页面继续操作
                    that.hideloading()
                  }else{ //其余异常 跳二维码
                    toQrCode()
                  }
                  that.hideloading()
                  function toQrCode() {
                    wx.navigateTo({
                      url: '../qrCode/qrCode'
                    })
                  }
                },
                fail: function () {
                  that.hideloading()
                  that.openToast('系统错误')
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
        console.log('获取信息失败')
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
      var usertelephone = this.data.usertelephone,that = this;
      wx.request({
        url: common.url+'/app/identity/status',
        method: 'POST',
        data: {phone:usertelephone},
        success: function (result) {
          var res = common.changeData(result.data)
          if(res.retcode==1){
            if(res.data.isStationEmployee){ //绑定手机
              wx.navigateTo({
                url: '../verificationCode/code?tel='+usertelephone
              })
            }else{ //二维码
              wx.navigateTo({
                url: '../qrCode/qrCode'
              })
            }
          }else{
            that.openToast('获取信息失败','info')
          }
        },
        fail: function () {
          console.log('系统错误')
        }
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
      content: notice,
      success: function (res) {
        console.log(res)
      }
    })
  },
  showloading: function () {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
  },
  hideloading: function () {
    wx.hideLoading()
  }
})
