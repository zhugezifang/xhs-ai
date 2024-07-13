<script setup lang="ts">
</script>

<template>
  <div class="container">
    <p class="tagline"><a href="https://www.zgzf.online/about" target="_blank"><i
          class="fa-regular fa-hand-point-right"></i>联系我们</a></p>
  </div>
  <div class="media-logos">
    <!-- 神器集 -->
    <a href="/" target="_blank"><img class="logo" src="/shenqiji.svg" /></a>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  text-align: center!important;
  max-width: 1152px;
}

.title {
  font-family: 'ZCOOL KuaiLe', cursive;
  font-size: 32px;
  margin-bottom: 30px;
}

.media-logos {
  margin-bottom: -150px;
  max-height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.logo {
  margin-left: 10px;
  margin-right: 10px;
}

@media (min-width: 256px) {
  .media-logos {
    margin-bottom: -120px;
  }
}
</style>
