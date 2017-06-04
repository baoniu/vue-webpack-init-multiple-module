<template>
  <div>
    <h3>标题</h3>
    <input v-model="val"/>
    <a class="btn bnt-success" @click="click">click me</a>
  </div>
</template>

<script>
    export default {
        name: 'app',
        components: {

        },
        data: function () {
            return {
                val: '默认值..'
            }
        },
        methods: {
            click: function () {
                alert(this.val);
            }
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>