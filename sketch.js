var hypnoticBall, database;
var position,form,player,game;


function setup(){
  database = firebase.database();
  console.log(database);
  game=new Game();
  game.getState();
  game.start();
  
  


  
}

function draw(){
 
    drawSprites();
  
}

