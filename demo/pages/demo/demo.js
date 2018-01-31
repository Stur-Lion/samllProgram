Page({
  data: {
    animationData: {}
  },
  onShow: function(){ 
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.left('30rpx').step()
    this.setData({
      animationData:animation.export()
    })
  },
  moveClick:function () {
    console.log(this.data.animationData);
    var left = this.data.animationData.actions[0].animates[0].args[1]
    left = parseFloat(left)+30
    console.log(left);
    this.animation.left(left+'rpx').step()
    this.setData({
      animationData: this.animation.export()
    })
  }
})