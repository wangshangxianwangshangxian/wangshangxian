<template>
  <div class="qupte-block">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.qupte-block {
  border-left: 4rem solid #ccc;
  background-color: #efefef;
  min-height: 28rem;
}

.qupte-block > div {
  color: #777;
  margin: 8rem 16rem;
  font-style: italic;
  overflow: auto;
}
</style>