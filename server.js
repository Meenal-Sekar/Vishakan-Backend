const express=require('express');

const app=express();
const mongoose=require('mongoose');
const routerurl=require('./routes/routes');//router+schema;
const cors=require('cors');

app.use(express.json());
app.use(cors())

app.use("/app",routerurl);
if(mongoose.connect('mongodb+srv://meenal-sekar:1805vishu@cluster0.vskqmqg.mongodb.net/hosipital-db?retryWrites=true&w=majority'))
{
    console.log('database is connected');
}
app.listen(4000,()=>
{
    console.log('Server is ready');
})
