var express = require("express");
var app = express();
var multer = require("multer");
var http = require("http").Server(app);
var PORT = process.env.PORT || 3003;

app.get("/", function (req, res) {

     res.sendfile("index.html");
});

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	 
	 cb(null,__dirname+'/upload-folder');
		},
	filename: function (req, file, cb) {
		cb(null, file.fieldname+".jpeg");
	}	

});

var upload = multer({
	storage: storage
})

app.post("/upload", upload.single("file"),function (res, req) {
	// body...
});

http.listen(PORT,function () {
	console.log("server is listening at "+PORT);
	
});

// "C:\Users\Usama Amjad\Desktop\Node"