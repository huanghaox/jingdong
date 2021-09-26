<template>
  <div class="wrapper">
    <div class="title">我的全部购物车</div>
    <div class="space"></div>
    <div
        class="empty"
        v-if="Object.keys(cartListWithProducts).length === 0"
      >购物车当前为空</div>
    <div class="shops">
    <div class="shop"
    v-for="(item,index) in cartListWithProducts" :key="index"
    >
      <router-link :to="`/orderConfirmation/${index}`">
      <div class="shop__title">
        {{item.shopName}}
      </div>
      </router-link>
      <div class="shop__wrapper">
        <div class="shop__list"
              v-for="product in item.productList"
              :key="product._id">
            <div class="shop__item" >
              <img class="shop__item__img" :src="product.imgUrl" />
              <div class="shop__item__detail">
                <h4 class="shop__item__title">{{product.name}}</h4>
                <p class="shop__item__price">
                  <span>
                    <span class="shop__item__yen">&yen; </span>
                    {{product.price}} x {{product.count}}
                  </span>
                  <span class="shop__item__total">
                    <span class="shop__item__yen">&yen; </span>
                    {{(product.price * product.count).toFixed(2)}}
                  </span>
                </p>
              </div>
            </div>
        </div>
      </div>
      <div class="gap"></div>
    </div>

    </div>
  </div>
  <Docker :currentIndex="1"/>
</template>

<script>
import Docker from '../../components/Docker'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'

const useCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList

  const cartListWithProducts = computed(() => {
    const newCartList = {}
    for (const shopId in cartList) {
      let total = 0
      const products = cartList[shopId].productList
      for (const productId in products) {
        const product = products[productId]
        total += (product.count || 0)
      }
      if (total > 0) {
        newCartList[shopId] = cartList[shopId]
      }
    }
    return newCartList
  })
  return { cartListWithProducts }
}

export default {
  name: 'CartList',
  components: { Docker },
  setup () {
    const { cartListWithProducts } = useCartEffect()
    return { cartListWithProducts }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .49rem;
  right: 0;
  background: $dark-bgColor;
}
.title {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  text-align: center;
  color: #333333;
  height: .44rem;
  line-height: .44rem;
  font-size: .16rem;
  background: #fff;
  overflow-y: scroll;

}
.space {
  height: .44rem;
}
.empty {
  padding: .2rem;
  margin: 0 auto;
  text-align: center;
  font-size: .18rem;
  color: #666;
}
.shops {
  overflow-y: scroll;
  position: absolute;
  top: .6rem;
  right: .18rem;
  bottom: .1rem;
  left: .18rem;
  background: $bgColor;
}
.shop {
  margin: 0;
  background: $bgColor;
  overflow-y: scroll;
  a {
    text-decoration: none;
    font-weight: 600;
  }
  &__title {
    padding-left: .16rem;
    font-size: .16rem;
    line-height: .54rem;
    color: $content-fontcolor;
  }
  &__wrapper {
    padding: 0 .14rem 0 .16rem;
  }
  &__list {
    padding-bottom: .16rem;
    height: .46rem;
  }
  &__item {
    display: flex;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      flex:1;
      height: .46rem;
    }
    &__title {
      color: #333;
      font-size: .14rem;
      margin: 0 0 .06rem 0;
    }
    &__price {
      display: flex;
      justify-content: space-between;
      color: $hightlight-fontColor;
    }
    &__total {
      color: $dark-fontColor;
    }
  }
}
.gap {
  height: .1rem;
  line-height: .1rem;
  background: $dark-bgColor;
}
</style>
