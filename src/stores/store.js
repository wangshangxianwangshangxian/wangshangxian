const essays = [
  {
    id: '0a48aaa885df8843935bbc8fb3a7f94b4ffd387c9dd5f0652c538baaf7d066c3',
    create_time: '2024-05-28 20:09',
    title: '法律会制裁他们，但也会给他们机会'
  },
  {
    id: '0a48aaa885df8843935bbc8fb3a7f94b4ffd387c9dd5f0652c538baaf7d066c3',
    create_time: '2024-05-28 20:09',
    title: '迎接30岁'
  }
]

const getEssayList = () => {
  return essays
}

const getEssayInfo = id => {
  const info = essays.find(row => row.id === id)
  return info
}

export default {
  getEssayList,
  getEssayInfo
}