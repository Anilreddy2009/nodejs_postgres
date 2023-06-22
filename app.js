const express=require('express');
const app=express();
const sudentRoutes = require('./student/routes');


app.use(express.json());
app.get('/',(req,res)=>{
    res.send('hello world...');
})
app.use(sudentRoutes);

app.listen(3000,()=>{
    console.log("connected...");
});