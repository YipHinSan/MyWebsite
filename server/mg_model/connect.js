const mongoose=require('mongoose');

const url='mongodb://127.0.0.1:27017/MyWebsite'

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log('数据库连接成功'))
    .catch(err=>console.log('数据库连接失败',err.message));

module.exports=mongoose;