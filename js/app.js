$(document).ready(function() {
	
    var game = 0;
    var quarter = 1;
    var turn = 1;

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
            game = new Game(numPlayers);
			
			for(var i=1; i<parseInt(game.numPlayers)+1; i++) {
				$('#playersRow').append('<div id="player'+i+'Box" class="col-md-3"><label>Player '+i+' Name</label><div><input type="text" id="player'+i+'" class="form-control" placeholder="Enter Player '+i+' Name" /></div></div>');
			}

        }//END validation

    });//END numPlayersButton click funcion

	$('#startGame').click(function() {

		$('#playerDetails').addClass('hide');
		$('#boxScore,#mainGame').removeClass('hide');

		for(var i=1; i<parseInt(game.numPlayers)+1; i++) {
			game.player['player'+i] = new Player(i,"player"+i);
			game.player['player'+i].name = $('#player'+i).val();
			$('#scoreBoard tbody').append('<tr id="player'+i+'Row"><td>'+game.player['player'+i].name+'</td><td id="player'+i+'q1">--</td><td id="player'+i+'q2">--</td><td id="player'+i+'q3">--</td><td id="player'+i+'q4">--</td><td id="player'+i+'score">0</td></tr>');
        }
        
        $('#turnButton').click(function() {
            turn++;
			if(turn == game.numPlayers) {
				turn = 1;
				quarter++;
			}
			if(quarter == 4) {
				turn=1;
				quarter=1;
			}
            console.log('Turn: '+turn);
            console.log('quarter: '+quarter);
        });

	});//END startGame click function

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
