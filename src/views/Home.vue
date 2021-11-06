<template>
  <div class="home">
    <Echarts />
  </div>
</template>

<script>
import { fetchList } from '@/api/article';
import Echarts from '@/components/Echarts.vue';

export default {
  name: 'Home',
  components: {
    Echarts,
  },
  mounted() {
    fetchList().then(response => {
        console.log(response);
    })
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
