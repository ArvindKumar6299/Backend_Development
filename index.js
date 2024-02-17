require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 3000   //3000 port pe listen kr lo

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
    res.send('YadavJi')
})

app.get('/login',(req,res)=>{
    res.send("<h1>Please Login </h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

