var io = require('socket.io'); //useless at the moment
var app = require('express')();

// var server = http.createServer(function (req, res){
// res.end('you asked for something else');
//});


var http = require('http').Server(app);;

app.get('/',function(req, res){
//
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
console.log('listening on *3000');
});