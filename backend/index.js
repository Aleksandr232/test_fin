const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const app = express()
const PORT = process.env.PORT || 3001


app.use(express.json())

// GET
app.get('/api/age/', (req, res) => {
  res.json(
    [{id:1,title:"1+"},
    {id:2,title:"6+"},
    {id:3,title:"12+"},
    {id:4,title:"16+"},
    {id:5,title:"18+"},
    {id:6,title:"21+"},
    {id:7,title:"23+"}]
  )
})





app.listen(PORT, () => console.log('Server has been started on port 3000...'))