import axios from "axios"

export const post = (url, data) => {
  return axios.post(url, data)
    .then((resp) => {
      // const tmp = JSON.parse(resp.request.responseText)
      const tmp = resp.data
      return tmp
    })
}

export const get = (url, data) => {
  return axios.get(url)
  .then(resp => {
    const tmp = resp.data
    return tmp
  })
}
// 写一段冒泡算法
