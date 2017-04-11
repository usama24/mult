var express = require('express');
var router = express.Router();
var multer = require('multer');
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({ 
  cloud_name: 'usama24', 
  api_key: '687933813526549', 
  api_secret: 'LiW4Lm4myKOYvguHQluzGxBnSj0' 
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'folder-name',
   
})

var parser = multer({ storage: storage});

//Guard Validation
var postingData=require('../controller/dataposting');

router.post('/upload',parser.single('video'),postingData.uploadingData);
router.get('/upload',postingData.gettingData);
router.delete('/upload',postingData.deletingData);
router.post('/uploads',postingData.sendingData);
router.get('/uploads',postingData.sendingpostingData);



module.exports = router;