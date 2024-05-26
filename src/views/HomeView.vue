<template>
  <div class="box">
    <nav class="box-l">
      <div class="nav-top">Wang Shang Xian</div>
      <div class="nav-cen">
        <ul>
          <li v-for="(item, index) in lists" :key="index">{{ item.title }}</li>
        </ul>
      </div>
      <div class="nav-btm">
        <a class="link-gov" target="_blank" href="https://beian.miit.gov.cn">粤ICP备2024180655号-1</a>
      </div>
    </nav>
    <div class="box-r">
      <default-card></default-card>
    </div>
  </div>
</template>

<script setup>
import DefaultCard from "@/components/DefaultCard.vue";
import { reactive } from "vue";

const lists = reactive([
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
  {title: '这是一个测试标题'},
])
</script>

<style scoped>

.box {
  width: 100%;
  height: 100%;
  display: flex;
}

nav {
  padding: 12rem;
  width: 260rem;
  height: 100vh;
  background-color: rgb(249, 249, 249);
  display: flex;
  flex-direction: column;
}

.nav-cen {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}

.nav-top, .nav-btm {
  padding: 8rem 0;
}

.nav-cen li {
  padding: 6rem;
  cursor: pointer;
  white-space: nowrap;
}

.nav-cen li:hover {
  background-color: rgb(236, 236, 236);
  border-radius: 8rem;
}

.box-r {
  /* background-color: aqua; */
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

@media screen and (max-width: 770px) {
  nav {
    display: none;
  }
}
</style>