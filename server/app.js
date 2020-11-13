const express=require('express');
const { connect } = require('http2');
const path=require('path');

const {PythonSet,HtmlcssSet,JavascriptSet,GenerationSet}=require('./mg_model/schema');

const router=require('./router/index');

//数据库连接
require('./mg_model/connect');
require('./mg_model/create');

//静态资源路径
let public_path=path.join(__dirname,'..','client','dist');

//启动服务
let app=express();

//设置静态资源路径
app.use(express.static(public_path));

app.use('/',router);


//监听端口
app.listen(80,()=>{console.log('服务器启动成功');});