

var canvas;
var ctx;
var timer;
var interval = 1000/60;
var prevX;

var player1 = new GameObject();
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");	

	player1.y = canvas.height/2;
	player1.width = 15;
	player1.x = player1.width;
    player1.vx = 0;
	player1.vy = 0;

    timer = setInterval(animate, interval);

function animate()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);	
	
	
	if(w == true)
	{
		player1.vy = player1.vy - 1;
	}
    if(s == true)
	{
		player1.vy = player1.vy + 1;
	}

     if(player1.y > canvas.height - player1.height)
	{
		player1.y = prevY;
		console.log("colliding");
	}
    if(player1.y < 0 + player1.height)
      {
		player1.y = prevY;
		console.log("colliding");		
      }

	player1.vy *= .85;

	
  
	player1.y += player1.vy;
	
	player1.draw();
}
