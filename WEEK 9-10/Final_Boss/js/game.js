


var canvas = document.getElementById(`canvas`);
var context = canvas.getContext(`2d`);

var interval = 1000/60;
var timer = setInterval(animate, interval);


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


var gameBackground = new GameObject();
gameBackground.color = "black";
gameBackground.width=canvas.width;
gameBackground.height=canvas.height;

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



function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);

    gameStates[currentState]();

	// console.log(currentState);

}
