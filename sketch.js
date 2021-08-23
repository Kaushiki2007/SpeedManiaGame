var canvas;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var runner1, runner2, runner3, runner4, runners;
// var runA1, runA2, runA3, runA4;
// var runB1, runB2, runB3, runB4;
// var runC1, runC2, runC3, runC4;
// var runD1, runD2, runD3, runD4;
var track, runner1_img, runner2_img, runner3_img, runner4_img;
var form, game, player;

function preload(){
 track = loadImage("Images/track.jpg");
// runA1 = loadImage("Images/A1.png");
// runA2 = loadImage("Images/A2.png");
 runner1_img = loadAnimation("Images/A1.png","Images/A2.png","Images/A3.png","Images/A4.png");
 runner2_img = loadAnimation("Images/B1.png", "Images/B2.png", "Images/B3.png", "Images/B4.png");
 runner3_img = loadAnimation("Images/C1.png", "Images/C2.png", "Images/C3.png", "Images/C4.png");
 runner4_img = loadAnimation("Images/D1.png","Images/D2.png","Images/D3.png","Images/D4.png");

}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

function draw() {
  background(255);
  //console.log(gameState);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
 
}

