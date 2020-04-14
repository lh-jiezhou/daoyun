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

  async news() {
    const { ctx } = this;
    ctx.body = 'hi, news';
  }
}

module.exports = HomeController;
