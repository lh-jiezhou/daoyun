'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {
        // 调用服务Service里的方法 (无需导入)
        var list = await this.service.news.getNewsList() 
        var msg = "成功"

        // console.log(list)

        console.log(this.ctx.helper.foo())

        // ctx为异步方法
        await this.ctx.render('news', {
            msg: msg,
            list: list
        })
    }

    async content() {
        // 获取get传值 http://127.0.0.1:7001/newscontent?id=123
        // koa 中获取 ctx.query
        // egg 中获取 
        var aid = this.ctx.query
        var list = await this.service.news.getNewsContent(aid)
        console.log(list)
        await this.ctx.render('newscontent', {
            list: list[0]
        })
        // this.ctx.body = '新闻详情'
    }

    async newslist() {
        // 获取动态路由传值 http://127.0.0.1:7001/newslist/123
        // koa 中获取 ctx.params
        // egg 中获取 
        var params = this.ctx.params
        console.log(params)
        this.ctx.body = '新闻列表'
    }
}

module.exports = NewsController;
