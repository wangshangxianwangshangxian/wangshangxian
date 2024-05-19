<template>
  <div class="chapter-box">
    <ul>
      <li v-for="item of props.chapters" :key="item.key" @click="onClick(item)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  chapters: {
    type: Array,
    default() {
      return [
        {
          label: '章节1',
          key: 'chapter1'
        }
      ]
    }
  }
})

const onClick = (item) => {
  const { key } = item
  const el = document.getElementsByName(key)[0]
  window.scrollTo({
    top: el.offsetTop - 96,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.chapter-box {
  max-width: 400rem;
  position: fixed;
  left: 20rem;
  top: 96rem;
}

@media screen and (max-width: 1400px) {
  .chapter-box {
    display: none;
  }
}

.chapter-box ul {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.chapter-box li {
  cursor: pointer;
  color: var(--color-666666);
  color: #aaa;
  font-size: var(--font-size-14);
}

.chapter-box li:hover {
  color: var(--color-lightseagreen);
}
</style>