<template>
  <header>
  </header>
  <div class="container">
    <p class="w--heading-1">王尚贤</p>
    <p class="w--heading-3">ABOUT ME / 关于我</p>
    <p>
      我是王尚贤，1994年出生于广东惠州，是个在深圳长大的博罗人。
    </p>
    <p>喜欢编程，那很酷。从小学就开始接触到互联网，到了大学也选择了相关的专业，愿望是能为人们创造出有价值的产品或工具。</p>
    <p>
      喜欢写东西，从初中到现在一直都有写日记的习惯，从纸质笔记本，到博客、电子笔记，再到如今我的网站，更像是一场没有观众的舞蹈，我也愿意把我的想法分享给你们。
    </p>
    <p>理想的状态是成为一名为他人提供解决方案的顾问，不论是工作上还是生活中。理想的世界观是大同社会。终极愿望是赛博飞升，遨游宇宙，黑洞里到底藏了什么？</p>
    <p>没有什么使我停留，除了目的。纵使岸旁有玫瑰、绿茵、和宁静的港湾，我不是不系之舟。</p>
    <p class="w--heading-3">MY CREATION / 有价值的作品</p>
    <p>
      <ul>
        <!-- <li>
          👉 <a href="https://shuguanghuilai.github.io/proletarian-revolution/" target="_blank">无产阶级必胜，守护本该是我们的权益</a>
        </li> -->
        <li>
          👉 <a href="https://static-mp-0591e74b-8b75-4b52-8c52-4468155231aa.next.bspapp.com" target="_blank">List Mind 让思维导图更加工整</a>
        </li>
      </ul>
    </p>
    <p class="w--heading-3">ESSAYS / 文章</p>
    <p>
      <ul>
        <li>
          <router-link class="w--text" to="/blog/doing-what-heaven-has-ordained-with-diligence">做好上天给你安排的事</router-link>
        </li>
        <li>
          <router-link class="w--text" to="/blog/my-30-years-old">带着从容和青春的余烬迎接30岁新篇章</router-link>
        </li>
        <li>
          <router-link class="w--text" to="/blog/web3-experience">web3的新体验</router-link>
        </li>
        <li>
          <router-link class="w--text" to="/blog/watching-sora-videos-random-thoughts">sora文生视频随想</router-link>
        </li>
        <li>
          <router-link class="w--text" to="/blog/use-static-types-in-JavaScript">静态类型是JavaScript的负担吗？</router-link>
        </li>
        <!-- <li>
          <router-link class="w--text" to="/blog/breadth-rather-than-depth">学习是永无止尽的，但适可而止，关注不同维度让你的决策更加全面</router-link>
        </li> -->
        <li>
          <router-link class="w--text" to="/blog/talk-about-the-philosophy-of-React-and-Vue">聊聊 React 和 Vue 的哲学</router-link>
        </li>
        <!-- <li>
          <router-link class="w--text" to="/blog/talk-about-the-philosophy-of-React-and-Vue">夹子因暴露你的松弛感</router-link>
        </li> -->
        <!-- <li>
          <router-link class="w--text" to="/blog/harbin-tour">哈尔滨之旅</router-link>
        </li> -->
      </ul>
    </p>
    <p><a class="link-gov" target="_blank" href="https://beian.miit.gov.cn">粤ICP备2024180655号-1</a></p>
  </div>
</template>

<script setup>
</script>

<style scoped>
header {
  background-color: lightskyblue;
  height: 300px;
  background: linear-gradient(to right, rgb(116, 235, 213), rgb(172, 182, 229));
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  background-image: url(../assets/index-bg.jpg);
  background-position-x: center;
  background-position-y: 0rem;
  background-size: 100% auto;
}

@media screen and (max-width: 900px) {
  header {
    background-size: auto 100%;
  }
}

.container {
  margin: 0 auto;
  max-width: 732rem;
  padding: 0 16rem 44rem 16rem;
}

.container p {
  margin-top: 16rem;
}

.container ul {
  display: flex;
  flex-direction: column;
  gap: 8rem;
}

.link-gov {
  display: block;
  text-align: center;
  color: var(--color-666666);
}
</style>