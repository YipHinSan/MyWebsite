const express=require('express');
const router=express.Router();

const python=require('./python');

router.get('/python',python);



module.exports=router;