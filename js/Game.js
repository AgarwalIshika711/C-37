class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    Player.getPlayersInfo();
    textSize(30);
    text("game started",200,200)
    if (allPlayers !== undefined){
      var dp = 130;
      for (var plr in allPlayers){
        if(plr=== "player" + player.index)
          fill("red");
        else
          fill("black");
      
        dp+=20;
        textSize(20);
        text(allPlayers[plr].name + " : " + allPlayers[plr].distance,200,dp);
      }

    }


  }
}
