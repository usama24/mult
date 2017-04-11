var mongoose=require('mongoose');


var url=new mongoose.Schema({
	username:{
		type:String
	}
});
mongoose.model('user',url);
