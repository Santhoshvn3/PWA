var express = require('express'); 
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/public/images'));



//9th program git proile display
app.get('/',function (req, resp){
	resp.sendFile(__dirname+"/"+"public/gitppro.html")
});

//for 10th program
app.get('/lab10',function (req, resp){
	resp.sendFile(__dirname+"/"+"public/stock.html")
});

app.listen(4567,function(){
	console.log('Listening at port 4567');
});
