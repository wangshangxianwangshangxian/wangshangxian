<template>
  <div class="box">
    <div class="box">
      <div class="container">
        <h1>王尚贤</h1>
        <div>
          🧒 介绍一下我自己<br />
          1994年来到地球，在深圳长大的惠州人，讲标准普通话，喜欢用粤语对话，客家话麻麻地。
          写代码很酷，它不仅仅是工作同时也是爱好，理想的生活是旅居，喜欢驾驶在路上的感觉。<br /><br />

          🍣 我这这个世界对看法(人生观)<br />
          人生就是一场体验，每个人的剧本都不一样，真情感受，把它演好。<br /><br />

          🐦 极简主义<br />
          一件事情的最开始，它通常只有一个需求，非必要不添加，博客风格亦是如此，一面白墙，一段文字足以。
          如果可以的话，我希望我未来的书房也能简单到爆---铺上木地板，两面白墙一面落地窗，中间只有一张桌子。<br /><br />

          🚗 冲浪车牌号<br />
          <a class="link-gov" target="_blank" href="https://beian.miit.gov.cn">粤ICP备2024180655号-1</a>
        </div>
        <div v-if="caneEdit">
          <button @click="onaddessay">🦀写一篇新文章</button>
        </div>
        <ul>
          <li v-for="row in essays" :key="row.no" @click="onEssayClick(row)">
            <div>{{ row.title }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import axios from "axios";
import { reactive } from "vue";


const getUrlParam = (key) => {
  return location.hash
    ?.split('?')[1]
    ?.split('&')
    ?.find((t) => t.split('=')[0] === key)
    ?.split('=')[1]
}

const edit = getUrlParam('edit')
const caneEdit = edit === 'true'

const essays = reactive([])
const url = 'https://env-00jxgnx7m729.dev-hz.cloudbasefunction.cn/get-essay-list'
axios.get(url).then(resp => resp.data).then(resp => {
  if (resp.code === 0) {
    resp.data = resp.data.sort((a, b) => {
      const adata = new Date(a.create_time)
      const bdata = new Date(b.create_time)
      return bdata.getTime() - adata.getTime()
    })
    resp.data.forEach(row => {
      essays.push(row)
    })
  }
})

const onEssayClick = essay => {
  router.push(`/blog/${essay.no}`)
}

function generateRandomString(length) {
  const characters = '0123456789abcdef';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

const onaddessay = () => {
  const no = generateRandomString(64)
  router.push(`/blog/${no}?edit=true`)
}

</script>

<style scoped>
.box {}

.container {
  max-width: 900rem;
  margin: 0 auto;
  padding: 80rem 16rem;
  /* background-color: aliceblue; */
}

h1 {
  font-size: 28rem;
  text-decoration: none;
  outline-style: none;
  list-style: none;
  outline: none;
}

.container>div {
  margin: 64rem 0;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 8rem;
}

ul li {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 20rem;
}

ul li div:nth-child(1) {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
}

ul li div:nth-child(2) {
  overflow: hidden;
  white-space: nowrap;
}
</style>