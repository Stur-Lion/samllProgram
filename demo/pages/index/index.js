//index.js
//获取应用实例

Page({
  data: {
    /*userInfo:{},
    nickName:{},
    runLeft:0,
    addNum:[1,1,1,1],*/
    animationData:{}
   },
  //事件处理函数
  bindViewTap: function() {
  },
  getUserInfo: function() {
  },
  onShow:function(){
    console.log(1);
    var animation=wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.left('30rpx').step()
    this.setData({
      animationData: animation.export()
    })
  },
  slide:function() {
    var _this = this.data;
    var scrollWidths = parseInt(_this.scrollWidth);
    var scrollLeft = this.data.animationData.actions[0].animates[0].args[1];
    scrollLeft = scrollLeft - 275
    var newNum = [1];
    var totalNum = newNum.concat(_this.addNum);
    this.animation.left(scrollLeft + "rpx").step()
    this.setData({
      scrollWidth: scrollWidths + 275 + "rpx",
      addNum: totalNum,
      //输出动画
      animationData: this.animation.export()
    })
    console.log();
  }
})
