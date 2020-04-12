module.exports = app => {
    //exprrts一个函数，app为传入参数
    const express = require("express")
    const router = express.Router()
    //引用模型
    const Category = require('../../models/Category')


    //router子路由, async声明异步函数 (接口)
    router.post('/categories', async(req, res) => {
        //.create() 方法, 创建数据(来自客户端提交)
        const model = await Category.create(req.body)  //await用于等待一个异步方法执行完成
        res.send(model) //发回给客户端
    })
    // 查看分类
    router.get('/categories', async(req, res) => {
        //.find() 方法,查找数据, .limit(10)限制十条,数据变量items接收
        const items = await Category.find().limit(10)
        res.send(items)
    })
    //编辑分类
    router.get('/categories/:id', async(req, res) => {
        const model = await Category.findById(req.params.id)
        res.send(model)
    })
    // 修改分类
    router.put('/categories/:id', async(req, res) => {
        const model = await Category.findByIdAndUpdate(req.params.id, req.body)  //await用于等待一个异步方法执行完成
        res.send(model) //发回给客户端
    })
    // 删除分类
    router.delete('/categories/:id', async(req, res) => {
        await Category.findByIdAndDelete(req.params.id, req.bady)
        res.send({
            success: true
        })
    })

    // 将router子路由 挂载到/admin/api
    app.use('/admin/api', router)

}