

// var canvas;
// var context;
// var timer;
var interval = 1000/60;

var ball = new ball();
	// canvas = document.getElementById("canvas");
	// context = canvas.getContext("2d");	

	
    ball.vx = 2;
	ball.vy = 0;

    timer = setInterval(animate, interval);

function animate()
{
    	ctx.clearRect(0,0,canvas.width, canvas.height);	
	ball.move();
	
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx	
	}
    if(ball.x < 0 + ball.width/2)
      {
        ball.vx *= -1;
      }

    ball.x += ball.vx;
	
	ball.drawCircle();
}