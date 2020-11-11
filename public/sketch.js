let socket = io(); //in our scketch load socket.io came from the socket.io library, loaded in index
let myColor = "white";

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);

function newConnection() {
  console.log("your id: "+ socket.id);
}

function drawOtherMouse(data) {
  fill("yellow"); //manca associazione del colore. da vedere codice di Mauri 
  ellipse(data.x, data.y,10);
}

function setColor(assignedColor) {
  myColor = assignedColor;
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
  push();
  fill(myColor);
  ellipse(mouseX,mouseY,20);
  pop();
  //create the message
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
  }
  //send the message
  socket.emit("mouse", message);
}
