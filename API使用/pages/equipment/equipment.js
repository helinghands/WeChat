Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  getEquipmentInfo:function(){
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
      }
    })
  },
  getNetworkInfo:function(){
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType
        console.log(networkType)
      }
    })
  },
  callPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '13281289371' //仅为示例，并非真实的电话号码
    })
  },
  scanCode:function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  clipboardData:function(){
    wx.setClipboardData({
      data: 'data',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  getclipboardData:function(){
    wx.getClipboardData({
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  openBluetooth:function(){
    wx.startBeaconDiscovery({
      success: function (res) {
        console.log(res)
      }
    })
  },
  screenBrightness:function(){
    // wx.setScreenBrightness({
    //   value: 0.4,
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    wx.getScreenBrightness({
      success:function(res){
        console.log(res)
      }
    })
  },
  userCaptureScreen:function(){
    wx.onUserCaptureScreen(function (res) {
      console.log('用户截屏了')
    })
  },
  vibrateLong:function(){
    wx.vibrateLong({
      success:function(res){
        console.log("正在振动")
      },
      fail:function(){
        console.log("振动失败")
      }
    })
  },
  addPhoneContact:function(){
    wx.addPhoneContact({
      nickName: '陈亮',
      success:function(res){
        console.log(res.nickName)
      }
    })
  },
  wifi:function(){
    wx.startWifi({
      success: function (res) {
        console.log(res.errMsg)
      }
    })
    wx.getWifiList({
      success:function(res){
        console.log(res)
      }
    })
  }
})