/*
应用的启动模块
1. 通过express启动服务器
*/

const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

// 指定服务器到哪个文件夹，
app.use(express.static('public'))

server.listen('8080',() => {
    let host = server.address().address
    let port = server.address().port
    console.log(server.address())
    console.log('点击这里启动你的服务器http://localhost:8080')
})