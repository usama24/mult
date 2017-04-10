var mongoose=require('mongoose');
var ursls=mongoose.model('newdata');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


       
module.exports.uploadingData=function(req,res)
{
  var urlsss=new ursls();
  urlsss.name=req.file.url;
 urlsss.save(function(err){
  if(err)
  {
    sendJSONresponse(res,401,{
      "Message":err
    })
  }
  else{
    sendJSONresponse(res,200,{
      "Message":req.file.url
    })
  }
 })
}

module.exports.gettingData=function(req,res)
{
   ursls.find({},function(err,docs){
    if(!err)
    {
      var value=docs;
       ursls.remove({},function(err,removed)
  {
sendJSONresponse(res,200,{
  "Message":docs
})
  })
    }
    else
      throw err;
  })

}

module.exports.deletingData=function(req,res)
{
  ursls.remove({},function(err,removed)
  {
sendJSONresponse(res,200,{
  "Message":"Deleted data"
})
  })
}


/*
var mongoose=require('mongoose');
var ursls=mongoose.model('newdata');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


       
module.exports.uploadingData=function(req,res)
{
  var urlsss=new ursls();
  urlsss.name=req.file.url;
 urlsss.save(function(err){
  if(err)
  {
    sendJSONresponse(res,401,{
      "Message":err
    })
  }
  else{
    sendJSONresponse(res,200,{
      "Message":req.file.url
    })
  }
 })
}

module.exports.gettingData=function(req,res)
{
   ursls.find({},function(err,docs){
    if(!err)
    {
      sendJSONresponse(res,200,docs);
    }
    else
      throw err;
  })

}

module.exports.deletingData=function(req,res)
{
  ursls.remove({},function(err,removed)
  {
sendJSONresponse(res,200,{
  "Message":"Deleted data"
})
  })
}
*/