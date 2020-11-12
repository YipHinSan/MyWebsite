const {PythonSet,HtmlcssSet,JavascriptSet,GenerationSet}=require('./schema');

const fs=require('fs');
const path=require('path');
const cheerio=require('cheerio');
const { promisify } = require('util');
const { html } = require('cheerio');

const readFile=promisify(fs.readFile);

// PythonSet.create([
//     {title:'Hi',articlelink:'/1.html',index:'1'},
// ],(err)=>{
//     if(!err){
//         console.log('数据插入成功');
//     }else throw err;
// })

let dirpath=path.join(__dirname,'..','documentation','html');//所有html文档根目录

let pythonDir=path.join(dirpath,'python');//python 文档目录
let jsDir=path.join(dirpath,'js'); // js文档目录
let htmlcssDir=path.join(dirpath,'htmlcss');  //html和css文档目录
let generationDir=path.join(dirpath,'generation'); //分布式发电技术文档目录

//创建分布式发电技术文档页面链接字段
let generationList=fs.readdirSync(generationDir);
for (let i in generationList){
    let filename=jsList[i];  //第i个文档的名字
    let fileindex=filename.split('.')[0];  //去除扩展名，留下名字成为索引
    let filepath=path.join(jsDir,filename);  //第i个文档的路径

    GenerationSet.findOne({index:fileindex})    //判断第i个文件是否存在数据库中
        .then(async data=>{
            if(data);
            else{
                let text= await readFile(filepath,'UTF-8');     //读取这个html文档
                let $=cheerio.load(text,{decodeEntities:false});    //解析文档
                let h1=$('h1').text();  //提取h1标题

                GenerationSet.create({index:fileindex,title:h1,articlelink:filepath});
            }
        })
}

//创建htmlcss文档页面链接字段
let htmlcssList=fs.readdirSync(htmlcssDir);
for (let i in htmlcssList){
    let filename=jsList[i];  //第i个文档的名字
    let fileindex=filename.split('.')[0];  //去除扩展名，留下名字成为索引
    let filepath=path.join(jsDir,filename);  //第i个文档的路径
    HtmlcssSet.findOne({index:fileindex})    //判断第i个文件是否存在数据库中
    .then(async data=>{
        if (data);
        else{
            let text= await readFile(filepath,'UTF-8');     //读取这个html文档
            let $=cheerio.load(text,{decodeEntities:false});    //解析文档
            let h1=$('h1').text();  //提取h1标题

            HtmlcssSet.create({index:fileindex,title:h1,articlelink:filepath});
        }
    })    
}

//创建js文档页面链接字段
let jsList=fs.readdirSync(jsDir); //js文档目录下所有文档名的列表
for(let i in jsList){
    let filename=jsList[i];  //第i个文档的名字
    let fileindex=filename.split('.')[0];  //去除扩展名，留下名字成为索引
    let filepath=path.join(jsDir,filename);  //第i个文档的路径

    JavascriptSet.findOne({index:fileindex})    //判断第i个文件是否存在数据库中
        .then(async data=>{
            if (data);
            else{
                let text= await readFile(filepath,'UTF-8');     //读取这个html文档
                let $=cheerio.load(text,{decodeEntities:false});    //解析文档
                let h1=$('h1').text();  //提取h1标题

                JavascriptSet.create({index:fileindex,title:h1,articlelink:filepath});
            }
        })
}

//创建python文档页面链接字段
let pythonList=fs.readdirSync(pythonDir);
for (let i in pythonList){
    let filename=pythonList[i];
    let fileindex=filename.split('.')[0];
    let filepath=path.join(pythonDir,filename);

    // console.log(filename,fileindex,filepath);
    
    PythonSet.findOne({index:fileindex})
    .then(async data=>{
        if(data) ;
        else {
            let text= await readFile(filepath,'UTF-8');
            let $=cheerio.load(text,{decodeEntities:false});
            let h1=$('h1').text();
            // createList.push({index:fileindex,title:h1,articlelink:filepath})
            // console.log(createList);
            PythonSet.create({index:fileindex,title:h1,articlelink:filepath});
        }
    }).catch(err=>console.log(err.message));
    
}



