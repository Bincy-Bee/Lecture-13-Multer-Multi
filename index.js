const express = require("express");
const multer = require("multer");
const { db } = require("./db");
const { image } = require("./image");
const app = express();
app.use(express.json());


const store = multer.diskStorage({
    destination : "image",
    filename:(req,file,cb)=>{ //cd:call back
        cb(null,Date.now() + file.originalname)
    }
})

const newimg = multer({
    storage : store
}).array("img")

app.post("/mp",newimg, async(req,res)=>{
    console.log(__dirname+'/'+ req.file.path)
    await image.create({img : __dirname + '/' + req.file.path})
    res.send("Uploaded Successfully")
})

app.listen(8090,()=>{
    console.log("Server is Listen port : http://localhost:8090");
    db();
})