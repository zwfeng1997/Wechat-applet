// pages/wran/wran.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: {
      num: 0,
      desc: ''
    },
    picUrls: [],
    checkboxValues:[],
    actionText: '拍摄/相册',
    btnColor: '#f2f2f2',
    itemsValue:[
      {
        value: '私锁私用',
        checked: false,
        color: "#b9dd08"
      },
      {
        value: '车牌缺损',
        checked: false,
        color: "#b9dd08"
      },
      {
        value: '轮胎坏了',
        checked: false,
        color: "#b9dd08"
      },
      {
        value: '车锁坏了',
        checked: false,
        color: "#b9dd08"
      },
      {
        value: '违规乱停',
        checked: false,
        color: "#b9dd08"
      },
      {
        value: '密码不对',
        checked: false,
        color: "#b9dd08"
      },
      {
        value: '刹车坏了',
        checked: false,
        color: "#b9dd08"
      },
      {
        value: '其他故障',
        checked: false,
        color: "#b9dd08"
      },
  ]
  },
  changeCheckbox(e){
    var _value = e.detail.value;
    console.log(_value);
    if(_value.length == 0){
      this.setData({
        btnColor: '#f2f2f2',
        checkboxValues: []
      })
    }else{
      this.setData({
        btnColor: '#b9dd08',
        checkboxValues: _value,
      })
    }
  },
  clickPhoto() {
    wx.chooseImage({
      success: (res) => {
        var _picUrls = this.data.picUrls;
        var _tfs = res.tempFilePaths;
        for (let temp of _tfs) {
          _picUrls.push(temp);
          this.setData({
            picUrls: _picUrls,
            actionText: '+'
          })
        }
      },

    })
  },
  delPic(e){
    let index = e.target.dataset.index;
    let _picUrls = this.data.picUrls;
    _picUrls.splice(index,1);
    this.setData({
      picUrls: _picUrls,
    })
    if(_picUrls.length == 0){
      this.setData({
        actionText: '拍摄/相册',
      })
    }
  },
  changeNum(e){
    this.setData({
      inputValue: {
        num: e.detail.value,
        desc: this.data.inputValue.desc,
      }
    })
  },
  changeDesc(e){
    this.setData({
      inputValue: {
        num: this.data.inputValue.num,
        desc: e.detail.value,
      }
    })
  },
  submit(){ 
    if(this.data.picUrls.length>0 && this.data.checkboxValues.length){
      wx.request({ 
        url: 'https://www.easy-mock.com/mock/5cd00a3c1a017c31e9caf686/example/succes',
        success: (res) => {
          console.log(res);
          wx.showToast({
            title: '提交成功',
            icon: 'success',
          });
          wx.redirectTo({
            url: '../index/index',
          })
        }
      })
    }else{
      wx.showModal({
        title: '请填写完整的反馈信息',
        content: '去填写？',
        showCancel: true,
        cancelText: '任性不去',
        cancelColor: '#000000',
        confirmText: '乖乖填写',
        confirmColor: '#3CC51F',
        success: (result) => {
          if(result.confirm){
            
          }else{
            wx.navigateBack({
              delta: 1
            });
          }
        },
      });
    }
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

  }
})