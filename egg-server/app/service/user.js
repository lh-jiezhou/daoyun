'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async getUserInfo() {
        // return {
        //     name: "张三",
        //     age: 20
        // }
        const user = await this.ctx.model.User.findAll()
        return user
    }
}

module.exports = UserService;
