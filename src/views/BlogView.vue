<template>
  <div class="blog-box">
    <Nav></Nav>
    <div class="blog-content">
      <component :is="comp"></component>
    </div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, reactive } from 'vue'
import Nav from '@/components/Nav.vue'
import My30YearsOldVue from './blogs/My30YearsOld.vue'
import HarbinTourVue from './blogs/HarbinTour.vue'
import TalkAboutThePhilosophyOfReactAndVueVue from './blogs/TalkAboutThePhilosophyOfReactAndVue.vue'
import BreadthRatherThanDepthVue from './blogs/BreadthRatherThanDepth.vue'
import UseStaticTypesInJavaScriptVue from './blogs/UseStaticTypesInJavaScript.vue'
import WatchingSoraVideosRandomThoughts from './blogs/WatchingSoraVideosRandomThoughts.vue'
import DoingWhatHeavenHasOrdainedWithDiligence from './blogs/DoingWhatHeavenHasOrdainedWithDiligence.vue'
import Web3Experience from './blogs/Web3Experience.vue'

const state = reactive({
  hash: location.hash
})

let comp = loadBlogContent()
function loadBlogContent() {
  const id = location.hash.slice(7)
  switch (id) {
    case 'my-30-years-old':
      return My30YearsOldVue
    case 'harbin-tour':
      return HarbinTourVue
    case 'talk-about-the-philosophy-of-React-and-Vue':
      return TalkAboutThePhilosophyOfReactAndVueVue
    case 'breadth-rather-than-depth':
      return BreadthRatherThanDepthVue
    case 'use-static-types-in-JavaScript':
      return UseStaticTypesInJavaScriptVue
    case 'watching-sora-videos-random-thoughts':
      return WatchingSoraVideosRandomThoughts
    case 'web3-experience':
      return Web3Experience
    case 'doing-what-heaven-has-ordained-with-diligence':
      return DoingWhatHeavenHasOrdainedWithDiligence
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.blog-box {
  position: relative;
}

.blog-content {
  margin: 48rem auto 0 auto;
  background-color: #fff;
  max-width: 732rem;
  padding: 0 16rem 44rem 16rem;
}
</style>