//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    longitude:"",
    latitude:"",
    controls: [{
      iconPath: '/resources/pin.png',
      position: {
        left: (app.globalData.windowWidth/2)-25,
        top: ((app.globalData.windowHeight-40)/2)-25,
        width: 50,
        height: 50
      },
      clickable: true
    },
    //  实现点击回到图片中心位置
    {
      id: 1,
      iconPath: '/resources/center.png',
      position: {
        left: 20,
        top: app.globalData.windowHeight - 90,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onShareAppMessage(){
    return {
      title: '萌宠交易平台',
      path: '/pages/index/index'
    }
  },
  onShow(){
    this.getLocation();
  },
  onReady(){
    this.mapCtx = wx.createMapContext("map");
  },
  getLocation(){
    wx.getLocation({
      type: 'gcj02',
      success: this.handleGetLoationSucc.bind(this)
    })
  },
  handleGetLoationSucc(res){
    this.setData({
      longitude: res.longitude,
      latitude: res.latitude
    })
  },
  controltap(e) {
    this.mapCtx.moveToLocation();
  },
})
