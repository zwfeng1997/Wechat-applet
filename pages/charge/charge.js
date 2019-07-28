// pages/charge/charge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  charge(){
    if(this.data.money<=0 || isNaN(this.data.money)){
      wx.showModal({
        title: '充值失败',
        content: '请输入正确金额',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
      });
    }else{
      wx.getStorage({
        key: 'overage',
        success: (result)=>{
          wx.setStorage({
            key: 'overage',
            data: parseInt(result.data) + parseInt(this.data.money),
          })
        },
        fail: () => {
          wx.setStorage({
            key: 'overage',
            data: this.data.money,
          });
        }
      });
      wx.redirectTo({
        url: '../wallet/wallet',
      });
    }
  },
  input(e){
    this.setData({
      money: e.detail.value,
    })

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