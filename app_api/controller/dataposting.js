var mongoose=require('mongoose');
var ursls=mongoose.model('newdata');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


       
module.exports.uploadingData=function(req,res)
{

  ursls.save(function(err){
    if(err){
      res.json(err);
    }
    else{
       res.json(req.file.url);
    }
  })
}
