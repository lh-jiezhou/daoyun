import axios from 'axios'

const http_egg = axios.create({
    baseURL: 'http://127.0.0.1:7001/admin/api'
})

//导出http变量 只能一个 http 不能加 {}大括号
export default http_egg
