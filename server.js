var express = require("express")
var app = express();
var bodyParser = require("body-parser")
var fileUpload = require('express-fileupload');
app.use(fileUpload());

app.post("/api/fileanalyse", (req, res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    if (Object.keys(req.files).length > 1){
        return res.send('More than one file was uploaded.')
    }
    var file = req.files.file;
    console.log(file);
    res.json({
        "name": file.name,
        "type": file.mimetype,
        "size": file.size
    })
})

app.use(bodyParser.urlencoded({extended: 'false'}));
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Server listening on Port 3000")
})