
// const canvas = document.getElementById("myCanvas");
// const context = canvas.getContext("2d");

// context.beginPath();
// context.arc(100, 75, 50, 0, 2 * Math.PI);
// context.stroke();

function GameObject(x,y,w,h,color)
{

if(x == undefined)
	this.x = canvas.width/2;
	else 
		this.x = x;
	if(y == undefined)
		this.y = canvas.height/2;
	else 
		this.y = y;
	
	if(w == undefined)
		this.width = 100;
	else 
		this.width = w;
	if(h == undefined)
		this.height = 100;
	else 
		this.height = h;
	
		//player's color
	if(color == undefined)
		this.color = "#ff0000";
	else 
		this.color = color;

	//player's velocity or speed on each axis
	this.vx = 2;
	this.vy = 1;

	this.drawCircle = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
			
		context.restore();
		
	}	

	this.drawCircle = function()
	{
		//context.save();
		context.fillStyle = this.color;
		//context.translate(this.x, this.y);
		context.beginPath();
		context.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
		context.fill();
		//context.restore();
		
	}	

this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}

