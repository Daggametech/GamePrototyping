


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
instructButton.y = canvas.height/2 - 400;
// console.log(instructButton.collisionPoints.right);


var menuBackground = new GameObject();
menuBackground.color = "black";
menuBackground.width=canvas.width;
menuBackground.height=canvas.height;

gameStates = [];

gameStates[`menu`] = function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates = ['mainGame'];
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
			gameStates.changeState(`level1`)
		}

		instructButton.color = "blue";
		

	}
	else
	{
		//Default Button Graphic
		instructButton.color = "red";
	}



	menuBackground.drawRect();
	startButton.drawRect();
    instructButton.drawRect();
}