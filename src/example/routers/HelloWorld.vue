<template>
  <div class="hello-div">
    <Alert>消息提示文案</Alert>
    <Alert type="success">成功提示文案</Alert>
    <Alert type="warning">警告提示文案</Alert>
    <Alert type="error">错误提示文案</Alert>

    <Alert type="success">
      成功提示文案
      <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>

    <Alert type="warning">
      警告提示文案
      <template slot="desc">
        警告的提示描述文案警告的提示描述文案警告的提示描述文案
      </template>
    </Alert>


  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
