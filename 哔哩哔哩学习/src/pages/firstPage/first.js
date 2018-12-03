var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    text:'这是一个文本',
    show:true,
    news: ['aaa', 'bbb', 'ccc']
  },
  /**
   * 动态修改内容
   */
  btnclick:function(){
    console.log("按钮被点击")
    var isShow = this.data.show;
    console.log("isShow:"+isShow);
    var newsdata = this.data.news;
    newsdata.shift();//删除列表的第一个元素
    this.setData({ text: "这是一个新的内容", show: !isShow,news:newsdata})
  },
  view1click:function(event){
    console.log("view1click")
    console.log(event)
  },
  view2click: function (event) {
    console.log("view2click")
    console.log(event)
  },
  view3click: function (event) {
    console.log("view3click")
    console.log(event)
  }
}
Page(pageObject)