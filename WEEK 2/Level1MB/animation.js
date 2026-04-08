

// var canvas;
// var context;
// var timer;
var interval = 1000/60;

var ball = new ball();
	// canvas = document.getElementById("canvas");
	// context = canvas.getContext("2d");	

	
    ball.vx = 2;
	ball.vy = 1;

    timer = setInterval(animate, interval);

function animate()
{
    	ctx.clearRect(0,0,canvas.width, canvas.height);	
	ball.move();
	
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx	
	}
    if(ball.x < 0 + ball.width)
      {
        ball.vx *= -1;
      }

if(ball.y > canvas.hieght - ball.width/2)
	{
		ball.vy = -ball.vy	
	}
    if(ball.y < 0 + ball.width/2)
      {
        ball.vy *= -1;
      }
	
    ball.x += ball.vx;
	ball.y += ball.vy
	
	ball.drawCircle();
}
