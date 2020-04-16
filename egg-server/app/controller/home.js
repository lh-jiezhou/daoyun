'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    var user = await this.service.user.getUserInfo()
    // this.ctx.bady = user
    console.log(JSON.stringify(user))
    await this.ctx.render('home', {
      user: user
    })
  }

  async homeinfo() {
    this.ctx.body = '主页信息';
  }

  // 接受表单post请求 this.ctx.request.body接收数据
  async add() {
    console.log(this.ctx.request.body)
  }
}

module.exports = HomeController;
