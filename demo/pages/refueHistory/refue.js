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
    enterpriselogo:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAzCAYAAAAn3w6xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdFNDJEREUzREE2NTExRTc4MTlBQTE5QUQ4M0FFRTE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdFNDJEREU0REE2NTExRTc4MTlBQTE5QUQ4M0FFRTE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0U0MkRERTFEQTY1MTFFNzgxOUFBMTlBRDgzQUVFMTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0U0MkRERTJEQTY1MTFFNzgxOUFBMTlBRDgzQUVFMTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5O81pNAAAEVElEQVR42uxZW0gUURg+O2sXMkFDKi3wElrJFpFghRVRID0IBUFQkA/1ENRDFywi7IIVERVdIIigXgp8EIKgIIyK6EJFl0UloTBTNGuzNbq37e70f3PR2dlLc3Od3Z0fPnZ2Zs6c83/zn+/8/5msLU0BnmWwcSzDzSHAIcAhwCHAIcAqW+XhBFhpBTkuVl3MsZxxw+dwjHO4ZhsCNi5wsxqPCBxbZcvKOLZ+oZvNLRgeKo5xDtfMWpZVzleWcOx5V1j4j2PYpSch208BUwQgFOuq3Kximui80mGZhGZviH37k4YEYP5tqnazglxXlPPyMUgozHOxiw9DrP8bnz4EQOiWznSz8WNYlPOxSKivyWI320Ls1utw3GduXSLqxrn75qZN/QrRpRO3g9aLIN46Bgqhg7W0hyKcV6szruEe2Or5bqGtUs3VVjqZS3hd0xgpIvFiLF0FMKh15ADeJOZ7/xeenWgJsmvtkW80ljrjnvP3gkIbtD1YO0Z4ltpef+SFgS83oezzCkXnO328dQTgbWLQi8u5obd++GZQ15x+M8ALbR7QFMAA8ayGlZGzD9Pj91/GyqYYJ6Bokhh5HR/C1mkAHH3rEx941Rs2JWZNL0LsWU+Y1czmmP9H9HX0gyhBxBlZOeZM5wQSve95a0VQLUwQQXR2vTWkqzM5Gt7EEbreQUwTxhYWcQkFM16kYv6/6tPXzlC8TRgrdpY91nwqqrSn3SKZ5VP0P7eqyDWkJUnPBNXmmeZiDZNjPxpakGi6QSwLc12Gw19v5NiuGoSC52a7WFm+dhJwLyJS1qpRj4D2Pl4QPCPW4xdDuGKqS9ALLQZRhT3s1E+A7SKgtV90Ynqe9ghAAtX1idctyCMWAWYMyx9yjW6/dmeQaH03WHDZjgA5e9S7tDpbYiNZDSIzU+7ITMoWf/MnisWPbPgvX1eeV9uPQOR8RQ4fL6eI1ZeWftR9mCJALnKi1NcTe+sL6Swyurjr/RcMbjgfqJ0r7iskVPoYfSXqR92HKQLefuaFQsYq+6n6HNnWG6b139qs8qfGT56aCECGZnRdHwnRs9Kc7wIOAQ4BDgEZT8AhwtcM9N1PaAQB+wkl2KvIECJ8hD2EYsIBTsHGPomIIyjK0tDxXsI2ycdjso9cjLBoSDMiOgmbCTMIZ5EkahHBzwoijhK+p6DjHYQNhFmEC4SAkVUAROxNMSJeEtYQPIQrhKAVy+CAgohjNiXiEQpLQiXhKkFTgaE3DxiQFLTURkTcISwnVBNuEHRtDxlNhD4piDiO/YckO81Lzi4irCDcHa1MEETsTiIRCOtmwnwp3B/bJRX2KYg4qV5qLDAI2WVJ2NYSvHatBUBEvSSWVhARkJawckKdtLSlRDEkE4GIOGWACNx/WmqPJKYrVavBj4SdCiJ+/ef+r1K+gQjaQehLl3JYScSZGEQg4TogFSh7pQhKy/2AD4TtCiLeEXZJjjcSBpOdRPwTYAD19II8puFdGAAAAABJRU5ErkJggg==',
    items:[],
    itemsLength: 0,
    gas_station_id: '',
    page: 1 ,
    hasAll: false ,
    titleTip: '正在拼命获取中'
  },
  onLoad:function (options) {
    var gas_station_id = options.gas_station_id.split(','),that = this;
    this.setData({
      gas_station_id:gas_station_id
    })
    wx.request({
      url: common.url+'/app/station/order-history',
      method: 'POST',
      data: {
        gas_station_id:gas_station_id
      },
      success: function (data) {
        var res = common.changeData(data.data);
        console.log(res);
        if(res.retcode==1){
          that.setData({
            items: res.data.orderTemp,
            itemsLength:res.data.orderTemp.length
          })
        }
      },
      fail: function () {
        console.log('系统错误')
      }
    })
  },
  onPullDownRefresh:function (e) {
    var that = this;
    wx.request({
      url: common.url+'/app/station/order-history',
      method: 'POST',
      data: {
        gas_station_id: this.data.gas_station_id,
        page:1
      },
      success: function (data) {
        console.log(data);
        var res = common.changeData(data.data);
        console.log(res);
        if(res.retcode==1){
          that.setData({
            items: res.data.orderTemp,
            itemsLength: res.data.orderTemp.length,
            page: 1,
            hasAll :false,
            titleTip: '正在拼命获取中'
          })
        }
      },
      fail: function () {
        console.log('系统错误')
      }
    })


    wx.stopPullDownRefresh()
  },
  onReachBottom:function () {
    var that = this;
    console.log(that.data.hasAll);
    if(!that.data.hasAll){
      wx.request({
        url: common.url+'/app/station/order-history',
        method: 'POST',
        data: {
          gas_station_id: that.data.gas_station_id,
          page: that.data.page + 1
        },
        success: function (data) {
          var res = common.changeData(data.data);
          console.log(res);
          if(res.retcode==1){
            if(res.data.nowPage>=res.data.totalPage){
              that.setData({
                hasAll: true
              })
            }else{
              that.setData({
                hasAll: false
              })
            }
            var newitemsLength = that.data.items.concat(res.data.orderTemp)
            that.setData({
              items: newitemsLength,
              itemsLength: newitemsLength.length,
              page: that.data.page + 1
            })
          }
        },
        fail: function () {
          console.log('系统错误')
        }
      })
    }else{
      that.setData({
        titleTip: '数据加载完毕'
      })
    }
  },
})
