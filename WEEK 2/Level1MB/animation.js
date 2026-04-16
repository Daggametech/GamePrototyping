

var canvas;
var context ;
var timer;
var interval = 1000/60;
canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");	
var ball = new GameObject();
	
ball.vx = 2;
ball.vy = 1;
ball.width = 25;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);	
	ball.move();
	
	if(ball.x > canvas.width - ball.width)
	{
		//ball.vx = ball.vx + 1;
		ball.vx = -ball.vx	
		//ball.vy = ball.vy + 1;
	}
    if(ball.x < ball.width)
      {
		//ball.vx = ball.vx - 1;
        ball.vx *= -1;
		//ball.vy = ball.vy + 1;
      }

	if(ball.y > canvas.height-ball.width)
	{
		//ball.vy = ball.vy + 1;
		ball.vy = -ball.vy	
		//ball.vx = ball.vx + 1;
	}
    if(ball.y < ball.width)
      {
		//ball.vy = ball.vy - 1;
        ball.vy *= -1;
		//ball.vx = ball.vx + 1;
      }
	
    ball.x += ball.vx;
	ball.y += ball.vy
	
	ball.drawCircle();
}
