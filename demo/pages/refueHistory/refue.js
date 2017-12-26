//index.js
//获取应用实例
const app = getApp()

var common = require("../../utils/common.js");

Page({
  data: {
    lists:[
      {
        name:'加油次数',
        num:1,
        danwei:'次'
      },
      {
        name:'累计金额',
        num:10,
        danwei:'元'
      },
      {
        name:'奖励积分',
        num:20,
        danwei:'分'
      },
      {
        name:'节省金额',
        num:3,
        danwei:'元'
      }
    ],
    oillogo:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyRTVENjNDOUU3RDExRTdBRUI3OTkyMjBERjBEODQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyRTVENjNEOUU3RDExRTdBRUI3OTkyMjBERjBEODQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTJFNUQ2M0E5RTdEMTFFN0FFQjc5OTIyMERGMEQ4NDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTJFNUQ2M0I5RTdEMTFFN0FFQjc5OTIyMERGMEQ4NDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6sBpQtAAACKElEQVR42uyXQUtUURTH/+e+1+SAYhkixphigYmIYopKghRtWtRCKFpFUC3qI/QZ0lWLNi4EwXX7kKiNuBDBjaCUItOoVMxCwhnve7dz7pt0WkzOu+K8zVy4vMe7d+753XP+95w79HqheB/ALPd21LbluD9XCRlHyeasSsj4MYRCwq0O4P9vcDCj8HLCi73o248a336YswNkLtPxezEADg4rLMrTLqUJqjS9tZGwxQB3byps7hts/zJuAGEY/VAec0sBVnfCSvatsanByFsBTyP+2Mcaf9BPeP9ZY33PxNfAX3MFDWz/rLwLGVnLnoyn/Aj63SeNbN7g1aSPvqvkLkLZzYVTpKDK1jcllmstZMPhs5WH/V78EMRpVAaQ/x0RdLCGDgrGDhLhfAFMWYTGuxVamwy+shC/bGo8GvLQ03aGEEiQi7p6mOFOhSfDHp6Nedb9gYl04uyBizzrTo9ioYWRFuhfOBHcSOfJXuaXAxv729eVBYBxzAPl8b3Hx0x6NU004JEcRxOdJKpxKk75ZI9iNbmwXozqAOcCQKXULMnJJihTYwCxJ8nHZ4ojLuOH2kT5IHYeMG4ARTaYywNNDcBol7JluaAdPBA6AiheVer/dy7FTzkdd10hLG+F8Twg17GBjFuEJm94KLDvZxY1etuUrYgb+yYewONbCs1pcgKQy0c65WGa74YrFW5RpwK8+aDreaBmALkE7e8KwAt5ScB4Vv6e/xFgAG/0pTOYFt24AAAAAElFTkSuQmCC',
    customerlogo:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAzCAYAAAAn3w6xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg2QTdGQ0NCREE2NTExRTc5Qzg4RDlEQjVFRUM1NEY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg2QTdGQ0NDREE2NTExRTc5Qzg4RDlEQjVFRUM1NEY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODZBN0ZDQzlEQTY1MTFFNzlDODhEOURCNUVFQzU0RjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODZBN0ZDQ0FEQTY1MTFFNzlDODhEOURCNUVFQzU0RjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5u+7mPAAAETUlEQVR42uyZWUgUcRzH/zs7u1YShkdGgUelppaZ0YXQTUTHQ0nRiz30Ej2VURFiCVZERHQ91as9BIIPRT1EKEVFFJVUJJkdmoZX5pHa7o67/b7/nd3GTWp2HNfZcf7wxdU5nN/n/ztnbYN3y3xsEi+BTfJlAbAAWAAsABYAvZYjezvXeC3cW5y/Udd7iro9XN4uJs7JC/7uqb+t64PaHLFMTFvOvP0dTGq8bywA2BUYL7W+ZjZxCn9Q32A3k5oemz8EhKRs5shY49+Z+rvM86aa+YZ6mZi5jgkzUs0NQEwtZM78IuaTXMz96ibzeQa43HVV/LhzWTGzzy4wJwC4vSNnM//sfl7JfAOdwWPenib+Nw5h8Q7dE9eEAkAyQsKD2/OdJ0NhcOgKQMA5ONdZUMyv1ZwEYxP9P8WYiQMAd44pPMATHmLe9eTaCONDyyCO8XPoXHtyJotZW8LDRhOAaQn+n1PjdM0tqqoA/qE4dzU3AgvZHgkP8R5apvjxxprgMYSG69HVYJlE2Nhn5TDp6ws2/O2l+p2Km/Pnc2LGqF43bgCQzOB6yO6ehpqwHjzYF7yuYt6ujwSykAnxKcxBOxkWgIQ0P1B6BntCOkGOoAdIDbXkgvEjdlbLgsEQkiL6BNXGkwcK02cyb3cz8/a1cU/D3/TwAnUAdG5owu3k7Cn+0Bpue8e8vS0cAELS/bLS/MMQcos9OYu7PjYCuz7c3sDzkR7J0PAAHIt28vwjtdT98aBPD/3HsjaZGwDKLnYasa8MG3gBKhGS6VibLMMCsMUmMUfuFt5Ied7f+zuPoAxj5khfOaZQEIwa984le/yu//npqNke1QglGec483dp7jIFQxq/Yh8ve7zh+kfFQEn1fHjAu0NcowWCoQDAldFqB4xH86SmpPJ8QNfwa8MMB9EoxvOXKhTP3O1VGq/sMvk9qNVG14qwUdtrGMIDMCliYuTGkEuHY7wSAg8HAhiYPqPGA3zSLz4xet7eGlN7i1339rYyZ+5WqhA9kQWArCx9eRb8HNaDh0yWY1neznrmetys+n66eoDWN8F6Ga/lftYXIxYAC4AF4BSpbxLajldSFQBwkpROOj1JQHSQjpPSSOWCgsYJGcQZUr8JDW8hHZRtPBewURjFLcpMBuIjaT9pHukKaVBNEvyuAHGW9DMKDa8nYSBYQLpOcmupAgBRGmUgXpGKSAtJN9Bp61EGuxQgzhkUxBPSNtJSUjXGgvHoA7rkDDrXQCBqSOtJ+NLxDkaBSDRCnQoQ50kDETbaJxu7irSBVDtRnSBAHIsgCLg13pYUyO7+1CitcIcCxIXQUqPDQiKrlBPbblKdUWcBgDgiJ0s9QLjlEobv5ffKpS0qhqEACHjERQ0gcP4l+Xo0MZ+jdRpsJx1WgBj6z/l9cr8BDyohtZplHFaCuDwKCDRc5fKAUip7kCnfB7SRDilAfCEdlQ2vIP2IdBPxW4ABADGBucRJCTDMAAAAAElFTkSuQmCC',
    items:[
      {
        name:'软件园福安南一路分站',
      },
      {
        name:'软件园福安南一路分站',
      },
      {
        name:'软件园福安南一路分站',
      },
      {
        name:'软件园福安南一路分站',
      },
      {
        name:'软件园福安南一路分站',
      }
    ]
  },
  onLoad:function () {
    console.log(1111);
  },
  refresh:function () {
    
  },
  onPullDownRefresh:function (e) {
    console.log(0);
    var that = this
    if(that.data.items.length>5){
      wx.stopPullDownRefresh()
      return
    }
    var list = that.data.items;
    list.splice(0,0,{name:'软件园福安南一路分站'})
    setTimeout(function () {
      /*that.setData({
        items:list
      })*/
      wx.stopPullDownRefresh()
    },2000)
  },
  onReachBottom:function () {
    console.log(1);
  },
})
