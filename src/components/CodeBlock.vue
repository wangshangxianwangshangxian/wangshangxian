<template>
  <div class="code-box">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.code-box {
  background-color: #f7f6f3;
  border-radius: 4rem;
}

.code-box > div {
  overflow-x: auto;
  min-height: 40rem;
  margin: 8rem 20rem;
}
</style>