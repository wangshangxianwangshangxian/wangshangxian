<template>
  <div>
    <div class="box font-serif">
      <div class="h-dvh flex flex-col justify-center items-center">
        <p class="text-2xl">王尚贤</p>
        <p class="text-sm">🔗 <a href="https://www.wangshangxian.com">wangshangxian.com</a></p>
        <p class="text-sm">💬 讲普通话，但更爱用粤语交流</p>
        <p class="text-sm" @click="onclickedit(5)">😄 在深圳长大的惠州人，1994年来到地球</p>
        <p class="text-sm" @click="onclickedit(4)">⌨️ 写代码很酷，它不仅仅是工作，更是伙伴</p>
        <p class="text-sm" @click="onclickedit(3)">🚗 理想的生活是旅居，驾驶在路上</p>
        <p class="text-sm" @click="onclickedit(2)">🍣 每个人的人生剧本都不同，纵情演好它</p>
        <p class="text-sm" @click="onclickedit(1)">🌎 极简主义</p>
        <p class="text-sm">🏄 <a class="link-gov" target="_blank" href="https://beian.miit.gov.cn">粤ICP备2024180655号-1</a></p>
      </div>
      <ul class="flex flex-col min-h-screen">
        <li class="hover:bg-sky-50 px-4 py-8 rounded" v-if="edit_mode">
          <div class="flex justify-between">
            <p>{{ this_time }}</p>
            <div class="flex gap-x-3" v-show="edit_mode">
              <span v-if="edit_loading">loading</span>
              <button :disabled="edit_loading" @click="on_add_mood" class="bg-green-500 px-2 rounded hover:bg-green-600 disabled:cursor-not-allowed text-white">submit</button>
            </div>
          </div>
          <div :contenteditable="edit_mode" ref="new_mood" class="outline-none" v-html="new_mood_value" @blur="on_new_mood_blur"></div>
        </li>
        <li v-for="item in moods" :key="item.no" class="hover:bg-sky-50 p-4 rounded">
          <div class="flex justify-between">
            <p>{{ item.create_time }}</p>
            <div class="flex gap-x-3" v-show="edit_mode === true">
              <span v-if="edit_loading">loading</span>
              <button :disabled="edit_loading" class="disabled:cursor-not-allowed text-red-500 hover:bg-gray-300 px-2 rounded" @click="on_del_mood(item)">delete</button>
              <button :disabled="edit_loading" @click="on_update_mood(item)" class="bg-green-500 px-2 rounded hover:bg-green-600 disabled:cursor-not-allowed text-white">submit</button>
            </div>
          </div>
          <div :contenteditable="edit_mode" class="outline-none" v-html="item.content" @blur="e => item.content = e.target.innerHTML"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { nextTick, onMounted, onUnmounted, reactive, ref } from 'vue'

const edit_mode = ref(false)
const new_mood = ref(null)
const edit_loading = ref(false)
const onkeydown = event => {
  if (event.ctrlKey && event.shiftKey && event.key === 'P') {
    edit_mode.value = !edit_mode.value
    nextTick(() => {
      edit_mode.value && new_mood.value.focus()
    })
  }
}

let edit_passwords = []
const onclickedit = step => {
  edit_passwords.push(step)
  const password = edit_passwords.slice(-5).join('')
  if (password === '12345') {
    edit_mode.value = true
  }
  else if (password === '54321') {
    edit_mode.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', onkeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onkeydown)
})

const set_mood = (no, create_time, content) => {
  const url = 'https://env-00jxgnx7m729.dev-hz.cloudbasefunction.cn/set-mood'
  const data = { no, create_time, content }
  edit_loading.value = true
  axios.post(url, data).then(resp => resp.data).then(resp => {
    edit_loading.value = false
    if (resp.code !== 0) {
      alert(resp.message)
      return
    }

    edit_mode.value = false
    new_mood_value.value = ''
    location.reload()
  })
}

function generateRandomHexString(length) {
    var result = '';
    var characters = '0123456789abcdef';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const on_add_mood = () => {
  const no = generateRandomHexString(40)
  const create_time = this_time.value
  const content = new_mood_value.value
  set_mood(no, create_time, content)
}

const on_update_mood = info => {
  const no = info.no
  const create_time = info.create_time
  const content = info.content
  set_mood(no, create_time, content)
}

let time_timer = null
const this_time = ref('')
const new_mood_value = ref('')
const update_this_time = () => {
  const d = new Date()
  const year = d.getFullYear()
  const mon  = String(d.getMonth() + 1).padStart('2', 0)
  const day  = String(d.getDate()).padStart('2', 0)

  const hour = String(d.getHours()).padStart('2', 0)
  const min  = String(d.getMinutes()).padStart('2', 0)
  const sec  = String(d.getSeconds()).padStart('2', 0)
  this_time.value = `${year}-${mon}-${day} ${hour}:${min}:${sec}`
}
onMounted(() => {
  time_timer = setInterval(() => {
    update_this_time()
  }, 100);
})
onUnmounted(() => {
  clearInterval(time_timer)
})

const on_new_mood_blur = e => {
  new_mood_value.value = e.target.innerHTML
}


const moods = reactive([])
const mood_loading = ref(false)
const get_moods = (start, end) => {
  if (mood_loading.value === true) {
    return
  }
  mood_loading.value = true
  const url = `https://env-00jxgnx7m729.dev-hz.cloudbasefunction.cn/get-mood-list?start=${start}&end=${end}`
  axios.get(url).then(resp => resp.data).then(resp => {
    if (resp.code !== 0) {
      alert('get mood list error!')
      return
    }

    moods.push(...resp.data)
  })
  .finally(() => {
    mood_loading.value = false
  })
}

const on_del_mood = info => {
  const flag = confirm(`Are you sure to delete this mood:\n\n${info.content.slice(0, 17).padEnd(20, '...')}`)
  if (!flag) {
    return
  }
  const url = 'https://env-00jxgnx7m729.dev-hz.cloudbasefunction.cn/del-moods'
  const data = {
    no_list: [info.no]
  }
  edit_loading.value = true
  axios.post(url, data).then(resp => resp.data).then(resp => {
    edit_loading.value = false
    if (resp.code !== 0) {
      alert(resp.message)
      return
    }

    const index = moods.findIndex(info => info.no === info.no)
    moods.splice(index)
  })
}

// 滚动
const onscroll = e => {
  const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement
  if (scrollTop + clientHeight >= scrollHeight) {
    const start = moods.length
    const end = start + 10
    get_moods(start, end)
  }
}
onMounted(() => {
  window.addEventListener('scroll', onscroll)
  const start = moods.length
  const end = start + 10
  get_moods(start, end)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onscroll)
})
</script>

<style scoped>
.box {
  margin: 0 auto;
  max-width: 600px;
}
</style>