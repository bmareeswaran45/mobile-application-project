const express = require('express')
const mongoose =require('mongoose')
const rou = require('./Routes/user2')
const cors = require('cors')



const app = express();
app.use(cors())

app.use(express.json())


app.use('/mobiles',rou) //localhost:2000/mobiles

mongoose.connect('mongodb+srv://Admin:PTuJZH7anPaouTZh@cluster0.khiphfp.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('DB Connect Successfully')
})
.then(()=>{
    app.listen(2000)
})



//PTuJZH7anPaouTZh
//mongodb+srv://Admin:<password>@cluster0.khiphfp.mongodb.net/?retryWrites=true&w=majority