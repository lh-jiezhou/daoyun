'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
    async getNewsList() {
        // 获取新闻数据
        var list = ['11', '22']
        return list
    }
}

module.exports = NewsService;
