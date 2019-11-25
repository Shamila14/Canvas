var canvas=document.getElementById("myCanvas");
var c=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
c.fillStyle="rgba(255,0,0,1)";
c.fillRect(100,100,100,100);
c.fillStyle="rgba(0,255,0,1)";
c.fillRect(400,100,100,100);
c.fillStyle="rgba(0,0,255,1)";
c.fillRect(300,300,100,100);

//LINE
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.fillStyle="rgba(255,255,0,1)";
c.stroke();

//Circle
for(var i=0;i<30;i++){
  var x=Math.random()*innerWidth;
  var y = Math.random()*innerHeight;
  c.beginPath();
  c.arc(x,y,40,0,Math.PI*2);
  c.strokeStyle = "black"
  c.stroke();
}
