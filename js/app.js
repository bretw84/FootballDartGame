$(document).ready(function() {

    $('#newGame').click(function() {
        $(this).addClass('hide');
        $('#numPlayersBox').removeClass('hide');
    });//END #newGame click function

    $('#numPlayersButton').click(function() {
    
        var numPlayers = $('#numPlayers').val();

        if(numPlayers == '' || numPlayers == 0 || isNaN(numPlayers)) {

            alert('You must have at least 1 player to continue');
            $('#numPlayers').focus().css('border-color', 'red');
            return;

        } else if(numPlayers > 8) {

            alert('There can only be a max of 8 players.');
            $('#numPlayers').focus().css('border-color', 'red');
            return;

        } else {

            $('#numPlayersBox').addClass('hide');
            $('#playerDetails').removeClass('hide');
            var game = new Game(numPlayers);
            //console.log(game.numPlayers);



        }

    });//END numPlayersButton click funcion



});//END document.ready

/**
 * 
 * Object stuff for reference
 * 
 * 
var game = new Game(3);

for(var i=1; i < game.numPlayers+1; i++) {
    game.player['player'+i] = new Player("player"+i);
}

game.player['player1'].addPoints(1,7);
game.player['player1'].addPoints(2,10);
game.player['player1'].addPoints(3,14);

console.log(game.player['player1'].score);
 * 
 * 
 */