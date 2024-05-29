import axios from "axios"

export const post = (url, data) => {
  const headers = {
    'Content-Type': 'application/json'  // 设置请求头
  }
  return axios.post(url, data, headers)
    .then((resp) => {
      // const tmp = JSON.parse(resp.request.responseText)
      const tmp = resp.data
      return tmp
    })
}