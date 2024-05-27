<template>
  <div class="box">
    <div class="box">
      <div class="container">
        <h1>王尚贤</h1>
        <div>
          🧒 介绍一下我自己<br />
          写代码真的很酷，理想的生活是旅居，我喜欢在路上的感觉。在清晨面对不同的景色打八段锦，在夜晚驾驶在不同的公路上，慢跑在不同城市的跑到，攀登远近高低各不同的山。<br /><br />

          🍣 人生理想<br />
          来这个地球就是一场体验，每个人的剧本都不一样，真情感受，把它演好。<br /><br />

          🐦 极简主义<br />
          一件事情的最开始，它通常只有一个需求，而极简主义就是非必要不添加，比如一段文字最重要的是内容。图片是具象化，格式是轻重，颜色是装饰，但我用不到这些，一面白色背景，一款舒适的字体即可。
          如果可以的话，我希望我未来的房子也能这样简单---书房铺上木地板，两面白墙一面落地窗，中间只有一张桌子。<br /><br />

          🚗 冲浪车牌号<br />
          <a class="link-gov" target="_blank" href="https://beian.miit.gov.cn">粤ICP备2024180655号-1</a>
        </div>
        <ul>
          <li v-for="row in essays" :key="row.id" @click="onEssayClick(row)">
            <div>{{ row.title }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import store from '@/stores/store'

const essays = store.getEssayList()

const onEssayClick = essay => {
  router.push(`/blog/${essay.id}`)
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