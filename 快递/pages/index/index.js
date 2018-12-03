//index.js
//获取应用实例
const app = getApp()

Page({
  item1Click:function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  }, 
  item2Click: function () {
    wx.redirectTo({
      url: 'pages/logs/logs'
    })
  }
})
