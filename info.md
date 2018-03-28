1.npm i express -S  
后端服务用
2.npm i redux react-readux react-thunk -S 
redux react-redux thunk中间件
3.npm i react-route-dom -S 
react-route4
5.npm i axios -S
axios 代替ajax进行前后端通信
6.npm i nodemon -g
自动刷新后端的工具
7.npm i mongoose -S
moongoDB 和node配合的插件
8.npm i socket.io -S
9.npm i socket.io-client -S

10,在package.json最后设置"proxy": "http://localhost:9093"将前端3000端口中的请求转发到后端9093端口中

11."babel": {
    "presets": [
      "react-app"
    ],
    <!-- "plugins":[
      [
        "import",
        {
          "libraryName":"antd",
          "style":"css"
        }
      ], --> 这里是antd的按需加载
      <!-- "transform-decorators-legacy" -->这里是装饰器写法支持
    ]
  },