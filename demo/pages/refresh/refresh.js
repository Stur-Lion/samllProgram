
var GetList = function (that) {
  console.log(1);
  that.setData({
    hidden: false
  });
  var l = that.data.list
  var res={
    data:[
      {
        carrierName:'测试',
        carrierTelphone:'15623544789',
        carrierId:1
      },
      {
        carrierName:'测试',
        carrierTelphone:'15623544789',
        carrierId:2
      },
      {
        carrierName:'测试',
        carrierTelphone:'15623544789',
        carrierId:3
      },
      {
        carrierName:'测试',
        carrierTelphone:'15623544789',
        carrierId:3
      },
      {
        carrierName:'测试',
        carrierTelphone:'15623544789',
        carrierId:3
      },
      {
        carrierName:'测试',
        carrierTelphone:'15623544789',
        carrierId:3
      }
    ]
  }
  for (var i = 0; i < res.data.length; i++) {
    l.push(res.data[i])
  }
  that.setData({
    list: l
  });
  page++;
  that.setData({
    hidden: true
  });
}
Page({
  data: {
    hidden: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
  },
  onShow: function () {
    var that = this;
    GetList(that);
  },
  bindDownLoad: function () {
    var that = this;
    GetList(that);
  },
  scroll: function (event) {
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  refresh: function (event) {
    page = 1;
    this.setData({
      list: [],
      scrollTop: 0
    });
    GetList(this)
  },
  onPullDownRefresh: function () {
    console.log("下拉")
  },
  onReachBottom: function () {
    console.log("上拉");
  }
})