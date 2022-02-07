const http = require("http");
const SocketService = require("./SocketService");

/* 
  Create Server from http module.
*/
const server = http.createServer((req, res) => {
  res.write("Terminal Server Running.");
  res.end();
});

const port = 8989;

/*
    Attach websocket to server
*/
server.listen(port, function() {
  console.log("Server listening on : ", port);
  const socketService = new SocketService();

 // We are going to pass server to socket.io in SocketService.js
  socketService.attachServer(server);
});
