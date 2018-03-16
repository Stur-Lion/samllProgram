//index.js
//获取应用实例
const app = getApp()
import city from './city'

Page({
  data: {
    cityArray:city,
    townArr:[], /* 市 数据 */
    provinceArr:[], /* 省 数据 */
    logoUrl:'../images/sanjiao.png',
    multiArray: [], /*省市集合数据*/
    region: ["北京市", "市辖区"],/* 默认地区选择 */
    operator:{/*运营商*/
      data: ['中国联通','中国移动','中国电信'],
      index: 0,
      value: '中国联通'
    },
    ip:'', /*IP地址*/
    bandwidth:{/*可用带宽*/
      data: ['2Gbps','4Gbps','8Gbps'],
      index: 0,
      value: '2Gbps'
    },
    cpu:{/*CPU*/
      data: ['型号A','型号B','型号C'],
      index: 0,
      value: '型号A'
    },
    memory:{/*内存*/
      data: ['2GB','4GB','8GB'],
      index: 0,
      value: '2GB'
    },
    disksize:{/*磁盘大小*/
      data: ['SSR','AAR','WWW'],
      index: 0,
      value: 'SSR'
    },
    disktype:'', /*磁盘类型*/
    systemtype:{/*系统类型*/
      data:['WinXP','Win7','Win8','Win10'],
      index:0,
      value: ''
    },
    port:{/*提供80端口*/
      data: [
        {name: 'yes', value: '是'},
        {name: 'no', value: '否'}
      ],
      value: ''
    },
    ipmi:{/*提供IPMI*/
      data: [
        {name: 'yes', value: '是'},
        {name: 'no', value: '否'}
      ],
      value: ''
    },
    customer:'', /*登录用户*/
    customerPassward:'', /*登录密码*/
    submitData:{

    }
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
    var submitData = this.data.submitData
    submitData.region = [
      this.data.provinceArr[chooseArr[0]],
      this.data.townArr[chooseArr[1]]
    ]
    this.setData({
      region:[
        this.data.provinceArr[chooseArr[0]],
        this.data.townArr[chooseArr[1]]
      ],
      submitData:submitData
    })
  },
  operatorPickerChange: function (e) { /*运营商*/
    var operator = this.data.operator;
    operator['index'] = e.detail.value;
    operator['value'] = operator['data'][e.detail.value];
    this.setData({
      operator:operator
    })
  },
  ipInput:function (e) { /*IP地址*/
    this.setData({
      ip:e.detail.value
    })
  },
  bandwidthPickerChange:function (e) { /*可用带宽*/
    var bandwidth = this.data.bandwidth;
    bandwidth['index'] = e.detail.value;
    bandwidth['value'] = bandwidth['data'][e.detail.value];
    this.setData({
      bandwidth:bandwidth
    })
  },
  cpuPickerChange:function (e) { /*CPU*/
    var cpu = this.data.cpu;
    cpu['index'] = e.detail.value;
    cpu['value'] = cpu['data'][e.detail.value];
    this.setData({
      cpu:cpu
    })
  },
  memoryPickerChange:function (e) { /*内存*/
    var memory = this.data.memory;
    memory['index'] = e.detail.value;
    memory['value'] = memory['data'][e.detail.value];
    this.setData({
      memory:memory
    })
  },
  disksizePickerChange:function (e) { /*磁盘大小*/
    var disksize = this.data.disksize;
    disksize['index'] = e.detail.value;
    disksize['value'] = disksize['data'][e.detail.value];
    this.setData({
      disksize:disksize
    })
  },
  normalInput:function (e) { /*磁盘类型*/
    this.setData({
      disktype:e.detail.value
    })
  },
  systemtypePickerChange:function (e) { /*系统类型*/
    var systemtype = this.data.systemtype;
    systemtype['index'] = e.detail.value
    this.setData({
      systemtype:systemtype
    })
  },
  portradioChange:function (e) {/*提供80端口*/
    var port = this.data.port;
    port['value'] = e.detail.value
    this.setData({
      port:port
    })
  },
  ipmiradioChange:function (e) {/*提供IPMI*/
    var ipmi = this.data.ipmi;
    ipmi['value'] = e.detail.value
    this.setData({
      ipmi:ipmi
    })
  },
  customerInput:function (e) {/*登录用户*/
    this.setData({
      customer:e.detail.value
    })
  },
  customerPasswardInput:function (e) {/*登录密码*/
    this.setData({
      customerPassward:e.detail.value
    })
  },
  submitForm:function (e) {/*提交*/
    var submitData = this.data.submitData;
    submitData = {
      region:this.data.region,
      operator:this.data.operator['value'],
      ip:this.data.ip,
      bandwidth:this.data.bandwidth['value'],
      cpu:this.data.cpu['value'],
      memory:this.data.memory['value'],
      disksize:this.data.disksize['value'],
      disktype:this.data.disktype,
      systemtype:this.data.systemtype['value'],
      port:this.data.port['value'],
      ipmi:this.data.ipmi['value'],
      customer:this.data.customer,
      customerPassward:this.data.customerPassward
    }
    console.log(submitData);
  }
})
