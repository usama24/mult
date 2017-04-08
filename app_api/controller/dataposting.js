var mongoose=require('mongoose');
var ursls=mongoose.model('newdata');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


       
module.exports.uploadingData=function(req,res)
{
console.log("HELLO");
  ursls.save(function(err){
    if(err){
      res.json(err);
    }
    else{
      sendJSONresponse(res,200,{
        "Message":req.file.url
      })
    }
  })
}
