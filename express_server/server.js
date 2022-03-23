/*
应用的启动模块
1. 通过express启动服务器
*/

const express = require('express')
const app = express()

const mysql = require('mysql')
const db_config = require('./configs/db')

const http = require('http')
const server = http.createServer(app)

// 指定服务器到哪个文件夹
app.use(express.static('public'))


let connect=mysql.createConnection(db_config);
//开始链接数据库
connect.connect(function(err){
    if(err){
        console.log(`mysql连接失败!!!!!!!!: ${err}!`);
    }else{
        console.log("mysql连接成功!!!!!!!");
        // 只有当连接上了数据库才去启动服务器
        server.listen('8080',() => {
            let host = server.address().address
            let port = server.address().port
            //console.log(server.address())
            console.log('点击这里启动你的服务器http://localhost:8080')
        })
    }
})