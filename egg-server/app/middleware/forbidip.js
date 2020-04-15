module.exports = (options, app) => {
    
    //返回一个异步方法
    return async function forbidIp(ctx, next) {
        // 要屏蔽的ip (数据库获取 或 参数传入)
        // var forbidip = '127.0.0.1'
        var forbidip = '196.0.0.1'
        
        // 获取客户端ip
        console.log(ctx.request.ip)

        if(ctx.request.ip == forbidip){
            ctx.status = 403
            ctx.body = "您的ip被屏蔽"
        } else {
            await next()
        }
    }
}