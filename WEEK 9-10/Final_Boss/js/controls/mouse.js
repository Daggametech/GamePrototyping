

var mouse={x:0,y:0, world:{x:0,y:0},pressed:false}

//Tracks the mouse's position
canvas.addEventListener(`mousemove`, (e)=>{
   var rect = canvas.getBoundingClientRect()
   mouse.x= e.clientX - rect.left
   mouse.y= e.clientY - rect.top
   //console.log(mouse.x)
  
})

//Activates and deactivates the mouse pressed property
canvas.addEventListener(`mousedown`, (e)=>{mouse.pressed=true;});
canvas.addEventListener(`mouseup`, (e)=>{mouse.pressed=false;});