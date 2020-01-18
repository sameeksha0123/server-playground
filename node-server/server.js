const express=require('express');
const hbs=require('hbs');
const fs=require('fs')
const app=express();

app.set('view engine','hbs')
app.use(express.static(__dirname + '/public'))

var logger=function(req,res,next){
    var now=new Date().toString();
    var log= `${now}: ${req.method} ${req.url}`
    console.log(log)
    console.log(res)
    fs.appendFile('server.log' , log + '\n',err=>{
        if(err){
            console.log("Unable to connect")
        }
    })
    next();
}
app.use(logger)
// app.use((req,res,next)=>{
// var now=new Date().toString();
// var log= `${now}: ${req.method} ${req.url}`
// console.log(log)
// fs.appendFile('server.log', log +'\n');
// next();
// })

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page',
        message:"Got Some text here"
    })
})
app.get('/',(req,res)=>{
    //html
// res.send("<h1>HEllo World</h1>")

//json object
res.send({
    name:"Sameeksha",
    listTech:[
        "node","js","react"
    ]
});
app.get('/bad',(req,res)=>{
    res.send({
        error:"Unable to connect"
    })
   
})
});

app.listen(3001,()=>{
    console.log("Server is conntected n port 3000")
})