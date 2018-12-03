//logs.js
const util = require('../../utils/util.js')

Page({
  data:{
    address:"点击选择，要勾选哦"
  },
  staticData:{
    type:"buy",
    succss:"false"
  },
  onShareAppMessage() {
    return {
      title: '发布信息',
      path: '/pages/publish/publish'
    }
  },
  handleAddressClick(){
    wx.chooseLocation({
      success:this.handleChooseLocationSucc.bind(this)
    })
  },
  handleChooseLocationSucc(res){
    console.log(res);
    this.setData({
      address:res.address
    });
    Object.assign(this.staticData,{
      latitude:res.latitude,
      longtitude: res.longtitude
    })
  }, 
  handleTapChange(e){
    this.staticData.type = e.detail.value;
    console.log(this.staticeData);
    console.log(this.data);
    console.log(e.detail.value)
  },
  handleContactChange(e){
    this.staticData.contact = e.detail.value
  },
  handleMessageChange(e){
    this.staticData.message = e.detail.value
  },
  handleSunmit(){
    if (this.data.address === "点击选择，要勾选哦" || !this.data.address){
      // 微信的警告窗
      wx.showToast({
        title: '请填写地址',
        icon:"loading",
        duration:2000
      })
      return;
    }
    if(!this.staticData.message){
      wx.showToast({
        title: '请填写说明信息',
        icon: "loading",
        duration: 2000
      })
      return;
    }
    if (!this.staticData.contact) {
      wx.showToast({
        title: '请填写联系人信息',
        icon: "loading",
        duration: 2000
      })
      return;
    }
    const data = Object.assign({},this.staticData,{
      address: this.data.address,
      distinct:"allan_course"//唯一字符串，避免数据不冲突
    })
    wx.request({
      url: '/php/test.php', //仅为示例，并非真实的接口地址
      data: data,
      method:"POST",
      header: {
        'content-type': 'application/application/x-www-form-urlencoded' // 默认值
      },
      success: this.handleSubmitSucc.bind(this)
    })
  },
  handleSubmitSucc(res){
    if(res.data && res.data.ret){
      success:true
    }
  },
  handleBackTap(){
    wx.navigateBack({
      delta: 1
    })
  }
})
