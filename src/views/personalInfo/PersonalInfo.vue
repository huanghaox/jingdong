<template>
  <div class="wapper">

  </div>
  <Docker/>
</template>

<script>
import Docker from '../../components/Docker'
export default {
  name: 'PersonalInfo',
  components: { Docker }
}
</script>

<style lang="scss" scoped>
.wapper{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFF;
}
</style>
