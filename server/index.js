const express = require("express")

const app = express()

app.use(require('cors')()) //引用跨域模块
app.use(express.json()) //以使用 req.bady

require('./plugins/db')(app)
require('./routes/admin')(app)  //require('./routes/admin')是一个函数(引用)，传入参数app

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
