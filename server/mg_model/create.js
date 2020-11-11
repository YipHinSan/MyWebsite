const {PythonSet,HtmlcssSet,JavascriptSet,GenerationSet}=require('./schema');

PythonSet.create([
    {title:'Hi',articlelink:'/1.html',index:'1'},
],(err)=>{
    if(!err){
        console.log('数据插入成功');
    }else throw err;
})