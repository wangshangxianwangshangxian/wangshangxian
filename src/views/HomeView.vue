<template>
  <div>
    <div class="box font-serif">
      <div class="h-dvh flex flex-col justify-center items-center">
        <p class="text-2xl">王尚贤</p>
        <p class="text-sm">🐟 1994年在深圳长大的惠州人</p>
        <p class="text-sm">💬 讲普通话，但更爱用粤语交流</p>
        <p class="text-sm">⌨️ 写代码很酷，它不仅仅是工作，更是爱好</p>
        <p class="text-sm">🚗 理想的生活是旅居，驾驶在路上</p>
        <p class="text-sm">🍣 每个人的人生剧本都不同，演好它即可</p>
        <p class="text-sm">🔥 极简主义</p>
        <p class="text-sm">🏄 <a class="link-gov" target="_blank" href="https://beian.miit.gov.cn">粤ICP备2024180655号-1</a></p>
      </div>
      <ul class="flex flex-col">
        <li class="hover:bg-sky-50 px-4 py-8 rounded" v-if="edit_mode">
          <div class="flex justify-between">
            <p>{{ this_time }}</p>
            <div class="flex gap-x-3" v-show="edit_mode">
              <button @click="on_add_mood" class="bg-green-200 px-2 rounded hover:bg-green-400">sure</button>
            </div>
          </div>
          <div :contenteditable="edit_mode" ref="new_mood" class="outline-none" v-html="new_mood_value" @blur="on_new_mood_blur"></div>
        </li>
        <li v-for="item in moods" :key="item.no" class="hover:bg-sky-50 p-4 rounded">
          <div class="flex justify-between">
            <p>{{ item.create_time }}</p>
            <div class="flex gap-x-3" v-show="edit_mode === true">
              <button @click="on_update_mood(item)" class="bg-green-200 px-2 rounded hover:bg-green-400">sure</button>
              <button class="bg-red-200 px-2 rounded hover:bg-red-400" @click="on_del_mood(item)">delete</button>
            </div>
          </div>
          <div :contenteditable="edit_mode" class="outline-none" v-html="item.content" @blur="e => item.content = e.target.innerHTML"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { nextTick, onMounted, onUnmounted, reactive, ref } from 'vue';

const edit_mode = ref(false)
const new_mood = ref(null)
const onkeydown = event => {
  if (event.ctrlKey && event.shiftKey && event.key === 'P') {
    edit_mode.value = !edit_mode.value
    nextTick(() => {
      edit_mode.value && new_mood.value.focus()
    })
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
  axios.post(url, data).then(resp => resp.data).then(resp => {
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
const get_moods = (start, end) => {
  const url = `https://env-00jxgnx7m729.dev-hz.cloudbasefunction.cn/get-mood-list?start=${start}&end=${end}`
  axios.get(url).then(resp => resp.data).then(resp => {
    if (resp.code !== 0) {
      alert('get mood list error!')
      return
    }

    moods.push(...resp.data)
  })
}

const on_del_mood = info => {
  const url = 'https://env-00jxgnx7m729.dev-hz.cloudbasefunction.cn/del-moods'
  const data = {
    no_list: [info.no]
  }
  axios.post(url, data).then(resp => resp.data).then(resp => {
    if (resp.code !== 0) {
      alert(resp.message)
      return
    }

    alert('ok!')
    const index = moods.findIndex(info => info.no === info.no)
    moods.splice(index)
  })
}

// 滚动
const onscroll = e => {
  const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement
  if (scrollTop + clientHeight >= scrollHeight) {
    console.log('touch the bottom')
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