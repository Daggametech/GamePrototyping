


var canvas = document.getElementById(`canvas`);
var context = canvas.getContext(`2d`);

var interval = 1000/60;
var timer = setInterval(animate, interval);

var InGameTimer;

var SurvivalCount = 0;

function count ()
{
	SurvivalCount++;
}

var startButton = new GameObject();

startButton.width = 100;
startButton.hitBoxWidth = 200;
startButton.x = canvas.width/2;
startButton.y = canvas.height/2;
// console.log(startButton.collisionPoints.right);


var instructButton = new GameObject();

instructButton.width = 100;
instructButton.hitBoxWidth = 200;
instructButton.x = canvas.width/2;
instructButton.y = canvas.height/2 + 200;
// console.log(instructButton.collisionPoints.right);


var menuButton = new GameObject();

menuButton.width = 100;
menuButton.hitBoxWidth = 200;
menuButton.x = canvas.width/2;
menuButton.y = canvas.height/2 + 200;
// console.log(instructButton.collisionPoints.right);

var gameBackground = new GameObject();
gameBackground.color = "black";
gameBackground.width=canvas.width;
gameBackground.height=canvas.height;


	var fX = .85;
	var fY = .97;
	
	var gravity = 1;
	var gameOver = false;


var player;


var hit = 0;

player = new GameObject({x:300, y:canvas.height/2-100});
player.jumpHeight = -30;

var	platform0 = new GameObject();
		platform0.width = canvas.width;
		platform0.x = canvas.width/2;
		platform0.y = canvas.height;
		platform0.color = "#66ff33";
var platform = [];
for(var i = 1; i < 6; i++)
{
    platform[i] = new GameObject();
		platform[i].width = 200 + Math.random()*201;
		platform[i].height = 50;
		platform[i].x = 2500 + i*200;
		platform[i].y = platform0.y - 200 - (Math.random()*401);
		platform[i].color = "#66ff33";
		platform[i].vx = -4;

}
var junk = [];
var lastx = 2500;
for(var i = 0; i < 8; i++)
{
	junk[i] = new GameObject();
		junk[i].width = player.width/2 +Math.random()*50;
		junk[i].height = player.height + Math.random()*150;
		junk[i].x = lastx + Math.random()*1000;
		junk[i].y = 700;
		junk[i].vx = -4;
		junk[i].color = "#faa70d";
		lastx = junk[i].x;
}
var falljunk = [];
for(var i = 0; i < 8; i++)
{
	falljunk[i] = new GameObject();
		falljunk[i].width = player.width/2 + Math.random()*50;
		falljunk[i].height = player.height + Math.random()*25;
		falljunk[i].x = Math.random()*canvas.width;
		falljunk[i].y = -100 - Math.random()*2000;
		falljunk[i].vy = 1 + Math.random()*9;
		falljunk[i].vx = (Math.random()*3)*-1;
		falljunk[i].color = "#faa70d";

}
var bouncePad = [];
for(var i = 0; i < 4; i++)
{
	bouncePad[i] = new GameObject();
		bouncePad[i].width = player.width;
		bouncePad[i].height = player.height/4;
		bouncePad[i].x = 2500 + i*1000;
		bouncePad[i].y = 700;	
		bouncePad[i].color = "purple";
		bouncePad[i].vx = -4;

}

var gameStates = [];



function changeStates(stateName)
{
	currentState = stateName;
}

currentState = "menu"

gameStates["menu"] = function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			InGameTimer = setInterval(count, 1000);
			changeStates("mainGame");
		}

		startButton.color = "blue";
		

	}
	else
	{
		//Default Button Graphic
		startButton.color = "red";
	}
	

	if(instructButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			changeStates("instructions");

		}

		instructButton.color = "blue";
		

	}
	else
	{
		//Default Button Graphic
		instructButton.color = "red";
	}



	gameBackground.drawRect();
	startButton.drawRect();
    instructButton.drawRect();

	context.font = "100px Georgia";
	context.fillStyle = "white";
	context.fillText("Junk Runner", canvas.width/2 - 300, canvas.height/2 - 200);

	context.font = "50px Georgia";
	context.fillText("Click here for Instructions", canvas.width/2 - 270, canvas.height/2 + 140);

	context.font = "50px Georgia";
	context.fillText("Click here to play", canvas.width/2 - 190, canvas.height/2 - 70);
}


gameStates["instructions"] = function(){
	

	startButton.x = canvas.width/2;
	startButton.y = canvas.height/2 + 300;


	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			changeStates("mainGame");
		}

		startButton.color = "blue";
		

	}
	else
	{
		//Default Button Graphic
		startButton.color = "red";
	}

	gameBackground.drawRect();
	startButton.drawRect();

	context.font = "70px Georgia";
	context.fillStyle = "white";
	context.fillText("How to Play:", canvas.width/2 - 400, canvas.height/2 - 300);

	context.font = "40px Georgia";
	context.fillText("-In this game, your goal is for you to live", canvas.width/2 - 400, canvas.height/2 - 250);
	context.fillText("for as long as possible as you run.", canvas.width/2 - 400, canvas.height/2 - 200);

	context.fillText("-You must avoid all orange junk that will", canvas.width/2 - 400, canvas.height/2 - 140);
	context.fillText("appear in front of & above you.", canvas.width/2 - 400, canvas.height/2 - 90);

	context.fillText("-As you continue you will pass by green", canvas.width/2 - 400, canvas.height/2 - 30);
	context.fillText("platforms, jump on them to gain hight.", canvas.width/2 - 400, canvas.height/2 + 20);

	context.fillText("-The purple bounse pads will automatically", canvas.width/2 - 400, canvas.height/2 + 80);
	context.fillText(" bounce you up, be careful.", canvas.width/2 - 400, canvas.height/2 + 130);

	context.font = "50px Georgia";
	context.fillText("Click here to play", canvas.width/2 - 190, canvas.height/2 + 230);
}

gameStates["mainGame"] = function(){

	
	context.clearRect(0,0,canvas.width, canvas.height);	
	gameBackground.drawRect();
	//player.y = 700;

	if (!gameOver) {
		if (w && player.canJump && player.vy == 0) {
			player.canJump = false;
			player.vy += player.jumpHeight;
		}

		if (a) {
			player.vx += -player.ax * player.force;
		}
		if (d) {
			player.vx += player.ax * player.force;
		}
	}
	

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);


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
	while(platform0.hitTestPoint(player.bottomleft()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.bottomright()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	


	for(var i = 1; i < platform.length; i++){

		while(platform[i].hitTestPoint(player.bottom()) && player.vy >=0)
		{
			player.y--;
			player.vy = 0;
			player.canJump = true;
		}
		while(platform[i].hitTestPoint(player.bottomleft()) && player.vy >=0)
		{
			player.y--;
			player.vy = 0;
			player.canJump = true;
		}
		while(platform[i].hitTestPoint(player.bottomright()) && player.vy >=0)
		{
			player.y--;
			player.vy = 0;
			player.canJump = true;
		}

		if (platform[i].x < -500)
		{
			platform[i].x = 2500 + i*200;
			platform[i].y = platform0.y - 200 - (Math.random()*401);
			platform[i].width = 200 + Math.random()*201;
			platform[i].height = 50;
		}
		console.log(platform[i].x, platform[i].y);

		if (!gameOver) 
		{
			platform[i].move();
		}
		

		platform[i].drawRect();
	}

	for(var i = 0; i < junk.length; i++){

		if(junk[i].hitTestObject(player)){
		junk[i].vx = 0;
		hit++;
		}

		if (junk[i].x < -500)
		{
		junk[i].y = 700;
		junk[i].x = 2500 + i*200;
		junk[i].width = player.width/2 + Math.random()*50;
		junk[i].height = player.height + Math.random()*150;
		}

		if (!gameOver) 
		{
			junk[i].move();
		}
		junk[i].drawRect();

	}

	for(var i = 0; i < falljunk.length; i++){

		if(falljunk[i].hitTestObject(player)){
		falljunk[i].vy = 0;
		falljunk[i].vx = 0;
		hit++;
		}

		if (falljunk[i].y > 900 || falljunk[i].x < -50)
		{
		falljunk[i].x = Math.random()*canvas.width;
		falljunk[i].y = -100 - Math.random()*2000;
		falljunk[i].width = player.width/2 +Math.random()*52;
		falljunk[i].height = player.height + Math.random()*80;
		falljunk[i].vy = 1 + Math.random()*9;
		falljunk[i].vx = (Math.random()*3)*-1;
		}

		if (!gameOver) 
		{
			falljunk[i].move();
		}

		falljunk[i].drawRect();

	}

	for(var i = 0; i < bouncePad.length; i++){

		if (bouncePad[i].hitTestPoint(player.bottom()) && player.vy >=0)
		{
			player.y--;
			player.vy = -40;
		}
		if (bouncePad[i].hitTestPoint(player.bottomleft()) && player.vy >=0)
		{
			player.y--;
			player.vy = -40;
		}
		if (bouncePad[i].hitTestPoint(player.bottomright()) && player.vy >=0)
		{
			player.y--;
			player.vy = -40;
		}

		if (bouncePad[i].x < -500)
		{
		bouncePad[i].y = 700;
		bouncePad[i].x = 2500 +  i*1000;
		}

		if (!gameOver) 
		{
			bouncePad[i].move();
		}

		bouncePad[i].drawRect();

	}


	
	platform0.drawRect();
	player.drawRect();

	context.font = "16px Georgia";
	context.color = "white";
	context.fillText(`Timer:${SurvivalCount}`, 80, 25);

	if (hit > 0)
	{
		
		clearInterval (InGameTimer);

		gameOver = true;

		if(startButton.overlap(mouse))
		{
			if(mouse.pressed)
			{
				SurvivalCount = 0;
				hit = 0;

				gameOver = false;

				InGameTimer = setInterval(count, 1000);

				//context.clearRect(0,0,canvas.width, canvas.height);	
				//gameBackground.drawRect();

				for(var i = 1; i < 6; i++)
				{
						platform[i].width = 200 + Math.random()*201;
						platform[i].height = 50;
						platform[i].x = 2500 + i*200;
						platform[i].y = platform0.y - 200 - (Math.random()*401);
						platform[i].color = "#66ff33";
						platform[i].vx = -4;
				}

				lastx = 2500;
				for(var i = 0; i < 8; i++)
				{
						junk[i].width = player.width/2 +Math.random()*50;
						junk[i].height = player.height + Math.random()*150;
						junk[i].x = lastx + Math.random()*1000;
						junk[i].y = 700;
						junk[i].vx = -4;
						junk[i].color = "#faa70d";
						lastx = junk[i].x;
				}

				for(var i = 0; i < 8; i++)
				{
						falljunk[i].width = player.width/2 + Math.random()*50;
						falljunk[i].height = player.height + Math.random()*25;
						falljunk[i].x = Math.random()*canvas.width;
						falljunk[i].y = -100 - Math.random()*2000;
						falljunk[i].vy = 1 + Math.random()*9;
						falljunk[i].vx = (Math.random()*3)*-1;
						falljunk[i].color = "#faa70d";
				}

				for(var i = 0; i < 4; i++)
				{
						bouncePad[i].width = player.width;
						bouncePad[i].height = player.height/4;
						bouncePad[i].x = 2500 + i*1000;
						bouncePad[i].y = 700;	
						bouncePad[i].color = "purple";
						bouncePad[i].vx = -4;
				}

				for(var i = 1; i < platform.length; i++){

				if (!gameOver) 
				{
					platform[i].move();
				}
				

				platform[i].drawRect();
			}

			for(var i = 0; i < junk.length; i++){

				if (!gameOver) 
				{
					junk[i].move();
				}
				junk[i].drawRect();

			}

			for(var i = 0; i < falljunk.length; i++){

				if (!gameOver) 
				{
					falljunk[i].move();
				}

				falljunk[i].drawRect();

			}

			for(var i = 0; i < bouncePad.length; i++){

				if (!gameOver) 
				{
					bouncePad[i].move();
				}

				bouncePad[i].drawRect();

			}


			
			platform0.drawRect();
			player.drawRect();

			context.font = "16px Georgia";
			context.color = "white";
			context.fillText(`Timer:${SurvivalCount}`, 80, 25);
			}

			startButton.color = "blue";
			

		}
		else
		{
			//Default Button Graphic
			startButton.color = "red";
		}
		

		if(menuButton.overlap(mouse))
		{
			if(mouse.pressed)
			{
				//Changes to the game state
				mouse.pressed = false;
				
				changeStates("menu");
			}

			menuButton.color = "blue";
			

		}
		else
		{
			//Default Button Graphic
			menuButton.color = "red";
		}

		startButton.drawRect();
    	menuButton.drawRect();

		context.font = "100px Georgia";
		context.fillText("Game Over", canvas.width/2 - 250, canvas.height/2 - 300);
		context.font = "70px Georgia";
		context.fillText(`Time:${SurvivalCount}`, canvas.width/2 - 150, canvas.height/2 - 200);
		context.font = "50px Georgia";
		context.fillText("Click here for the menu", canvas.width/2 - 270, canvas.height/2 + 140);

		context.font = "50px Georgia";
		context.fillText("Click here to play again", canvas.width/2 - 240, canvas.height/2 - 70);
		// if(!gameOver){
			// gameOver = true;
		// }
		//gameOver = true;
	}
}

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);

    gameStates[currentState]();

	// console.log(currentState);

}
