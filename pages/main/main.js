// pages/main/main.js
Page({

  /**
   * Page initial data
   */
  data: {
      sc: '16',
      mk: [
        {
          iconPath: "../images/bike_40px.png",
          id: 0,
          latitude: 30.656,
          longitude: 104.083,
          width: 40,
          height: 49
        },
        {
          iconPath: "../images/bike_40px.png",
          id: 0,
          latitude: 30.658,
          longitude: 104.082,
          width: 40,
          height: 49
        },
        {
          iconPath: "../images/bike_40px.png",
          id: 0,
          latitude: 30.650,
          longitude: 104.081,
          width: 40,
          height: 49
        }
      ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this

    wx.getLocation({
      type: 'wgs84', // **1
      success: function (res) {
        const lt = res.latitude
        const lg = res.longitude
        page.setData({ lt, lg })
      }
    })


    // wx.authorize({
    //   scope: 'scope.userLocation',
    //   success(res) {
    //     console.log(res)
    //     wx.getLocation({
    //       type: 'gcj-02',
    //       success: function (res) {
    //         const latitude = res.latitude
    //         const longitude = res.longitude

    //         // page.setData({ latitude, longitude })
    //         console.log(latitude)
    //         console.log(longitude)

    //         wx.openLocation({
    //           latitude,
    //           longitude
    //         })
    //       }
    //     })
    //   },
    //   fail(err) {
    //     console.log(err)
    //   }
    // })
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})