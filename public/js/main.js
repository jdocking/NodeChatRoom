var socket=io(); 
$("form").submit(function(){
	socket.emit('chat message',$("#messageField").val());
	$("#messageField").val("");
	return false;
})

//socket.on(event, callback function)

socket.on('chat message', function(msg){
	$("#messages").append($("<li>").text(msg));
})