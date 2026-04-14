


function GameObject(x,y,w,h,color)
{

if(x == undefined)
		this.x = 50;
	else 
		this.x = x;
	if(y == undefined)
		this.y = 50;
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
	this.vx = 0;
	this.vy = 0;

	this.draw = function()
	{
		ctx.save();
			ctx.fillStyle = this.color;
			ctx.translate(this.x, this.y);
			ctx.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
			
		ctx.restore();
		
	}	

	this.drawRectangle = function()
	{
		ctx.save();
			ctx.fillStyle = this.color;
			ctx.translate(this.x, this.y);
			ctx.beginPath();
		ctx.arc(-this.width/2, -this.height/2, this.width/2, this.height/2);
		ctx.stroke();
		ctx.restore();
		
	}	

this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}

