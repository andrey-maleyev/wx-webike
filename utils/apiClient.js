const baseUrl = "http://webikechengdu.herokuapp.com/api/v1/"

const getBikes = options => {
  const { success, fail } = options

  return wx.request({
    url: baseUrl + 'bikes',
    method: "get",
    success,
    fail
  })
}

export default {
  getBikes
}
