//模型

// 链接mongoo
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/weibo'
mongoose.connect(DB_URL)
//显示信息
mongoose.connection.on('connected',function(){
    console.log('mongo ready')
})  

const models = {
    user:{
        'username':{'type':String,'require':true},
        'password':{'type':String,'require':true},
        'nickname':{'type':String,'require':true},
        'avatar':{'type':String},
        'desc':{'type':String},
        'sex':{'type':String},
        'follow':{'type':String},
        'birthday':{'type':Date}
    },
    chat:{
        
    }
}

for (let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}