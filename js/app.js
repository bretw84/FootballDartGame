var game = new Game(3);

for(var i=1; i < game.numOfPlayers+1; i++) {
    game.players['player'+i] = new Player("player"+i);
}

game.players['player1'].addPoints(1,7);
game.players['player1'].addPoints(2,10);
game.players['player1'].addPoints(3,14);

console.log(game.players['player1'].score);