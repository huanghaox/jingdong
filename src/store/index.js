import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  return JSON.parse(localStorage.cartList) || {}
}

export default createStore({
  state: {
    cartList: getLocalCartList()
    /*  cartList {
        shopID{
          shopName:'',
          productList:{
            prodectId:{
            }
          }
        }
    }
     */
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + parseInt(payload.num)
      if (payload.num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }
      if (product.count > 99) { product.count = 99 }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      console.log(shopInfo)
      setLocalCartList(state)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      state.cartList[shopId].productList[productId].check = !state.cartList[shopId].productList[productId].check
      setLocalCartList(state)
    },
    changeShopName  (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    setCartItemChecked (state, payload) {
      const { shopId } = payload
      const productInfo = state.cartList[shopId].productList
      if (productInfo) {
        for (const i in productInfo) {
          if (!productInfo[i].check) {
            productInfo[i].check = true
          }
        }
      }
      setLocalCartList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
