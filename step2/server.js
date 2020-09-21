const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const fs = require("fs");
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
const formData = require("express-form-data");

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/upload-photo-to-server.html'));
})

const options = {
    uploadDir:'temp',
    autoClean: true
  };
// parse data with connect-multiparty. 
app.use(formData.parse(options));
// delete from the request all empty files (size == 0)
app.use(formData.format());
// change the file objects to fs.ReadStream 
app.use(formData.stream());
// union the body and the files
app.use(formData.union());


app.use(express.static('public'));

app.post(
    '/', 
    (req, res) => {
        console.log(req.files.media.path);
        res.status(200);
        const fileName = __dirname + '/' + req.files.media.path;
        const destFileName = __dirname + '/public/resized.png';

        fs.stat(
            fileName,
            (err, stats) => {
                fs.renameSync(fileName, destFileName);
            }
        )
    }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})