<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="login-title">记账管理系统</div>
      <el-form :model="param"
               :rules="rules"
               ref="login">
        <el-form-item prop="userName">
          <label class="login-label"
                 style="width:80px">用户名</label>
          <div class="login-content">
            <el-input v-model="param.userName"
                      aria-placeholder="请输入用户名">

            </el-input>
          </div>

        </el-form-item>
        <el-form-item prop="passWord">
          <label class="login-label">密码</label>
          <div class="login-content">
            <el-input class="login-content"
                      type="password"
                      v-model="param.passWord"
                      aria-placeholder="请输入密码">

            </el-input>
          </div>

        </el-form-item>
        <div class="login-btn">
          <el-button type="primary"
                     @click="submitLogin()">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>

</template>

    <script>
export default {
  data: function () {
    return {
      param: {
        userName: 'admin',
        passWord: '123456',
      },
      rules: {
        userName: [{ required: true, message: '请输入用户名' }],
        passWord: [{ required: true, message: '请输入密码' }],
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$message.success("登陆成功");
          localStorage.setItem("userName", this.param.userName);
          this.$router.push("/");
        } else {
          this.$message("请输入用户名和密码");
          console.info("error !");
          return false;
        }
      });
    }
  }
}
    </script>

    <<style scoped>
    .login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
              }
    .ms-login{
      position:absolute;
      top:40%;
      left:40%;
      width:400px;
      border-radius: 5px;
      padding:10px;
      background: rgba(255, 255, 255, 0.3);
    }
    .login-title{
      font-size:36px;
      padding:10px;
      text-align:center;
    }
    .login-content {
     
     }
    
    </style>