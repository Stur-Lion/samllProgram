//index.js
//获取应用实例
const app = getApp()
import city from './city'

Page({
  data: {
    region: ["北京市", "市辖区"], /* 默认城市选择 */
    cityArray:city,
    multiArray: [],
    townArr:[], /* 市 数据 */
    provinceArr:[], /* 省 数据 */
    logoUrl:'../images/sanjiao.png',
    index: 0,
    operator:['中国联通','中国移动','中国电信'],
    bandwidth:['2Gbps','4Gbps','8Gbps'],
    cpu:['型号A','型号B','型号C'],
    memory:['2GB','4GB','8GB'],
    disksize:['SSR','AAR','WWW'],
    systemtype:['WinXP','Win7','Win8','Win10'],
    port:[
      {name: 'yes', value: '是'},
      {name: 'no', value: '否'}
    ],
    ipmi:[
      {name: 'yes', value: '是'},
      {name: 'no', value: '否'}
    ]
  },
  onLoad:function () {
    /* 城市选择 */
    var provinceArr = [];
    for(var k in city){
      provinceArr.push(k)
    }
    this.setData({
      multiArray: [provinceArr,city['北京市']],
      provinceArr:provinceArr
    })
  },
  bindMultiPickerColumnChange: function (e) {
    if(e.detail.column==0){
      var provinceNameChoose = this.data.multiArray[0][e.detail.value];
      var townArr = city[provinceNameChoose];
      var multiArray = this.data.multiArray;
      multiArray[1] = townArr
      this.setData({
        multiArray: multiArray,
        townArr:townArr
      })
    }
  },
  bindMultiPickerChange:function (e) {
    var chooseArr = e.detail.value;
    this.setData({
      region:[
        this.data.provinceArr[chooseArr[0]],
        this.data.townArr[chooseArr[1]]]
    })
  },
  operatorPickerChange: function () {

  },
  portradioChange:function (e) {
    console.log(e);
  },
  ipmiradioChange:function () {
    console.log(e);
  },
  submitForm:function () {

  }
})
