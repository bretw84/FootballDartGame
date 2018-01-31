var game = new Game(3);

for(var i=1; i < game.numOfPlayers+1; i++) {
    console.log(i);
    game.players['player'+i] = new Player("player"+i);
}

game.players['player1'].q1 = 14;

console.log(game.players['player1'].score);