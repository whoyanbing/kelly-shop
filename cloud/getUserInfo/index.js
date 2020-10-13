const cloud = require('wx-server-sdk')
// 初始化 cloud
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = async (data) => {
  const db = cloud.database()
  const wxContext = cloud.getWXContext()
  const userExists = await db.collection('users').where({
    openid: wxContext.OPENID
  }).get()
  if (userExists.data.length == 0) {
    const res = await db.collection('users').add({
      data: {
        openid: wxContext.OPENID,
        create_time: new Date(),
        ...data
      }
    })
    if (res) {
      return {
        openid: wxContext.OPENID,
        ...res
      }
    }
  }
  return {
    openid: wxContext.OPENID
  }
}

