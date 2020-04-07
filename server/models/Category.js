const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    //定义模型字段
    name: { type: String }
})

//导出,(哪里需要时就可以引用)
module.exports = mongoose.model('Category', schema)