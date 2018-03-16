//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    multiArray:[
      [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
      [1,2,3,4,5,6,7,8,9,10,11,12]
    ],
    chooseTime:''
  },
  onLoad:function () {

  },
  bindMultiPickerChange:function (e) {
    console.log(e.detail.value);
    var that = this,chooseArr = e.detail.value;
    this.setData({
      chooseTime: that.data.multiArray[0][chooseArr[0]] +'----'+ that.data.multiArray[1][chooseArr[1]]
    })
  }
})
