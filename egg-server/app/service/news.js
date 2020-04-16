'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
    async getNewsList() {
        // 获取新闻数据
        // var list = ['11', '22']
        // return list

        // 通过抓取接口返回数据
        // egg提供curl方法可以获取远程数据
        var url = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1'
        var response = await this.ctx.curl(url)
        // console.log(response.data) // 返回Buffer类型
        var data = JSON.parse(response.data) // 把Buffer转化为json对象 
        return data.result
    }

    async getNewsContent(aid) {
        // console.log(aid) //aid是json对象,里边有aid属性
        var url = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid.aid;
        // console.log(url)
        var response = await this.ctx.curl(url)
        var data = JSON.parse(response.data) // 把Buffer转化为json对象 
        return data.result
    }
}

module.exports = NewsService;
