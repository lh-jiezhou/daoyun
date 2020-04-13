import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})

const http_egg = axios.create({
    baseURL: 'http://127.0.0.1:7001/admin/api'
})

//导出http变量
export default {
    http,
    http_egg
}