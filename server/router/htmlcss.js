const express=require('express');
const router=express.Router();
const {PythonSet,HtmlcssSet,JavascriptSet,GenerationSet}=require('../mg_model/schema');
const fs=require('fs');
const cheerio=require('cheerio');

const { promisify } = require('util');
const readFile=promisify(fs.readFile);

// router.get('/',(req,res)=>{
    
// })

router.get('/:id',(req,res)=>{
    let index=req.query.id;

    if(index){
        HtmlcssSet.findOne({index:index}).then(async data=>{
            console.log(data);
            let title=data.title;
            let text= await readFile(data.articlelink,'UTF-8');
            let $=cheerio.load(text,{decodeEntities:false});
            let article=$('.article').html();
            res.send({title,article});
        })
    }else{
        HtmlcssSet.find().then(data=>{
            res.send(data);
        });
    }
    
});

module.exports=router;