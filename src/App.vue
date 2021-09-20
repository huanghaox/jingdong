<template>
  <div class="wapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe61f;</span>
      广东省深圳市南山区科苑西路33号住宅小区
      <span class="iconfont position__notice">&#xe628;</span>
    </div>
    <div class="search">
      <span class="iconfont search__icon">&#xe633;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" >
    </div>
    <div class="icons">
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="icons__item__img">
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="icons__item__img">
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="icons__item__img">
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="icons__item__img">
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="icons__item__img">
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="icons__item__img">
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="icons__item__img">
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="icons__item__img">
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="icons__item__img">
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="icons__item__img">
        <p class="icons__item__desc">超市便利</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <h3 class="nearby_title">附近店铺</h3>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png">
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费</p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png">
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费</p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png">
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费</p>
        </div>
      </div>
    </div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6f1;</div>
      <div class="docker__title">首页</div>
      </div>
    <div class="docker__item">
      <div class="iconfont">&#xe604;</div>
      <div class="docker__title">购物车</div>
      </div>
    <div class="docker__item">
      <div class="iconfont">&#xe64b;</div>
      <div class="docker__title">订单</div>
      </div>
    <div class="docker__item">
      <div class="iconfont">&#xe601;</div>
      <div class="docker__title">我的</div>
      </div>
  </div>

</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixin.scss';
.wapper {
  overflow-y: auto;
  position: absolute;
  padding: 0 .18rem .1rem .18rem;
  top: 0;
  left: 0;
  bottom: .5rem;
  right: 0;
}
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  color: $content-fontcolor;
  @include ellipsis;
  .position__icon{
    position: relative;
    top: .01rem;
    margin-right: .08rem;
    font-size: .2rem;
  }
  .position__notice{
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
}
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: #F5F5F5;
  color: #B7B7B7;
  border-radius: .16rem;
  font-size: .14rem;
  &__icon {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}
.banner{
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img{
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: .12rem ;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content {
    flex: 1;

    border-bottom: 1px solid $content-fontcolor;
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags{
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      margin-top: .08rem 0 0 0;
      color:#E93B3B;
      font-size: .13rem;
      line-height: .18rem;
    }
  }
}
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding:0 .18rem;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  color: $content-fontcolor;
  &__item {
    flex:1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      color:#1FA4FC;
    }
  }
  &__title {
  font-size: .2rem;
  transform: scale(.5,.5);
  transform-origin: center top;
  }
}

</style>
