var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 800;

console.log(window.innerHeight)
var radius = 1;
var dragging = false;
var color = "#0070ec"

context.strokeStyle = color;
context.fillStyle = color;

context.lineWidth = radius*2;

var putPoint = function(e){
  if( dragging ){
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    context.beginPath();
    context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
    context.fill();
    context.beginPath();
    context.moveTo(e.offsetX, e.offsetY);
  }
}

var engage = function(e){
  dragging = true;
  putPoint(e);
};
var disengage = function(){
  dragging = false;
  context.beginPath();
};    
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);

function clearCanvas(){
  context.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById("canvas-contain").scrollTo(canvas.width/3, canvas.height/3);
document.getElementById("button-clear-canvas").addEventListener('click', clearCanvas);
