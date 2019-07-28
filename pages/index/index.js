//index.js
//获取应用实例
Page({
  data:{
    longitude: 0,
    latitude: 0,
  },
  bindcontroltap(e){
    switch(e.controlId){
      case 1 :
        this.movetoCenter();
        break;
      case 2 : 
      if(this.time){
        wx.navigateBack({
          delta: 1,
        });
        // this.time = false;
      }else {
        wx.scanCode({
          success: (res) => {
            wx.showLoading({
              title: '正在获取密码',
            })
            wx.request({
              url: 'https://www.easy-mock.com/mock/5cd00d021a017c31e9caf6a3/ofo/ofo',
              success: (res) => {
                wx.hideLoading();
                wx.redirectTo({
                  url: '/pages/logs/logs?password=' + res.data.data.password + '&number=' + res.data.data.Number,
                  success: (res) => {
                    wx.showToast({
                      title: '获取密码成功',
                      duration: 1000
                    })
                  },
                });
              }
            })
          },
        });
      }
      break;
      case 3 :
        wx.navigateTo({
          url: '../wran/wran'
        })
        break;
      case 4 : 
      wx.navigateTo({
        url: '../my/my'
      })
    }
  },
  onLoad: function(options){
    this.time = options.timer;
    wx.getLocation({
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,
        })
      }
    });
    wx.getSystemInfo({
      success: (res)=>{
        this.setData({
          controls:[{
            id: 1,
            iconPath: "/imges/dinwei.png",
            position:{
              width: 50,
              height: 50,
              left: 20,
              top: res.windowHeight - 80
            },
            clickable: true,
          },
          {
            id: 2,
            iconPath: "/imges/shaomiao.png",
            position:{
              width: 90,
              height: 90,
              top: res.windowHeight - 100,
              left: res.windowWidth/2 - 45
            },
            clickable: true,
          },
        {
          id: 3,
          iconPath: "/imges/help.png",
          position:{
            width: 50,
            height: 50,
            top: res.windowHeight - 80,
            left: res.windowWidth - 70
          },
          clickable: true,
        },
      {
        id: 4,
        iconPath: "/imges/ren.png",
        position: {
          width: 50,
          height: 50,
          top: res.windowHeight - 155,
          left: res.windowWidth - 70
        },
        clickable: true,
      },
      {
        id: 5,
        iconPath: "/imges/ding.png",
        position: {
          width: 30,
          height: 30,
          top: res.windowHeight/2 - 45,
          left: res.windowWidth/2 - 15
        },
      }
    ]
        })
      },
    });
    //页面加载
  },
  onShow: function(){
    this.mapctx = wx.createMapContext("ofo-map");
    //页面显示
  },
  movetoCenter: function(){
    this.mapctx.moveToLocation();
  },
  onReady: function(){
    //页面渲染完成
  },
  onHide: function(){
    //页面隐藏
  },
  onUnload: function(){
    //页面卸载
  }
})