$(document).ready(function() {
    
    /**
     * Main game variable ends up being an object. not sure how that works
     */
    var game;

    /**
     * 
     * current players turn variable
     * gets incremented on turnButton click
     * when turn = number of players sets back to 1
     * and quarter increments
     * 
     */
    var turn = 1;

    /**
     * 
     * current quarter variable.
     * gets incremented when turns = number of players
     * button appears that restarts game after variable = 4 (4 quarters)
     *  
     */
    var quarter = 1;

    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();

    /**
     * 
     * newGame button click event
     * hides newGmae button
     * shows numPlayersBox
     * 
     */
    $('#newGame').click(function() {

        console.log('New game was started at '+hours+':'+minutes);

        $(this).addClass('hide');
        $('#numPlayersBox').removeClass('hide');

        $('#numPlayers').focus();

    });//END #newGame click function

    /**
     * 
     * #numPlayersButton click event
     * validates input
     * successful input calls new Game object
     * which gets passed value from numPlayers 
     * and becomes game.numPlayers
     * 
     * loops through game.numPlayers and creates html input boxes to enter each players name
     * 
     * @html #player*Box 
     * 
     * 
     */
    $('#numPlayersButton').click(function() {
    
        //assign input to numPlayers
        var numPlayers = $('#numPlayers').val();

        console.log('Number of players entered: '+numPlayers);

        //check if numPlayers is empty, 0 or not a number
        if(numPlayers == '' || numPlayers == 0 || isNaN(numPlayers)) {

            console.log('ERROR: Number of players entered was empty, zero, or not a number')

            alert('You must have at least 1 player to continue');
            $('#numPlayers').focus().css('border-color', 'red');
            return;

        //check if numPlayer more than 8
        } else if(numPlayers > 8) {

            console.log("ERROR: Number of players entered was greater than 8");

            alert('There can only be a max of 8 players.');
            $('#numPlayers').focus().css('border-color', 'red');
            return;

        //succesful numPlayers create new Game object and assign game.numPlayers
        } else {

            $('#numPlayersBox').addClass('hide');
            $('#playerDetails').removeClass('hide');

            //create game object and assign numPlayers
            game = new Game(numPlayers);
            
            // loop through game.numPlayers and create html input boxes to enter each players name
			for(var i=1; i<parseInt(game.numPlayers)+1; i++) {
				$('#playersRow').append('<div id="player'+i+'Box" class="col-md-3"><label>Player '+i+' Name</label><div><input type="text" id="player'+i+'" class="form-control" placeholder="Enter Player '+i+' Name" /></div></div>');
            }
            
            //console.log('Pending game with '+game.numPlayers+' players is ready for names.');

            $('#player1').focus();

        }//END validation

    });//END numPlayersButton click funcion

    /**
     * 
     * startGame click event 
     * 
     * 
     */
	$('#startGame').click(function() {

		$('#playerDetails').addClass('hide');
        $('#boxScore,#mainGame').removeClass('hide');

		for(var i=1; i<parseInt(game.numPlayers)+1; i++) {

			game.player['player'+i] = new Player(i,"player"+i);
            game.player['player'+i].name = $('#player'+i).val();

            console.log("Player "+i+" is "+game.player['player'+i].name);

			$('#scoreBoard tbody').append('<tr id="player'+i+'Row"><td>'+game.player['player'+i].name+'</td><td id="player'+i+'q1">'+game.player['player'+i].q1+'</td><td id="player'+i+'q2">'+game.player['player'+i].q2+'</td><td id="player'+i+'q3">'+game.player['player'+i].q3+'</td><td id="player'+i+'q4">'+game.player['player'+i].q4+'</td><td id="player'+i+'score">'+game.player['player'+i].score+'</td></tr>');
        }

        $('#playerCardHeading').html("Enter " + game.player['player'+turn].name + "'s Quarter "+quarter+" Score.");
        $('#scoreInput').html('<input type="text" id="player'+turn+'ScoreQ'+quarter+'" class="scoreInput"/>');

        console.log("Everything is all set. Ready to play!!!");

        console.log('Current Quarter: ' + quarter);
        console.log('Current Turn: '+game.player['player'+turn].name);

        $('#turnLabel').html("Current Turn: <strong style='color:green;'>"+ game.player['player'+turn].name+"</strong>");
        $('#quarterLabel').html('Quarter: ' + quarter);
        $('.scoreInput').focus();
        

        /**
         * 
         * turnButton click event
         * 
         * 
         * 
         */
        $('#turnButton').click(function() {

            game.player['player'+turn].addPoints(quarter,parseInt($('#player'+turn+'ScoreQ'+quarter).val()));

            console.log(game.player['player'+turn].name+' scored '+$('#player'+turn+'ScoreQ'+quarter).val()+' points in quarter '+quarter+'.');
            console.log(game.player['player'+turn].name+"'s Current total score is "+game.player['player'+turn].score);

            switch(quarter) {
                case 1:
                $('#player'+turn+'q'+quarter).html(game.player['player'+turn].q1);
                $('#player'+turn+'score').html(game.player['player'+turn].score);
                break;

                case 2:
                $('#player'+turn+'q'+quarter).html(game.player['player'+turn].q2);
                $('#player'+turn+'score').html(game.player['player'+turn].score);
                break;

                case 3:
                $('#player'+turn+'q'+quarter).html(game.player['player'+turn].q3);
                $('#player'+turn+'score').html(game.player['player'+turn].score);
                break;

                case 4:
                $('#player'+turn+'q'+quarter).html(game.player['player'+turn].q4);
                $('#player'+turn+'score').html(game.player['player'+turn].score);
                break;
            }

            turn++;

            if(turn-1 == game.numPlayers) {
                
				turn = 1;
                quarter++;
                
                console.log('Current Quarter: ' + quarter);
                console.log('Current Turn: '+game.player['player'+turn].name);
			}

            $('#turnLabel').html("Current Turn: <strong style='color:green;'>"+ game.player['player'+turn].name+"</strong>");
            $('#quarterLabel').html('Quarter: ' + quarter);

            $('#playerCardHeading').html("Enter " + game.player['player'+turn].name + "'s Quarter "+quarter+" Score.");
            $('#scoreInput').html('<input type="text" id="player'+turn+'ScoreQ'+quarter+'" class="scoreInput"/>');
            $('.scoreInput').focus();
			
			if(parseInt(quarter) == 5) {
                console.log('Game Over');
                console.log(getWinner());
                $('#quarterLabel').html('Final Score');
                $('#mainGame').html('<h1>Game Over.<br><strong style="color:green;text-transform:uppercase;">'+game.winner+'</strong> is the winner!!!</h1>');
                $('#resetGame').removeClass('hide');
                
            } else {
            
                console.log('Current Quarter: ' + quarter);
                console.log('Current Turn: '+game.player['player'+turn].name);

            }


            /**
             * 
             * #resetButton click event
             * reloads window and starts game over
             * 
             */
            $('#resetGame').click(function(){
                window.location.reload();
            });//END resetButton click function


            

        });//END turnButton click function

    });//END startGame click function


    function getWinner() {
        var scores = [];
        var hightestScore = 0;
        var winner = '';

        for(var i=1; i < parseInt(game.numPlayers)+1; i++) {
            //Since this came from the input, its a string, but Math needs numbers
            scores.push(parseInt(game.player['player'+i].score));
        }
        /*  This is a complicated answer. It took me like 10 minutes to figure out what
            The heck the problem was too. This is one of those bleeding edge javascript
            stuff. More or less you cant pass an array to it, you have to pass individual
            parameters. Below is whats called the "Spread" operator. It takes an array and
            converts them into entries.
            Math.max([1,2,3]) becomes Math.Max(1,2,3). Its a really odd javascript thing.

        */
        highestScore = Math.max(...scores);

        console.log('The highest score was ' + highestScore);

        for(var i=1; i<parseInt(game.numPlayers)+1; i++) {
            if(game.player['player'+i].score == highestScore) {
                game.winner = game.player['player'+i].name;
            }
        }

        console.log('The winner of the game is... ' + game.winner + '!!!');
        
    }//end getWinner function
    

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
