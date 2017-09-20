var server = require('websocket').server, http = require('http');

var clients = [];
var socket = new server({
  httpServer: http.createServer().listen(process.env.PORT || 1337)
});


socket.on('request', function(request) {
  var connection = request.accept(null, request.origin);
  clients.push(connection);

  connection.on('message', function(message) {
    //broadcast the message to all the clients
    clients.forEach(function(client) {
      client.send(message.utf8Data);
    });
  });

  connection.on('close', function(connection) {
        console.log('connection closed');
  });
});

