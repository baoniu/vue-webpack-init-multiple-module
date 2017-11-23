<template>
    <div class="home-module">
        <div>
            <h3>打开console调试器，部分输出在console.log</h3>
            <input v-model="val"/>
            <a class="btn btn-success" @click="click">click me</a>
        </div>

        <div>
            <h1><a href="#" class="btn btn-success" @click="ajax">调用ajax</a></h1>
            <h1><a href="#" class="btn btn-success" @click="saveStore">将输入内容存入store</a></h1>
            <h1><a href="#" class="btn btn-success" @click="getStore">从store中取出输入内容</a></h1>
        </div>
    </div>
</template>

<script>
    import api from "../../common/api";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name:       'app',
        components: {},
        data:       function () {
            return {
                val: '默认值..'
            }
        },
        computed:   {
            ...mapGetters({
                getTestData: 'getTestData',
            }),

        },
        methods:    {
            ...mapActions({
                updateTestData: 'updateTestData',
            }),
            click:     function () {
                alert(this.val);
            },
            ajax:      function () {
                api.getProfile({a: 1}).then(
                    success => {
                        console.log('success', success)
                    },
                    error => {
                        console.log('error', error)
                    }
                )
            },
            saveStore: function () {
                this.updateTestData(this.val)
            },
            getStore:  function () {
                alert(this.getTestData)
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