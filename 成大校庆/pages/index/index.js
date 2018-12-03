//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgColor:'red',
    number:88
  },
  onShareAppMessage() {
    return {
      title: '成都大学捐赠',
      path: '/pages/index/index'
    }
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  changeColor:function(e){
    console.log(e);
    this.setData({
      bgColor:'blue',
      number:66
    });
  }
})
