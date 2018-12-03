//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    contentItems:[
      { src: "../../images/phone1.jpg", name: "魅族PRO7", id: "1"},
      { src: "../../images/phone2.jpg", name: "魅族15", id: "2"},
      { src: "../../images/phone3.jpg", name: "魅族PRO7 Plus", id: "3"},
      { src: "../../images/phone4.jpg", name: "魅族PRO6 Plus", id: "4"}
    ],
    listItem:[
      { imgSrc: "../../images/phoneContent1.jpg", avatarSrc: "../../images/avatar1.jpg", topic: "魅族MX6", info: "强韧性能，持久动力，PRO7标准版搭载了共性能低功耗的Helio P25处理器，PRO7高配版及PRO7 Plus则采用了更先进的10纳米制程工艺的HElio X30处理器" },
      { imgSrc: "../../images/phoneContent2.jpg", avatarSrc: "../../images/avatar2.jpg", topic: "魅族MX", info: "强韧性能，持久动力，PRO7标准版搭载了共性能低功耗的Helio P25处理器，PRO7高配版及PRO7 Plus则采用了更先进的10纳米制程工艺的HElio X30处理器" },
      { imgSrc: "../../images/phoneContent3.jpg", avatarSrc: "../../images/avatar3.jpg", topic: "魅族PRO7", info: "强韧性能，持久动力，PRO7标准版搭载了共性能低功耗的Helio P25处理器，PRO7高配版及PRO7 Plus则采用了更先进的10纳米制程工艺的HElio X30处理器" }, 
      { imgSrc: "../../images/phoneContent4.jpg", avatarSrc: "../../images/avatar4.jpg", topic: "魅族PRO6 plus", info: "强韧性能，持久动力，PRO7标准版搭载了共性能低功耗的Helio P25处理器，PRO7高配版及PRO7 Plus则采用了更先进的10纳米制程工艺的HElio X30处理器" }
    ],
  },
  showInfo:function(event){
    console.log(event)
  }
})
