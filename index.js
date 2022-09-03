const express = require('express')

const app = express()

const multer = require('multer')

const upload = multer({dest:'uploads/'})

app.post('/',upload.single('image'),(req,res)=>{
    const img = req.file
    console.log(img)
    res.send('uploded')
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})
