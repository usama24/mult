var mongoose=require('mongoose');


var url=new mongoose.Schema({
	name:{
		type:String
	}
});
mongoose.model('newdata',url);
