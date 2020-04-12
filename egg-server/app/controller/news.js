'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {

        // this.ctx.body = '新闻页面'

        // ctx为异步方法
        await this.ctx.render('news')
    }

    async content() {
        // 获取get传值 http://127.0.0.1:7001/newscontent?id=123
        // koa 中获取 ctx.query
        // egg 中获取 
        var query = this.ctx.query
        console.log(query)
        this.ctx.body = '新闻详情'
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
