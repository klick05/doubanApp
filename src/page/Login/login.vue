<template>
  <div class="Login" @click="$router.go(-1)">
    <span class="BackOff"></span>
      <h2 class="Login_title">欢迎来到豆瓣</h2>
      <form id="LoginFrom">
        <div>
          <input type="text" placeholder="手机号/邮箱" autofocus="autofocus">
        </div>
        <div>
          <input type="password" placeholder="密码">
        </div>
        <button class="loginBtn" @click="goLogin">登入</button>
      </form>
      <div class="register_forget">
        <span>注册豆瓣</span>
        <span>忘记密码</span>
      </div>

      <div class="Prompt">
        <p>温馨提示：点击登入可以实现自动登入,暂时没有后台系统</p>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin () {
      this.$store.commit('USE_LOGIN', {
        name: '宾克斯的美酒',
        id: 188683784,
        img: 'http://www.005.tv/uploads/allimg/161102/115Q56105-6.jpg'
      })
      this.$router.push('/main')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.Login {
  text-align:center;
  .BackOff {
    display:block;
    @include wh(px2rem(25), px2rem(25));
    @include bimg('../../assets/imge/ic_bar_back_green.png')
    position:absolute;
    top:px2rem(15);
    left:px2rem(15);
  }
  h2 {
    color: $green;
    font-size:px2rem(40);
    letter-spacing: px2rem(2);
    margin-top:px2rem(100);
  }
  .register_forget {
    margin-top: px2rem(20);
    span{
      display:inline-block;
      font-size:px2rem(14);
    }
    span:nth-of-type(1){
      border-right:1px solid $gray;
      padding-right:px2rem(22);
      color:$green;
    }
    span:nth-of-type(2){
      padding-left:px2rem(20);
      color:$gray;
    }
  }
  .Prompt {
    margin-top:px2rem(40);
    p {
      color:red;
      font-size:px2rem(14);
    }
  }
}
input::-webkit-input-placeholder {
        color:$gray;
  }
input {
  outline:none;
}
#LoginFrom {
  width:100%;
  color:red;
  div{
    margin-top:px2rem(40);
    padding: 0 px2rem(20);
    input {
      width:100%;
      border-bottom:px2rem(1) solid $gray;
      padding:px2rem(2);
      font-size:px2rem(16);
      color:black;
    }
  }
  .loginBtn {
    width:90%;
    height:px2rem(40);
    background: $green;
    color: #ffffff;
    border-radius:px2rem(2);
    margin-top:px2rem(20);
    font-size:px2rem(16);
  }
}
</style>

