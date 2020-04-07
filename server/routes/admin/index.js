module.exports = app => {
    //exprrts一个函数，app为传入参数
    const express = require("express")
    const router = express.Router()
    //引用模型
    const Category = require('../../models/Category')


    //router子路由, async声明异步函数 (接口)
    router.post('/categories', async(req, res) => {
        //.create() 方法, 创建数据(来自客户端提交)
        // const model = await Category.create(req.body)  //await用于等待一个异步方法执行完成
        res.send(req.body) //发回给客户端
    })

    // 将router子路由 挂载到/admin/api
    app.use('/admin/api', router)

}