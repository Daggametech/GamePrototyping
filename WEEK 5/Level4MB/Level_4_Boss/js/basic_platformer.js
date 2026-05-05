//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var hit = 0;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:300, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = canvas.width;
		platform0.x = canvas.width/2;
		platform0.y = canvas.height;
		platform0.color = "#66ff33";
		
	obstical0 = new GameObject();
		obstical0.width = player.width/2;
		obstical0.height = player.height;
		obstical0.x = 1500;
		obstical0.y = 700;
		obstical0.vx = -4;
		obstical0.color = "#faa70d";


	// platform1 = new GameObject();
	// 	platform1.x = 500;
	// 	platform1.y = platform0.y- platform0.height/2 - platform1.height/2;
	// 	platform1.color = "#ffff00";
		
	// platform2 = new GameObject();
	// 	platform2.width = canvas.width-300;
	// 	platform2.x = platform0.width/2;
	// 	platform2.color = "#66ff33";
	// 	platform2.y = platform0.y- 200;
	// 	platform2.color = "#66ff33";

		
	
	// goal = new GameObject({width:24, height:50, x:700, y:platform0.y-100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	
	// platform1.x += platform1.vx;

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	if(obstical0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
		player.vx = 0;
		obstical0.vx = 0;

		hit++;
	}
	if(obstical0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.vx = 0;
		obstical0.vx = 0;

		hit++
	}
	if(obstical0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
		player.vy = 0;
		obstical0.vx = 0;

		hit++
	}
	if(obstical0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
		player.vy = 0;
		obstical0.vx = 0;

		hit++;
	}
	if (obstical0.x < 0)
	{
		obstical0.x = 1500;
	}
	// while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	// {
	// 	player.y++;
	// 	player.vy = 0;
	// }
	// while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	// {
	// 	player.y--;
	// 	player.vy = 0;
	// 	player.canJump = true;
	// }
	// while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	// {
	// 	player.x++;
	// 	player.vx = 0;
	// }
	// while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	// {
	// 	player.x--;
	// 	player.vx = 0;
	// }
	// if(platform1.hitTestPoint(player.right()) && player.vx >=0)
	// {
	// 	platform1.x = 10000;
		
	// }
	
	//---------Objective: Let Me Out!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Write a condition so that the player opens the yellow door to get the pearl-----------------------------------------

	
	

	// if(player.hitTestObject(goal))
	// {
	// 	goal.y = 10000;
	// }
	



	

	
	
	
	
	
	platform0.drawRect();
	// platform2.drawRect();
	// platform1.drawRect();
	player.drawRect();
	obstical0.drawRect();
	obstical0.move();

	if (hit > 0)
	{
		context.font = "100px Georgia";
		context.fillText("Game Over", canvas.width/2 - 250, canvas.height/2);

	}


	//Show hit points
	player.drawDebug();
	// goal.drawCircle();
}

