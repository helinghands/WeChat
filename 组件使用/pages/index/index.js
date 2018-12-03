//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    dots:true,
    autoplay:true,
    interval:1000,
    scrollTop:0,
    intoview:""
  },
  scrolltoupper: function(event){
    console.log(event)
  },
  scrolltolower:function(event){
    console.log(event)
  },
  scroll:function(event){
    console.log(event)
  },
  click:function(){
    this.setData({
      // scrollTop: this.data.scrollTop+10,
      intoview:"yellow"
    })
  }
})
