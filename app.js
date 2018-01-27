$(document).ready(function(){

    /**
     * Click event for the New Game button
     * shows the number of players input
     * @return void
     */
    $('#newGame').click(function() {

        writeToLog('New Game Started... Awaiting Number of Players');

        $('#newGameBox').addClass('hide');
        $('#numPlayersBox').removeClass('hide');
        $('#numPlayers').focus();

        /**
         * Click event for the number of players input
         * show the player details form
         */
        $('#numPlayersButton').click(function() {
    
            var numPlayers = $('#numPlayers').val();

            if(numPlayers == '' || numPlayers == 0 || isNaN(numPlayers)) {

                writeToLog('ERROR: Did not enter any players or entered 0!');

                alert('You must have at least 1 player to continue');
                $('#numPlayers').focus().css('border-color', 'red');
                return;

            } else if(numPlayers > 8){

                writeToLog('ERROR: 8 or more players were entered!');

                alert('There can only be a max of 8 players.');
                $('#numPlayers').focus().css('border-color', 'red');
                return;

            } else {

                writeToLog('Number of Players: '+numPlayers);

                $('#numPlayersBox').addClass('hide');
                $('#playerDetailsBox').removeClass('hide');

                for(var i=1;i<=numPlayers;i++) {
                    $('#player'+i+'Box').removeClass('hide');
                }

                $('#player1').focus();

            }

            /**
             * Click event for player details form
             * show main game screen and player 1 turn
             */
            $('#startGame').click(function() {
                
                writeToLog('Game succesfully started!!!');

                $('#mainGameBox').removeClass('hide');
                $('#playerDetailsBox').addClass('hide');

                var player1 = $('#player1').val();
                $('#scoreBoard').append('<tr><td>'+player1+'</td><td id="p1q1">--</td><td id="p1q2">--</td><td id="p1q3">--</td><td id="p1q4">--</td><td id="p1Score">0</td></tr>');

                console.log(numPlayers);

                switch(numPlayers) {

                    case '2':
                    var player2 = $('#player2').val();
                    $('#scoreBoard').append('<tr><td>'+player2+'</td><td id="p2q1">--</td><td id="p2q2">--</td><td id="p2q3">--</td><td id="p2q4">--</td><td id="p2Score">0</td></tr>');
                    break;

                    case '3':
                    var player2 = $('#player2').val();
                    $('#scoreBoard').append('<tr><td>'+player2+'</td><td id="p2q1">--</td><td id="p2q2">--</td><td id="p2q3">--</td><td id="p2q4">--</td><td id="p2Score">0</td></tr>');
                    var player3 = $('#player3').val();
                    $('#scoreBoard').append('<tr><td>'+player3+'</td><td id="p3q1">--</td><td id="p3q2">--</td><td id="p3q3">--</td><td id="p3q4">--</td><td id="p3Score">0</td></tr>');
                    break;

                    case '4':
                    var player2 = $('#player2').val();
                    $('#scoreBoard').append('<tr><td>'+player2+'</td><td id="p2q1">--</td><td id="p2q2">--</td><td id="p2q3">--</td><td id="p2q4">--</td><td id="p2Score">0</td></tr>');
                    var player3 = $('#player3').val();
                    $('#scoreBoard').append('<tr><td>'+player3+'</td><td id="p3q1">--</td><td id="p3q2">--</td><td id="p3q3">--</td><td id="p3q4">--</td><td id="p3Score">0</td></tr>');
                    var player4 = $('#player4').val();
                    $('#scoreBoard').append('<tr><td>'+player4+'</td><td id="p4q1">--</td><td id="p4q2">--</td><td id="p4q3">--</td><td id="p4q4">--</td><td id="p4Score">0</td></tr>');
                    break;

                    case '5':
                    var player2 = $('#player2').val();
                    $('#scoreBoard').append('<tr><td>'+player2+'</td><td id="p2q1">--</td><td id="p2q2">--</td><td id="p2q3">--</td><td id="p2q4">--</td><td id="p2Score">0</td></tr>');
                    var player3 = $('#player3').val();
                    $('#scoreBoard').append('<tr><td>'+player3+'</td><td id="p3q1">--</td><td id="p3q2">--</td><td id="p3q3">--</td><td id="p3q4">--</td><td id="p3Score">0</td></tr>');
                    var player4 = $('#player4').val();
                    $('#scoreBoard').append('<tr><td>'+player4+'</td><td id="p4q1">--</td><td id="p4q2">--</td><td id="p4q3">--</td><td id="p4q4">--</td><td id="p4Score">0</td></tr>');
                    var player5 = $('#player5').val();
                    $('#scoreBoard').append('<tr><td>'+player5+'</td><td id="p5q1">--</td><td id="p5q2">--</td><td id="p5q3">--</td><td id="p5q4">--</td><td id="p5Score">0</td></tr>');
                    break;

                    case '6':
                    var player2 = $('#player2').val();
                    $('#scoreBoard').append('<tr><td>'+player2+'</td><td id="p2q1">--</td><td id="p2q2">--</td><td id="p2q3">--</td><td id="p2q4">--</td><td id="p2Score">0</td></tr>');
                    var player3 = $('#player3').val();
                    $('#scoreBoard').append('<tr><td>'+player3+'</td><td id="p3q1">--</td><td id="p3q2">--</td><td id="p3q3">--</td><td id="p3q4">--</td><td id="p3Score">0</td></tr>');
                    var player4 = $('#player4').val();
                    $('#scoreBoard').append('<tr><td>'+player4+'</td><td id="p4q1">--</td><td id="p4q2">--</td><td id="p4q3">--</td><td id="p4q4">--</td><td id="p4Score">0</td></tr>');
                    var player5 = $('#player5').val();
                    $('#scoreBoard').append('<tr><td>'+player5+'</td><td id="p5q1">--</td><td id="p5q2">--</td><td id="p5q3">--</td><td id="p5q4">--</td><td id="p5Score">0</td></tr>');
                    var player6 = $('#player6').val();
                    $('#scoreBoard').append('<tr><td>'+player6+'</td><td id="p6q1">--</td><td id="p6q2">--</td><td id="p6q3">--</td><td id="p6q4">--</td><td id="p6Score">0</td></tr>');
                    break;

                    case '7':
                    var player2 = $('#player2').val();
                    $('#scoreBoard').append('<tr><td>'+player2+'</td><td id="p2q1">--</td><td id="p2q2">--</td><td id="p2q3">--</td><td id="p2q4">--</td><td id="p2Score">0</td></tr>');
                    var player3 = $('#player3').val();
                    $('#scoreBoard').append('<tr><td>'+player3+'</td><td id="p3q1">--</td><td id="p3q2">--</td><td id="p3q3">--</td><td id="p3q4">--</td><td id="p3Score">0</td></tr>');
                    var player4 = $('#player4').val();
                    $('#scoreBoard').append('<tr><td>'+player4+'</td><td id="p4q1">--</td><td id="p4q2">--</td><td id="p4q3">--</td><td id="p4q4">--</td><td id="p4Score">0</td></tr>');
                    var player5 = $('#player5').val();
                    $('#scoreBoard').append('<tr><td>'+player5+'</td><td id="p5q1">--</td><td id="p5q2">--</td><td id="p5q3">--</td><td id="p5q4">--</td><td id="p5Score">0</td></tr>');
                    var player6 = $('#player6').val();
                    $('#scoreBoard').append('<tr><td>'+player6+'</td><td id="p6q1">--</td><td id="p6q2">--</td><td id="p6q3">--</td><td id="p6q4">--</td><td id="p6Score">0</td></tr>');
                    var player7 = $('#player7').val();
                    $('#scoreBoard').append('<tr><td>'+player7+'</td><td id="p7q1">--</td><td id="p7q2">--</td><td id="p7q3">--</td><td id="p7q4">--</td><td id="p7Score">0</td></tr>');
                    break;
                    
                    case '8':
                    var player2 = $('#player2').val();
                    $('#scoreBoard').append('<tr><td>'+player2+'</td><td id="p2q1">--</td><td id="p2q2">--</td><td id="p2q3">--</td><td id="p2q4">--</td><td id="p2Score">0</td></tr>');
                    var player3 = $('#player3').val();
                    $('#scoreBoard').append('<tr><td>'+player3+'</td><td id="p3q1">--</td><td id="p3q2">--</td><td id="p3q3">--</td><td id="p3q4">--</td><td id="p3Score">0</td></tr>');
                    var player4 = $('#player4').val();
                    $('#scoreBoard').append('<tr><td>'+player4+'</td><td id="p4q1">--</td><td id="p4q2">--</td><td id="p4q3">--</td><td id="p4q4">--</td><td id="p4Score">0</td></tr>');
                    var player5 = $('#player5').val();
                    $('#scoreBoard').append('<tr><td>'+player5+'</td><td id="p5q1">--</td><td id="p5q2">--</td><td id="p5q3">--</td><td id="p5q4">--</td><td id="p5Score">0</td></tr>');
                    var player6 = $('#player6').val();
                    $('#scoreBoard').append('<tr><td>'+player6+'</td><td id="p6q1">--</td><td id="p6q2">--</td><td id="p6q3">--</td><td id="p6q4">--</td><td id="p6Score">0</td></tr>');
                    var player7 = $('#player7').val();
                    $('#scoreBoard').append('<tr><td>'+player7+'</td><td id="p7q1">--</td><td id="p7q2">--</td><td id="p7q3">--</td><td id="p7q4">--</td><td id="p7Score">0</td></tr>');
                    var player8 = $('#player8').val();
                    $('#scoreBoard').append('<tr><td>'+player8+'</td><td id="p8q1">--</td><td id="p8q2">--</td><td id="p8q3">--</td><td id="p8q4">--</td><td id="p8Score">0</td></tr>');
                    break;
                    default:
                    var player1 = $('#player1').val();
                    $('#scoreBoard').append('<tr><td>'+player1+'</td><td id="p1q1">--</td><td id="p1q2">--</td><td id="p1q3">--</td><td id="p1q4">--</td><td id="p1Score">0</td></tr>');
                    break;
                }

                var currentPlayer = player1;
                $('#currentPlayer').html(currentPlayer);
                
            });//END startGame.click
            
        });//END newGame.click

    });// END NEW GAME


    var writeToLog = function(status) {

        var show = true;

        if(show == true) {
            $('#statusLogButton').removeClass('hide');
            console.log(status);
            $('#statusLog').append('<p><strong>'+status+'</strong></p>');
        }
      
        return true;
    }

    $('#statusLogButton').click(function() {
        $('#statusLog').toggleClass('hide');
    });

    $('#closeStatusLog').click(function() {
        $('#statusLog').addClass('hide');
    });
    

});//end document ready