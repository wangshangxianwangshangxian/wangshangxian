<template>
  <div class="nav-box">
    <div class="nav-l">
      <router-link class="w--heading-3" to="/">Simple's blog</router-link>
      <router-link class="w--text" to="/">首页</router-link>
      <router-link class="w--text" to="/">咨询</router-link>
    </div>
    <div class="nav-r"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav-box {
  height: 48rem;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16rem;
}

.nav-l {
  display: flex;
  gap: 20rem;
  align-items: center;
}

.nav-l > a {
  cursor: pointer;
}
</style>