// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp()
    // while(!userInfo) {
     
    // let page = this 
    // page.setData (nickName)
   const page = this 
   wx.request({
     url: `http://webikechengdu.herokuapp.com/api/v1/users/1`,
     method: 'GET',
     success: res => {
       const money = res.data.money
       const userInfo = app.globalData.userInfo
       const nickName = userInfo.nickName
       const avatarUrl = userInfo.avatarUrl
       let page = this
       page.setData({nickName})
       page.setData({avatarUrl})
       page.setData({money})
     }
   })
  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // let userInfo = getApp().globalData.userInfo
    // console.log(getApp().globalData)
    // const nickName = userInfo.nickName
    // console.log(nickName)
    // let page = this 
    // page.setData({nickName})
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

  },
  goToMain: function () {
    wx.navigateTo ({
      url:'/pages/main/main'
    })
  }

})