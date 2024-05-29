<template>
  <div class="box">
    <div class="container">
      <h1 :contenteditable="caneEdit" @input="onessayedit">{{ essay.title }}</h1>
      <p :contenteditable="caneEdit" @input="ontimeedit">{{ essay.create_time }}</p>
      <div class="content-box w--text" :contenteditable="caneEdit" @blur="oncontentedit" v-html="essay.content"></div>
      <footer>
        <button @click="onHome">🏠 返回王尚贤的主页</button>
        <button v-if="caneEdit" @click="oneditok">🌂 确定编辑完毕！</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import router from '@/router';
import { post } from '@/utils/network';
import axios from 'axios';

const getUrlParam = (key) => {
  return location.hash
    ?.split('?')[1]
    ?.split('&')
    ?.find((t) => t.split('=')[0] === key)
    ?.split('=')[1]
}

const edit = getUrlParam('edit')
const caneEdit = edit === 'true'

const essay = reactive({
  no         : location.hash.replace('#/blog/', '').split('?')[0],
  title      : caneEdit ? 'title' : '',
  create_time: caneEdit ? '0000-00-00 00:00:00' : '',
  content    : caneEdit ? 'content' : ''
})

const get_essay = () => {
  const url = `https://env-00jxgnx7m729.dev-hz.cloudbasefunction.cn/get-essay?no=${essay.no}`
  axios.get(url).then(resp => resp.data).then(resp => {
    if (resp.code === 0) {
      essay.no = resp.data.no
      essay.title = resp.data.title
      essay.create_time = resp.data.create_time
      essay.content = resp.data.content
    }
  })
}

get_essay()

const onHome = () => {
  router.push('/')
}

const oneditok = () => {
  const url = 'https://env-00jxgnx7m729.dev-hz.cloudbasefunction.cn/edit-essay'
  post(url, essay).then(resp => {
    console.log(resp)
    if (resp.code === 0) {
      alert('ok!')
    }
  })
}

const onessayedit = e => {
  essay.title = e.target.textContent
}

const ontimeedit = e => {
  essay.create_time = e.target.textContent
}

const oncontentedit = e => {
  essay.content = e.target.innerHTML
}
</script>

<style scoped>
.box {}

.container {
  display: flex;
  flex-direction: column;
  gap: 16rem;
}

h1 {
  font-size: 20rem;
  outline: none;
}

/* .container > p {
  font-size: 14rem;
} */

.container {
  max-width: 900rem;
  margin: 0 auto;
  padding: 80rem 16rem;
  /* background-color: aliceblue; */
}

.container>div {
  line-height: 2;
  letter-spacing: 1.3rem;
  white-space: pre-wrap;
}

.content-box {
  min-height: 100vh;
}

footer {
  display: flex;
  gap: 20rem;
}
</style>