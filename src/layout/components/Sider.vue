<template>
  <div class="sider-container" :class="!Sider ? 'closed' : ''" @click.stop="handleSiderStatus">
    
  </div>
</template>
<script>
export default {
  name: 'Sider',
  data(){
    return {
      Sider: false
    };
  },
  methods: {
    handleSiderStatus() {
      this.Sider = !this.Sider;
    }
  }
}
</script>
<style lang="scss" scoped>
.sider-container {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 260px;
  box-shadow: 0 0 10px gray;
  z-index: 100;
  background-color: rgba(100, 148, 237, 0.39);

  &::after {
    content: '';
    width: 25px;
    height: 100px;
    position: absolute;
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 101;

    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: rgba(100, 148, 237, 0.5);
  }

  &.closed {
    transform: translate(-260px, 0);
  }

  transition: all 2s;
}
</style>