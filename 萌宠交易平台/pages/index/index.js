//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    a:1,
    b:2,
    name:"奶油味拥抱",
    message:{
      name:"allan",
      age:10
    },
    item:{
      index:0,
      msg:"this is a template",
      time:"2018-05-10"
    },
    items:[1,2,3,4],
    show:false,
    otherMessage:"allan",
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    zero:0
  },
  handleTap(){
    // 通过setData()改变data里面的数据
    this.setData({
      otherMessage:"dennis"
    })
  },
  changeName(){
      this.setData({
        name:"allan"
      })
  },
  changeMessageName:function(){
    this.setData({
      message: {
        name: "微信小程序"
      }
    })
  }
})
