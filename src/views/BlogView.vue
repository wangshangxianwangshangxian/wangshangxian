<template>
  <div class="box">
    <div class="container">
      <h1>{{ essay.title }}</h1>
      <p>{{ essay.create_time }}</p>
      <div class="content-box w--text">{{ essay.content }}</div>
      <footer>
        <button @click="onHome">🏠 返回主页</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import store from '@/stores/store'
import router from '@/router';

const essay = reactive({
  id: '',
  title: '',
  create_time: '',
  content: ''
})


const blog_id = location.hash.split("?")[0].replace("#/blog/", '')
const { id, title, create_time } = store.getEssayInfo(blog_id) || {}

essay.id = id
essay.title = title
essay.create_time = create_time

const file_path = `src/stores/${id}.txt`
fetch(file_path).then(resp => resp.text()).then(content => {
  essay.content = content
})


const onHome = () => {
  router.push('/')
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
</style>