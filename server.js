var express = require("express");
var app = express();
var multer = require("multer");
var http = require("http").Server(app);
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var PORT = process.env.PORT || 3003;
var array = [];
var index = 1;
var array = null;

cloudinary.config({ 
  cloud_name: 'usama24', 
  api_key: '687933813526549', 
  api_secret: 'LiW4Lm4myKOYvguHQluzGxBnSj0' 
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'folder-name',
   
})

var parser = multer({ storage: storage });
 
 


app.post('/upload', parser.single('images'), function (req, res) {

	for(var f of req.files) { 
    	array.push(f.url); 
    }
  
  console.log(array);
  res.json(array);

});

// app.get("/", function (req, res) {

//      res.sendfile("index.html");
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