const getUrlParam = (key) => {
  return location.hash
    .split('?')[1]
    .split('&')
    .find((t) => t.split('=')[0] === key)
    .split('=')[1]
}

export default {
  getUrlParam
}
