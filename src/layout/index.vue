<template>
  <div class="layout">
    <Sider />
    <div class="layout-box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Sider from './components/Sider.vue';
export default {
  name: 'Layout',
  components: {
    Sider
  }
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    #04f7ff7e 30%,
    #9d79ff7e 64%,
    #83069c7e 100%
  );
  position: relative;

  &-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>