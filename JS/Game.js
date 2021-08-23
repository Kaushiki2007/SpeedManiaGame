class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        'gameState': state
      });
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
          
        } 
      
      
        runner1 = createSprite(50,height/2-25);
        runner1.addAnimation("runner1",runner1_img);
        runner1.scale = 0.9;
        runner2 = createSprite(50,height/2);
        runner2.addAnimation("runner2",runner2_img);
        runner2.scale = 0.9;
        runner3 = createSprite(50,height-200);
        runner3.addAnimation("runner3",runner3_img);
        runner3.scale = 0.9;
        runner4 = createSprite(50,height-100);
        runner4.addAnimation("runner4",runner4_img);
        runner4.scale = 0.2;
        runners = [runner1, runner2, runner3,runner4];
    
      }
    play(){
        form.hide();
        
        Player.getPlayerInfo();
        player.getPlayersAtEnd();
        
        if(allPlayers !== undefined){
          background(rgb(198,135,103));
          image(track, 0, 0 ,width*4, height);
          var index = 0;
          var x ;
          var y = 60;
    
          for(var plr in allPlayers){
            index = index + 1 ;
            y = y + 100;
            x = 225 + allPlayers[plr].distance;
            runners[index-1].x = x;
            runners[index-1].y = y;
    
            if (index === player.index){
              stroke(10);
              fill('red');
              ellipse(x,y,60,60);
              camera.position.y = height/2;
              camera.position.x = runners[index-1].x;
             // console.log(runners[index-1].x);
            }
          } }
    
        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
          player.distance +=15;
          player.update();
        }
    
         if(player.distance > 5250){
          gameState = 2;
          player.rank +=1
          Player.updatePlayersAtEnd(player.rank);
          alert("Your Rank : " + player.rank);
        }
       
        drawSprites();
      }
    
      end(){
        console.log("Game Ended");
      }
}
