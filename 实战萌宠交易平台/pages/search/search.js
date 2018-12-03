const util = require('../../utils/util.js')

const date = new Date()
const years = []
const months = []
const days = []
for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: "05",
    days: days,
    day: 28,
    value: [9999, 1, 1],
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
  },
  bindChange: function (e) {
    const val = e.detail.value;
    if (this.data.months[val[1]] < 10 || this.data.days[val[2]]<10){
      this.setData({
        year: this.data.years[val[0]],
        month: "0" + this.data.months[val[1]],
        day: "0" + this.data.days[val[2]]
      })
    } else {
      this.setData({
        year: this.data.years[val[0]],
        month: this.data.months[val[1]],
        day: this.data.days[val[2]]
      })
    }
    
  },
  onShareAppMessage() {
    return {
      title: '搜索信息',
      path: '/pages/search/search'
    }
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})