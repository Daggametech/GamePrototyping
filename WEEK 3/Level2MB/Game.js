

// var canvas;
// var context;
// var timer;
var interval = 1000/60;

var player1 = new GameObject();
	// canvas = document.getElementById("canvas");
	// context = canvas.getContext("2d");	

	
    ball.vx = 0;
	ball.vy = 0;

    timer = setInterval(animate, interval);

function animate()
{
    	ctx.clearRect(0,0,canvas.width, canvas.height);	
	ball.move();
	
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.vx = ball.vx + 1;
		ball.vx = -ball.vx	
		ball.vy = ball.vy + 1;
	}
    if(ball.x < 0 + ball.width)
      {
		ball.vx = ball.vx - 1;
        ball.vx *= -1;
		ball.vy = ball.vy + 1;
      }

if(ball.y > canvas.height - ball.width/2)
	{
		ball.vy = ball.vy + 1;
		ball.vy = -ball.vy	
		ball.vx = ball.vx + 1;
	}
    if(ball.y < 0 + ball.width)
      {
		ball.vy = ball.vy - 1;
        ball.vy *= -1;
		ball.vx = ball.vx + 1;
      }
	
    ball.x += ball.vx;
	ball.y += ball.vy
	
	ball.drawCircle();
}
