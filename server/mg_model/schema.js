const Mywebsite=require('./connect');

const schema=new Mywebsite.Schema({
    title:{
        type:String,
        required: true
    },
    articlelink:{
        type:String,
        required:true
    },
    index:{
        type:Number,
        required: true
    }

})