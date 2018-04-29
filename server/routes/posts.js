const express=require('express');
const axios=require('axios');
const Router= express.Router();

const path="https://jsonplaceholder.typicode.com/posts";

Router.get('/',(req,res)=>{
    axios.get(path).then((response)=>{
        res.send(response.data);
    })
})

Router.get("/hi",(req,res)=>{
    res.send('hi');
})

Router.delete('/:id',(req,res)=>{
    console.log(req.params.id);
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
      .then(res => {
        console.log(res.data);
      })
      
    
})



Router.post('/',(req,res)=>{
    axios.post(path,req.body)
    .then((response)=>{res.send(response.data)})
})

module.exports=Router;