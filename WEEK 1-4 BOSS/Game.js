

var canvas;
var context;
var gravity = 1;
var timer;
var interval = 1000/60;
var prevY;
var Score = 0;

	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");	

var player1 = new GameObject();

	player1.y = canvas.height - 50;
	player1.width = 250;
	player1.height = 40;
	player1.x = canvas.width/2;
    player1.vx = 0;
	player1.vy = 0;
	player1.color = "cyan";
	player1.vx *=.90;

var third = player1.width/3;
var sixth = player1.width/6;


var ball = new GameObject();
	
	ball.y = canvas.height/2;
	ball.x = canvas.width/2;
	ball.vx = 5;
	ball.vy = 0;
	ball.width = 40;
	ball.height = 40;
	ball.color = "magenta"
	ball.force = 1;

    timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);	
	ball.move();

	if(ball.x > canvas.width - ball.width)
	{
		//ball.vx = ball.vx + 1;
		ball.vx = -ball.vx;
		//ball.vy = ball.vy + 1;
	}
    if(ball.x < ball.width)
      {
		//ball.vx = ball.vx - 1;
        ball.vx *= -1;
		//ball.vy = ball.vy + 1;
      }

	if(ball.y > canvas.height - ball.width)
	{
		//ball.vy = ball.vy + 1;
		ball.vy = -ball.vy	
		Score = 0;
		//ball.vx = ball.vx + 1;
	}
    if(ball.y < ball.width)
      {
		//ball.vy = ball.vy - 1;
        ball.vy *= .67;

		//ball.vx = ball.vx + 1;
      }
	
	if(a == true)
	{
		player1.vx = player1.vx - 1;
		player1.vx *= 1.001;
	}
    if(d == true)
	{
		player1.vx = player1.vx + 1;
		player1.vx *= 1.001;
	}
	if(a == false && d == false)
	{
		player1.vx *= .85;
	}

     if(player1.x > canvas.width - player1.width/2)
	{
		player1.vx = -player1.vx;
	}
    if(player1.x < player1.width/2)
      {
		player1.vx *= -1;
      }



	if (player1.hitTestObject(ball)) {
		// if(ball.x > player1.x - third && ball.x < player1.x + third)
		// {
		// 	ball.vy = -35;
		// }

		if (ball.x < player1.x - player1.width/2 + third) {

			ball.vx = -ball.force;
		}
		if (ball.x < player1.x - player1.width/2 + sixth) {

			ball.vx = -ball.force * 5;
		}

		if (ball.x > player1.x  + player1.width/2 - third) {

			ball.vx = ball.force
		}
		if (ball.x > player1.x + player1.width/2 - sixth) {

			ball.vx = ball.force * 5;
		}
		ball.y = player1.y - ball.width - player1.height / 2;
		ball.vy = -20;
		Score++;
	}


  	ball.x += ball.vx;
	ball.y += ball.vy;
	ball.vy += gravity;
	player1.x += player1.vx;
	
	player1.drawRectangle();
	ball.drawCircle();

	context.save();
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(ball.x, ball.y);
	context.lineTo(player1.x, player1.y);
	context.closePath();
	context.lineWidth = 2;
	context.stroke();
	context.restore();

	context.font = "16px Georgia";
	context.fillText(`Score:${Score}`, 80, 25);
	//context.fillText(Score, 80, 27);


}

