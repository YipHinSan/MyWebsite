const express=require('express');
const { connect } = require('http2');
const path=require('path');

//数据库连接
require('./mg_model/connect');

//静态资源路径
let public_path=path.join(__dirname,'..','client','dist');

//启动服务
let app=express();

//设置静态资源路径
app.use(express.static(public_path));

//监听端口
app.listen(80,()=>{console.log('服务器启动成功');});