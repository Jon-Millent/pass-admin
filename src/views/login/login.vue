<template>
  <div class="app-init page-login">
    <div class="app-init bg"></div>
    <div class="my-form">
      <h2 class="title">move admin</h2>

      <div class="form-wrap">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>

          <el-form-item class="btn-group">
            <el-button type="primary" size="medium" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted(){
      this.$api.login({
        username: '123456',
        password: '123456'
      })
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import "../../assets/sass/util"
  .page-login
    .bg
      background: url("../../../static/images/login-bg.jpg") no-repeat top center
      background-size: cover
      filter: blur(4px)
      transform: scale(1.2)
    .my-form
      width: 600px
      height: 400px
      position: absolute
      left: 50%
      top: 50%
      margin-top: -200px
      margin-left: -300px
      background-color: rgba(255, 255, 255, .6)
      padding: 10px

      border-radius: 20px
      @include box-sizing
      .form-wrap
        padding-right: 60px

    .title
      text-align: center
      padding: 20px 0
      padding-bottom: 30px
      font-size: 30px
      color: #333
      font-weight: normal
</style>
