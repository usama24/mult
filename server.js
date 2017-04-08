var express = require("express");
var app = express();
var multer = require("multer");
var http = require("http").Server(app);
var cloudinary = require('cloudinary');
var mongoose=require('mongoose');
var cloudinaryStorage = require('multer-storage-cloudinary');
var PORT = process.env.PORT || 3003;
var array = [];
var index = 1;
require('./data.js');
var urls=mongoose.model('newdata');

cloudinary.config({ 
  cloud_name: 'usama24', 
  api_key: '687933813526549', 
  api_secret: 'LiW4Lm4myKOYvguHQluzGxBnSj0' 
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'folder-name',
   
})

var parser = multer({ storage: storage }).single('images');
 



app.post('/upload', parser, function (req, res) {

	 console.log("chal rha ha !");
  
  urls.save(function(err){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(req.file.url);
    }
  })

});

app.get('/upload',function(req,res){
urls.find({},function(err,docs){
  if(docs)
  {
    res.json(docs);
  }
  else{
    res.json("No data");
  }
})

});


// app.get("/url", function (req, res) {

//      res.json(array);
// });

// var storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
	 
// 	 cb(null,__dirname+'/upload-folder');
// 		},
// 	filename: function (req, file, cb) {
// 		cb(null, file.fieldname+".jpeg");
// 	}	

// });

// var upload = multer({
// 	storage: storage
// })

// app.post("/upload", upload.single("file"),function (res, req) {
// 	// body...
// });

http.listen(PORT,function () {
	console.log("server is listening at "+PORT);
	
});

// "C:\Users\Usama Amjad\Desktop\Node"