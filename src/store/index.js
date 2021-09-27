import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  /*  cartList {
        shopID:s{
          shopName:'',
          productList:{
            prodectId:{
            }
          }
        }
    }
     */
  try {
    return JSON.parse(localStorage.cartList)
  } catch (err) {
    return {}
  }
}

export default createStore({
  state: {
    cartList: getLocalCartList(),
    addressList: []
    /*
      {addressId:
        city:
        department:
        houseNumber:
        name:
        phone:
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
    },
    clearCartData (state, shopId) {
      state.cartList[shopId].productList = {}
    },
    changeAddressList (state, addressList) {
      state.addressList.splice(0, state.addressList.length, ...addressList)
    }
  },
  actions: {
  },
  modules: {
  }
})
