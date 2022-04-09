const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/yojana'

const app = express();
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected To MongoDB')
    
})

app.use(express.json())

const categoryRouter = require('./routers/category')
app.use('/category', categoryRouter)

const filteredYojanas = require('./routers/filteredYojanas')
app.use('/filteredYojanas', filteredYojanas)

const searchYojanas = require('./routers/searchYojanas')
app.use('/searchYojanas' , searchYojanas)



app.listen(9000, () => {
    console.log("Server Started on port 9000")
})