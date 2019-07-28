//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    time: 9
  },
  onLoad: function (option) {
    this.setData({
      password: option.password,
    })
    let time = 9;
    this.timer = setInterval(() => {
      this.setData({
        time: time--,
      });   
      if(time <= 0){
        clearInterval(this.timer);
        wx.redirectTo({
          url: '../billing/billing?number='+option.number,
        })
      }
    },1000)
  }
})
