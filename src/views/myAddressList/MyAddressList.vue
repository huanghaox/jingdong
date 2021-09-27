<template>
  <div class="wrapper">
    <div class="header">
      <span @click="handleBackClick"
      class="header__icon iconfont">&#xe602;</span>
      <span>管理收货地址</span>
      <router-link to="/chooseAddressList">
        <span class="header__new">新建</span>
      </router-link>
    </div>
    <div class="address">
      <div class="address__title">
        我的收货地址
      </div>
      <div class="address__list">
        <div class="address__list__info">
          <div class="address__list__name">
            小米
          </div>
          <div class="address__list__tel">
            18911023261
          </div>
        </div>
        <div class="address__list__content">
          <span>北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层</span>
        </div>
        <div class="address__list__enter">
          <span class="iconfont">&#xe602;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'MyAddressList',
  setup () {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    return { handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: $dark-bgColor;
  color: #333;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .18rem;
  height: .44rem;
  font-size: .16rem;
  color: #333;
  background: #FFF;
  &__icon {
    color: #B6B6B6;
  }
  &__new {
    font-size: .14rem;
  }
  a {
    color: #333;
    text-decoration: none;
  }
}
.address {
  padding: 0 .16rem;
  &__title {
    padding:.16rem 0 .12rem 0;
    font-size: .14rem;
  }
  &__list {
    position: relative;
    background: #fff;
    padding: .18rem;
    font-size: .14rem;
    &__info {
      color: #999;
      display: flex;
      width: 1.76rem;
      justify-content: space-between;
      margin-top: .02rem;
      margin-bottom: .08rem;
    }
    &__content {
      width: 2.6rem;
      @include two;
    }
    &__enter {
      position:absolute;
      top: 50%;
      right: .16rem;
      font-size: .16rem;
      span {
        display: block;
        transform:rotate(180deg)
      }
    }
  }
}
</style>
