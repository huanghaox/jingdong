import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo } = payload
      const shopInfo = state.cartList[shopId] || {}
      let product = shopInfo[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + parseInt(payload.num)
      if (payload.num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }
      if (product.count > 99) { product.count = 99 }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
      console.log(shopInfo)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      state.cartList[shopId][productId].check = !state.cartList[shopId][productId].check
    },
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
    },
    setCartItemChecked (state, payload) {
      const { shopId } = payload
      const productInfo = state.cartList[shopId]
      if (productInfo) {
        for (const i in productInfo) {
          if (!productInfo[i].check) {
            productInfo[i].check = true
          }
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
