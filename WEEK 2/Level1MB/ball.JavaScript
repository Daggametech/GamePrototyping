var ball = new ball();

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

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
}