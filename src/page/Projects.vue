<template>
  <div class="projects-page pad-h-x2">
    <div class="container">
      <div class="pad-h-x2">
        <ul class="nav nav-pills nav-center">
          <li class="active">
            <a href="#" data-filter="*">母婴</a>
          </li>
          <li>
            <a href="#" data-filter=".web-design">快消</a>
          </li>
          <li>
            <a href="#" data-filter=".apps">IT</a>
          </li>
          <li>
            <a href="#" data-filter=".psd">汽车</a>
          </li>
          <li>
            <a href="#" data-filter=".psd">金融</a>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="project">
              <figure class="img-responsive">
                  <img v-lazy="imgUrl">
                  <figcaption>
                      <h4 class="project-details">一个鸡蛋的暴走</h4>
                      <div class="project-creator">2017/04/12</div>
                      <div class="project-price text-warning text-right"><strong>100积分</strong></div>
                  </figcaption>
                  <span class="actions">
                      <button class="btn btn-default bnt-action" type="submit" >项目详情</button>
                  </span>
              </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: 'http://lorempixel.com/400/400/sports/6/'
    }
  }
}
</script>

<style lang="scss">
.project {
    margin-bottom: 30px;
    vertical-align: top;
    margin-right: 30px;
    float: left;
    cursor: pointer;
    width:100%;
}

.project figure {
    position: relative;
    display: inline-block;
    width: 100%;
}

.project figure figcaption {
    position: relative;
    z-index: 10;
    padding: 8px 18px 11px;
    background: #fff;
    -ms-transition: all .2s ease-out;
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
    text-align: left;
    color: #555;
}

.project figure:hover .actions {
    opacity: 1;
}

.project figure .actions {
    display: block;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(29,29,29,.7);
    -ms-transition: all .2s ease-out;
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
}

.project figure img {
    border: 0;
    width: 100%;
}
.btn-default bnt-action{
    margin: 0% 0% auto;
}

figcaption .project-details {
    display: block;
    font-size: 16px;
    line-height: 33px;
    // color: #0093d0;
    height: 27px;
    width: 85%;
    margin-bottom: 5px;
    overflow: hidden;
}

figcaption .project-price {
    // position: absolute;
    // right: 15px;
    // top: 12px;
    font-size: 22px;
    // text-align: right;
    // margin-top: 8px;
    // letter-spacing: -1px;
    // -webkit-font-smoothing: antialiased;
}

figcaption .project-creator {
    font-size: 13px;
    color: #545454;
    display: block;
}

figcaption .project-creator {
    font-size: 13px;
    color: #545454;
    display: block;
}

.project figure .actions button {
    padding: 13px 20px;
    font-size: 16px;
    top: 32%;
    position: absolute;
    left: 50%;
    width: 90%;
    margin-left: -45%;
    line-height: 18px;
    letter-spacing: 1px;
}

/*******section heading**********/
.center-heading {
  text-align: center;
  margin-bottom: 40px;
}

.center-heading h2 {
  margin-bottom: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #333;
  font-size: 25px;
}

.center-heading p {
  font-size: 20px;
  line-height: 35px;
}

.center-heading h2 strong {
  font-weight: 700;
}

.center-line {
  display: inline-block;
  width: 70px;
  height: 1px;
  border-top: 1px solid #bbb;
  /* border-bottom: 1px solid $skincolor; */
  margin: auto;
}

.center-heading p {
  margin-top: 10px;
}

.overflow-hidden {
  overflow: hidden;
}
</style>
