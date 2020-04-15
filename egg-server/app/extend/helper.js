// 官方文档 https://eggjs.org/zh-cn/basics/extend.html
module.exports = {
    // 可以在view和其他模块调用该方法 this.ctx.helper.foo()
    foo(param) {
        // this 是 helper 对象，在其中可以调用其他 helper 方法
        // this.ctx => context 对象
        // this.app => application 对象
        // console.log('=====')
        return "这是框架扩展helper"
    },
};