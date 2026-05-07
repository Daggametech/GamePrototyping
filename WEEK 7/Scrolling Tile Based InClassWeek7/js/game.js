
var canvas = document.getElementById("canvas");
	
var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);
var soundFX1 = document.getElementById("sound");
var soundFX2 = document.getElementById("splode");
var bgmAudio = document.getElementById("bgm");

document.addEventListener("click",function(){
	bgmAudio.currentTime = 0;
	bgmAudio.play();
	
});

document.removeEventListener("click", function(){
	bgmAudio.currentTime = 0;
	bgmAudio.play();
});

window.onload = function(){
	bgmAudio.currentTime = 0;
	bgmAudio.play().catch(error => {console.log("Why wont you work")});

}


var player = new GameObject({width:50, height:50, angle:0, x:canvas.width/2, y:canvas.height-100, force:1, color:"gray"});
var pickUpItem = new GameObject({width:20, height:20, angle:0, x:canvas.width/2, y:canvas.height-100, force:0, color:"yellow"});
var pickUpItem2 = new GameObject({width:20, height:20, angle:0, x:canvas.width/2, y:canvas.height-100, force:0, color:"green"});




//This is used to move the level elements
var level = new Level();
//This generates a tile based level.
	level.generate(level.l1);		

var fx = .85;
var fy = .85;

var states =[];
var currentState = "menu";

states["menu"] = function(){
	context.fillStyle = "black";
	context.font = "24px Arial";
	var title = "My Game";
	context.fillText(title, canvas.width/2 - context.measureText(title).width/2, canvas.height/2);

	if(enter){
		currentState = "play";
	}
}

//When moving the level, we first move the player as usual. Then we utilize an offset object to keep track of how much the collision detection affects the player's position. Then we move both the player and the level back the total number of pixels that the player moved over one loop of animation.

states["play"] = function()
{
	if(w)
	{
		player.vy += player.ay * -player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}
	
	player.vx *= fx;
	player.vy *= fy;
	
	player.x += player.vx;
	player.y += player.vy;
	
	//Used to move the player and level back so that it appears as though the level moved and not the player.
	var offset = {x:player.vx, y:player.vy};
	
	//All tile code
	for(var i = 0; i < level.grid.length; i++)
	{
		level.grid[i].drawRect();
		//Hit top
		while(level.grid[i].hitTestPoint(player.top()) && player.vy <= 0)
		{
			player.vy = 0;
			player.y++;
			offset.y++;
		}
		//Hit right
		while(level.grid[i].hitTestPoint(player.right()) && player.vx >= 0)
		{
			player.vx = 0;
			player.x--;
			offset.x--;
		}
		//Hit left
		while(level.grid[i].hitTestPoint(player.left()) && player.vx <= 0)
		{
			player.vx = 0;
			player.x++;
			offset.x++;
		}
		//Hit bottom
		while(level.grid[i].hitTestPoint(player.bottom()) && player.vy >= 0)
		{
			player.canJump = true;
			player.vy = 0;
			player.y--;
			offset.y--;
		}
		
	}

	if(player.hitTestObject(pickUpItem)){
		pickUpItem.x = -50000;
		soundFX1.currentTime = 0;
		soundFX1.play();
	}

	if(player.hitTestObject(pickUpItem2)){
		pickUpItem2.x = -50000;
		soundFX2.currentTime = 0;
		soundFX2.play();
	}
	
	//Moves the level and the player back the total number of pixels traveled over one animation loop.
	// player.x += player.vx;
	// player.y += player.vy;
	// player.x -= offset.x;
	// player.y -= offset.y;
	// level.x -= offset.x;
	// level.y -= offset.y;
	
	//Draws the player
	player.drawRect();
	pickUpItem.drawRect();
	pickUpItem2.drawRect();
	player.drawDebug();
}

//--------------------------------------------Animation Loop-------------------------------------------
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	states[currentState]();
}



