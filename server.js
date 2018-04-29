const express=require('express');
const bodyParser=require('body-parser')
const path=require('path');
const axios=require('axios');

const app=express();
app.use(bodyParser.json())

const posts= require('./server/routes/posts');

app.use(express.static(path.join(__dirname,'dist')));

app.use('/postsData',posts)


app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist','index.html'))
})


const port= process.env.PORT || 4600;

app.listen(port,(req,res)=>{
    console.log(`Running in port ${port}`)
})