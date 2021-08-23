class Form {

    constructor() {
      this.input = createInput("").attribute("placeholder","Enter your name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
  
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      
    }
  
    display(){
      this.title.html("Speed Mania ");
      this.title.position(width/2 - 50, 0);
      this.input.position(width/2 - 40 , height/2 - 80);
      this.button.position(width/2 + 30, height/2);
      this.reset.position(width-100, 20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(width/2 - 70, height/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        Player.updatePlayersAtEnd(0);
  
        database.ref('/').update({
          players : null
        });
      })
  
    }
  }
  