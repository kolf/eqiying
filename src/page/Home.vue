<template>
  <div class="home-page">
    <div class="hero-wrap text-center">
      <div class="container">
        <div class="hero">
          <h1 class="hero-heading text-white">欢迎光临一起赢生活社区</h1>
          <p class="lead text-white">乐享生活社区是一种新的消费者分享其购物经验和想法的方式，这种方式也帮助我们准确了解消费者的所看所想，站在消费者的角度创造更好的购物环境和体验。</p>
        </div>
      </div>
    </div>

    <div class="supports-wrap">
      <div class="container">
        <div class="inner">
          <div class="row">
            <div class="col-md-4 support"><img class="img-responsive" src="../assets/support-bg.jpg" alt=""></div>
            <div class="col-md-4 support"><img class="img-responsive" src="../assets/support-photo.jpg" alt=""></div>
            <div class="col-md-4 support"><img class="img-responsive" src="../assets/support-photo-2.jpg" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/_variables";

.index{
  &-banner{
    background-color: $brand-primary;
    height: 600px;
  }
}

.support{
  margin-bottom: 15px;
  img{
    border-radius: 4px;
  }
}

.news{
  &-heading{
    padding: 12px 0;
    font-size: 16px;
  }
}


.links{
    margin-top: 20px;
    // border-top: 1px solid #eee;
    // padding: 20px 0;
    li{
      display: inline-block;
      &>a{
          padding:0 10px;
          color: #ccc;
          border-right: 1px solid #ccc;
          display: inline-block;
          line-height: 1em;

      }
    }
}

.hero{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  &-heading{
    // color: #eee;
  }
  &-wrap{
    overflow: hidden;
    background-color: #000;
    height: calc(100vh - 197px);
    min-height: 600px;
    background: url("../assets/bg.jpg") #333 no-repeat center bottom;
    background-size: cover;
    &>.container{
      height: 100%;
    }
  }
}

.share-logos{
  .iconfont{
    font-size: 60px
  }
}

</style>
