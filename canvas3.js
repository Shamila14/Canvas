var canvas=document.getElementById("myCanvas");
var c=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
c.fillStyle="rgba(0,255,0,1)";
c.fillRect(100,150,100,100);
c.fillStyle="rgba(1,1,255,1)";
c.fillRect(150,200,100,100);
c.fillStyle="yellow";
c.fillRect(200,250,100,100);
c.fillStyle="magenta";
c.fillRect(250,300,100,100);


//Circle
for(var i=0;i<500;i++){
  var x=Math.random()*innerWidth;
  var y=Math.random()*innerHeight;
  c.beginPath();
  c.arc(x,y,10,0,Math.PI*2);
  c.strokeStyle = "purple";
  c.stroke();
}
