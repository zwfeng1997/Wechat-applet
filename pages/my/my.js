// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      userUrl: '',
      nickname: '未登录'
    },
    actionText: '登录',
    btnType: 'primary'
  },
  login(e) {
    if (this.data.actionText == '登录') {
      console.log(e.detail.userInfo);
      this.setData({
        userInfo:{
          userUrl: e.detail.userInfo.avatarUrl,
          nickname: e.detail.userInfo.nickName,
        },
        actionText: '退出登录',
        btnType: 'warn'
      })
      wx.setStorage({
        key: 'userInfo',
        data: {
          userInfo:{
            userUrl: e.detail.userInfo.avatarUrl,
            nickname: e.detail.userInfo.nickName,
          },
          actionText: '退出登录',
          btnType: 'warn'
        },
        success: (res)=>{
          
        },
      });
    } else {
      wx.removeStorageSync("userInfo");
      this.setData({
        userInfo: {
          userUrl: '',
          nickname: '未登录'
        },
        actionText: '登录',
        btnType: 'primary'
      })
    }
  },
  movetoWallet(){
    wx.navigateTo({
      url: '../wallet/wallet',
      success: (res)=>{
        
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (result)=>{
        this.setData({
          userInfo:{
            userUrl: result.data.userInfo.userUrl,
            nickname: result.data.userInfo.nickname,
          },
          actionText: result.data.actionText,
          btnType: result.data.btnType
        }) 
      },
    });
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