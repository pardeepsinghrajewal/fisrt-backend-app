const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test',(req,res)=>{
    res.send('test route')
})

app.get('/test-2',(req,res)=>{
    res.send('test-2 route')
})

app.get('/test-3',(req,res)=>{
    res.send('test-3 route')
})

app.get('/test-4',(req,res)=>{
    res.send('test-44 route')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
