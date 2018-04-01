//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    myData:''
  },
  cunzhu:function () {
    
  },
  onLoad:function () {
    var that = this
    wx.getStorage({
      key: 'cc',
      success: function(res) {
        console.log(res.data);
        that.setData({
          myData:res.data
        });
      }
    })
  },
  get:function () {
    console.log(this.data.myData);
  }
})
