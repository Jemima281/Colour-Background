
function setup() {
  createCanvas(400,400);
  background("red");
  box = createSprite(200,200,30,30);

}

function draw() 
{


  
  

  if (keyDown("b")) 
  {
    background("blue");
    
  }
 
    if (keyDown("g")) 
  {
    background("green");
   
  }

  if (keyDown("r")) 
  {
    background("red");
  }


  
  drawSprites();
}

