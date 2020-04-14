import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})

//导出http变量 只能一个 http 不能加 {}大括号
export default http