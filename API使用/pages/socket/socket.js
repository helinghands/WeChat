Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages:["hahaha"]
  },
  openBtnClick:function(){
    wx.connectSocket({
      url: 'ws://localhost:8080/WebSocketDemo/websocket/1',
      data:{},
      method:"GET",
      success:function(res){
        
      },
      fail: function () {

      },
      complete: function () {

      }
    })
  }
})