let socket = io(); //in our scketch load socket.io came from the socket.io library, loaded in index

socket.on("connect", newConnection);

function newConnection() {
  console.log("your id: "+ socket.id);
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background("purple");
}

function draw() {
  // put drawing code here
}

function mouseMoved() {
  ellipse(mouseX,mouseY,20);
  //create the message
  let message = {
    x: mouseX,
    y: mouseY,
  }
  //send the message
  socket.emit("mouse", message);
}
