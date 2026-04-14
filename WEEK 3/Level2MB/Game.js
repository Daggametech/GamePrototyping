

// var canvas;
// var context;
// var timer;
var interval = 1000/60;

var player1 = new GameObject();
	// canvas = document.getElementById("canvas");
	// context = canvas.getContext("2d");	

	
    player1.vx = 0;
	player1.vy = 0;

    timer = setInterval(animate, interval);

function animate()
{
    	ctx.clearRect(0,0,canvas.width, canvas.height);	
	player1.move();
	
	if(w = true)
	{
		player1.vy = player1.vy + 1;
	}
    if(s = true)
	{
		player1.vy = player1.vy - 1;
	}
    if(a = true)
	{
		player1.vy = player1.vx + 1;
	}
    if(d = true)
	{
		player1.vy = player1.vx - 1;
	}
	
    player1.x += player1.vx;
	player1.y += player1.vy;
	
	player1.drawRectangle();
}
