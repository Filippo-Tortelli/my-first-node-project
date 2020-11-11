console.log("node is runnig");

let express = require("express"); //require load all the code in the express module

let socket = require("socket.io"); //io = imput output

let app = express(); //execute express

let port = 3000; //every connection have an adress and we need a port //common port

let server = app.listen(port); //start the server

app.use(express.static("public"));

let io = socket(server);

io.on("connection", newConnection);

function newConnection(socket) {
  console.log("new connection: " + socket.client.id);

  socket.on("mouse", mouseMessage);

  function mouseMessage(dataReceived) {
    console.log(dataReceived);
  }
}
