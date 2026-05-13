var canvas;
var context;
var gravity = 1;
var timer;
var timer2;
var interval = 1000/60;
var prevY;
var Score = 0;

timer = setInterval(animate, interval);


	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");	

var player1 = new GameObject();

	player1.y = canvas.height - 25;
	player1.width = 50;
	player1.height = 50;
	player1.x = canvas.width/2;
    player1.vx = 0;
	player1.vy = 0;
	player1.color = "#ffff00";
	// player1.vx *=.90;

var items = [5];

for(var i = 0; i < 5; i++)
{
    items[i] = new GameObject();

    items[i].y = -canvas.height - (Math.random()*100);
    items[i].x = Math.random()*canvas.width;
    items[i].width = 25;
    items[i].height = 25;
    items[i].color = "green";
    items[i].vx = 0;
    items[i].vy = ((Math.random()*5)+2);

}

var hazards = [5];

for(var i = 0; i < 5; i++)
{
    hazards[i] = new GameObject();

    hazards[i].y = -canvas.height - (Math.random()*100);
    hazards[i].x = Math.random()*canvas.width;
    hazards[i].width = 25;
    hazards[i].height = 25;
    hazards[i].color = "red";
    hazards[i].vx = 0;
    hazards[i].vy = ((Math.random()*5)+2);
}


function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);	
	
for(var i = 0; i < 5; i++)
{
    items[i].move();
}

for(var i = 0; i < 5; i++)
{
    hazards[i].move();
}

for(var i = 0; i < 5; i++)
{
   if(items[i].y > 900)
    {
        items[i].y = -canvas.height;
        items[i].x = Math.random()*canvas.width;
        items[i].vy = ((Math.random()*5)+2);
    } 
}

for(var i = 0; i < 5; i++)
{
    if(hazards[i].y > 900)
    {
        hazards[i].y = -canvas.height;
        hazards[i].x = Math.random()*canvas.width;
        hazards[i].vy = ((Math.random()*5)+2);
    }
}

if(a)
{
	player1.vx = -5;
    // += -player1.ax * player1.force;
}
if(d)
{
	player1.vx = 5;
    // += player1.ax * player1.force;
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

for(var i = 0; i < 5; i++)
{
    if (player1.hitTestObject(items[i]))
    {
        items[i].y = -canvas.height;
        items[i].x = Math.random()*canvas.width;
        items[i].vy = ((Math.random()*5)+2);

        player1.color = "green";

        timer = setTimeout(returncolor, 500);
        
        Score++;
    }
}

for(var r = 0; r < 5; r++)
{
    if (player1.hitTestObject(hazards[r]))
    {
        player1.color = "red";

        timer2 = setTimeout(returncolor, 500);
        
        for(var i = 0; i < 5; i++)
        {
            items[i] = new GameObject();

            items[i].y = -canvas.height - (Math.random()*100);
            items[i].x = Math.random()*canvas.width;
            items[i].width = 25;
            items[i].height = 25;
            items[i].color = "green";
            items[i].vx = 0;
            items[i].vy = ((Math.random()*5)+2);

        }

        for(var i = 0; i < 5; i++)
        {
            hazards[i] = new GameObject();

            hazards[i].y = -canvas.height - (Math.random()*100);
            hazards[i].x = Math.random()*canvas.width;
            hazards[i].width = 25;
            hazards[i].height = 25;
            hazards[i].color = "red";
            hazards[i].vx = 0;
            hazards[i].vy = ((Math.random()*5)+2);
        }

        Score = 0;
    }
}



player1.drawRectangle();
player1.move();
for(var i = 0; i < 5; i++)
{
    items[i].drawRectangle();
}
for(var i = 0; i < 5; i++)
{
    hazards[i].drawCircle();
}

	context.font = "30px Arial";
    context.weight = "bold"
    context.strokeStyle = "black";
    context.color = "black";
    canvas.strokeStyle = "black";
    context.save()
	context.fillText(`Score:${Score}`, 80, 25);


}

function returncolor()
{
    player1.color = "#ffff00";
}