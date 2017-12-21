var common={};
common.validFrom = function (type,value,notice){
  if (type=="telephone") {
    var Reg=/^1(3|4|5|7|8)\d{9}$/;
    var notice='请输入正确手机号';
  }
  if(Reg != undefined){
    var res = Reg.test(value);
    if(!res){
      return 'true'
    }else{
      return 'false'
    }
  }
}
module.exports = common;