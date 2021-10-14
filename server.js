const express=require('express')
const app=express();
require('dotenv').config()
const port =process.env.PORT;

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(port,()=>{
    console.log(`Server is running at port :${port}`);
})