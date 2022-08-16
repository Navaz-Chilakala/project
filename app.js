const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
const port=process.env.port || 8080;
const homeRouter=require('./router/homeRouter');
const app=express();
const path=require('path');
// app.get('/',(err,res)=>{
//     res.send("hello");
// })
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/',homeRouter);

mongoose.connect('mongodb+srv://root:root@cluster0.a7sy8dv.mongodb.net/registration',{useNewUrlParser:true})
const db=mongoose.connection;

db.on("error",()=>{console.log("error in connection");});
db.once('open',()=>{console.log("successfull");});
app.set('view engine','ejs')
app.use(express.static('public'));
app.listen(port);
