# vue webpack vux axios api 初始化
这是模块化针对某个页面开发的，所以没有配置vue-router

演示了ajax调用方式、store存取、一个模块

# 添加新模块
在src/module文件夹下面建立新的模块目录，并参考Home模块结构和命名

# 测试生成文件到dist
    npm install
    npm run build
   
# 使用
    src/vuex/store.js 共享数据函数
    src/common/api.js api
    src/common/tool.js 工具类
    
# 命名规范 php/js/python
    
    变量：全小写，并以下划线连接，如 user_age=18,age=18
    方法名：小写字母开头，并以大写字母连接，如 userAge(), user()
    类名：大写字母开头，并以大写字母连接，如 UserClass{}, User{}
    常量：全大写字母，并以下划线连接，如 ACCOUNT_ENABLED=1, ENABLED
   