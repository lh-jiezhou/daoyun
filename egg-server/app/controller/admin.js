'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'admin';

    //koa给用户信息
    // ctx.body = '用户管理'
    //egg给用户信息
    this.ctx.body = '用户管理'
    // console.log(this)
  }

}

module.exports = AdminController;
