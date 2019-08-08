import apiClient from "../../utils/apiClient.js"

Page({

  /**
   * Page initial data
   */
  data: {
      sc: '14'
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    const page = this

    wx.getLocation({
      type: 'wgs84', // **1
      success: function (res) {
        const lt = res.latitude
        const lg = res.longitude
        page.setData({ lt, lg })
      }
    })

    const options = {
      success: function (res) {
        const bikes = res.data.bikes
        bikes.forEach(function(bike) {
          bike.iconPath = "../images/bike_40px.png"
          bike.width = 28
          bike.height = 35
        })
        page.setData({
          bikes
        })
      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.getBikes(options)
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

  },
  goToTrip: function() {
    wx.navigateTo({
      url: '/pages/trip/trip',
    })
  },
  goToProfile: function () {
    wx.navigateTo({
      url: '/pages/profile/profile',
    })
  }
})