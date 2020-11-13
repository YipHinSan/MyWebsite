const express=require('express');
const router=express.Router();

const python=require('./python');
const js=require('./js');
const generation=require('./generation');
const htmlcss=require('./htmlcss');

router.get('/python',python);
router.get('/js',js);
router.get('/generation',generation);
router.get('/htmlcss',htmlcss);



module.exports=router;