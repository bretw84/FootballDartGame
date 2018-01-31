var game = new Game(3);

for(var i=1; i < game.numOfPlayers+1; i++) {
    game.players['player'+i] = new Player("player"+i);
}

game.players['player1'].addPoints(1,7);
game.players['player1'].addPoints(2,10);

console.log(game.players['player1'].q2);