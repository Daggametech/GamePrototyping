

var canvas;
var context;
var timer;
var interval = 1000/60;
var prevY;

	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");	

var player1 = new GameObject();

	player1.y = canvas.height/2;
	player1.width = 15;
	player1.x = player1.width;
    player1.vx = 0;
	player1.vy = 0;
	third = player1.height/3;


var ball = new GameObject();
	
	ball.vx = -2;
	//ball.vy = 1;
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
    if(ball.x <  -ball.width)
      {
		//ball.vx = ball.vx - 1;
        ball.x =canvas.width/2;
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
		player1.vy = -player1.vy;
	}
    if(player1.y < player1.height)
      {
		player1.vy *= -1;
      }

	player1.vy *= .85;

	if (ball.hitTestObject(player1))
	{
		//Reflection Code in here
		if(ball.y < third)
		{
			ball.vx *= -1;
			ball.vy = 2;		
		}
		if (ball.y > third)
		{
			if(ball.y > third*2)
			{
			ball.vx *= -1;
			ball.vy = -2;
			}

			ball.vx *= -1;
			ball.vy = ball.vy;	
		}

	}


  	ball.x += ball.vx;
	ball.y += ball.vy
	player1.y += player1.vy;
	
	player1.drawRectangle();
	ball.drawCircle();

}

