<template>
  <div class="wrapper">
    <div class="header">
      <span @click="handleBackClick"
      class="header__icon iconfont">&#xe602;</span>
      <span>新建收货地址</span>
        <span class="header__new">保存</span>
    </div>
    <div class="address">
      <div class="address__item">
        <span>所在城市：</span>
        <input type="text" placeholder="如北京市">
      </div>
      <div class="address__item">
        <span>小区/大厦/学校：</span>
        <input type="text" placeholder="如理工大学国防科技园">
      </div>
      <div class="address__item">
        <span>楼号-门牌号：</span>
        <input type="text" placeholder="A号楼B层">
      </div>
      <div class="address__item">
        <span>收货人：</span>
        <input type="text" placeholder="请填写收货人的姓名">
      </div>
      <div class="address__item">
        <span>联系电话：</span>
        <input type="text" placeholder="请填写收货手机号">
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
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
  margin-bottom: .12rem;
  &__icon {
    color: #B6B6B6;
  }
  &__new {
    font-size: .14rem;
  }
}
.address {
  background: #FFF;
  padding: 0 .16rem;
  &__item {
    font-size: .14rem;
    padding: .12rem 0;
    border-bottom: 1px solid #F1F1F1 ;
    color: #666;
    input {
      outline: none;
      border: none;
    }
  }
}
</style>
