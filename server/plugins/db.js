module.exports = app => {
    //exprrts一个函数，app为传入参数
    const mongoose = require("mongoose")
    mongoose.connect('mongodb://127.0.0.1:27017/daoyun', {
        useNewUrlParser: true
    })

}