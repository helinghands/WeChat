//index.js
//获取应用实例
const app = getApp()
var initData = 'this is first line\nthis is second line';
var extraLine = [];
Page({
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    text: initData,
    iconSize:[20,30,40,50,60,70],
    iconColor: ['red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'],
    iconType: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'],
    nodes:[{
      name:"div",
      attrs:{
        class:"div_class",
        style:"line-height:60px;color:red;"
      },
      children:[{
        type:"text",
        text:"Hello&nbsp;World"
      }]
    }],
    disabled:false
  },
  add(){
    extraLine.push("other line");//push()方法用于向数组的末尾添加一个或多个元素，返回新的长度
    this.setData({
      text:initData + "\n" + extraLine.join("\n")
    })
  },
  remove(){
    if(extraLine.length>0){
      extraLine.pop();
      this.setData({
        text: initData + "\n" + extraLine.join("\n")
      })
    }
  },
  tap(){
    console.log("tap")
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.name)
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})
