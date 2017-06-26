//First import packages downloaded
//Using the require keyword

var express = require("express");
var app=express();
var http=require("http").Server(app);
var io = require("socket.io")(http); //IO is going to be how we commuicate between clients

//You can think of io as being the server, passing data between two/more clients

//app.get(path, callback)
app.get("/", function(req,res){
	res.sendFile(__dirname+"/index.html");
});

//Use express to serve up static files (css,js,other htmls besidesindex) so that our page can be pretty

app.use(express.static(__dirname+"/public"));
//Tell the server where it should run on the host

io.on('connection',function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	})
})

http.listen(process.env.PORT || 3000, function(){
	console.log("listening on *:3000");
})