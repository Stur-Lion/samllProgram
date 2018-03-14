//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tempFilePaths:'',
    images:{},
    originalSize:{}
  },
  getUserInfo: function(e) {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success: function (res) {
        const ctx = wx.createCanvasContext('firstCanvas')
        console.log(res);
        var tempFilePaths = res.tempFilePaths[0];
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            console.log(res);
            var ratio=res.width/res.height;
            var viewWidth=300,
              viewHeight=parseInt(300/ratio);
            that.setData({
              images:{
                width:viewWidth,
                height:viewHeight
              },
              tempFilePaths:tempFilePaths,
              originalSize:{
                width:res.width,
                height:res.height
              }
            });

            ctx.drawImage(that.data.tempFilePaths, 0, 0, that.data.images.width, that.data.images.height)

            ctx.font = "8px 微软雅黑";
            ctx.fillStyle = "black";

            const util = require('../../utils/util.js')

            changeCon([
              {
                title:'地点：',
                main:'湖北省武汉市洪山区XXXXXXXXX营业厅',
                nochange:false
              },{
                title:'时间：',
                main:util.formatTime(new Date),
                nochange:true
              }
            ],that.data.images.width,that.data.images.height)


            ctx.draw()
          }
        })


        /*文字方法*/
        function changeCon(conArr,width,height){
          const rigthPadding = 3, /*右侧预留大小*/
                baseWidth = 128, /* maxLength*fontsize */
                maxLength = 16,  /* 一行的字数 */
                fontSize = 8; /*fontsize*/
          var lastWidth = 5;  /*底部预留大小*/

          for(var j = conArr.length-1;j>=0;j--){
            var con = conArr[j], metrics = ctx.measureText(con.title);
            if(!con.nochange){
              var length = Math.ceil(con.main.length/maxLength);
              var ContentArr = []
              for(var i = length -1 ;i >= 0;i--){
                ContentArr.push(con.main.substring(i*maxLength,i*maxLength+maxLength))
                ctx.fillText(
                  con.main.substring(i*maxLength,i*maxLength+maxLength),
                  width-baseWidth-rigthPadding,
                  height-lastWidth);
                lastWidth += (fontSize+1)
              }
              console.log(ContentArr);
            }else {
              ctx.fillText(
                con.main,
                width-baseWidth-rigthPadding,
                height-lastWidth);
              lastWidth += (fontSize+1)
            }
            ctx.fillText(con.title,width-baseWidth-rigthPadding-metrics.width,height-lastWidth + 8)
          }
        }


      }
    })
  },
  downPicture: function() {
    if(this.data.tempFilePaths==''){
      return
    }
    var that = this;
    wx.canvasToTempFilePath({
      destWidth: that.data.originalSize.width,
      destHeight: that.data.originalSize.height,
      quality:1,
      canvasId: 'firstCanvas',
      success: function(res) {
        console.log(res);
        console.log(res.tempFilePath);
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
        })
      }
    })
  }
})
