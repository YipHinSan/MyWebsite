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
});

let PythonSet=Mywebsite.model("Python",schema);
let HtmlcssSet=Mywebsite.model("HTMLCSS",schema);
let JavascriptSet=Mywebsite.model("JS",schema);
let GenerationSet=Mywebsite.model("Generation",schema);

module.exports={
    PythonSet,
    HtmlcssSet,
    JavascriptSet,
    GenerationSet
};