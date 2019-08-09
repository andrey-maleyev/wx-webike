// pages/trip/trip.js
Page({
  /**
   * Page initial data
   */
  data: {
    timer_seconds: 1
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    let page = this
    const timer = setInterval(function (e) {
      page.setData({ timer_seconds: page.data.timer_seconds + 1 })
      console.log(page.data.timer_seconds)
      if (page.data.timer_seconds === 40) {
      console.log("hit")
      clearInterval(timer)
       }
    }, 1000)

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

  },
  goToMain: function () {
    setTimeout(function () {
        wx.navigateTo({
          url: '/pages/main/main',
        }) 
      },
      500
    );
  }
})
