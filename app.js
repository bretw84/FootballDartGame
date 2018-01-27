$(document).ready(function(){

    /**
     * Click event for the New Game button
     * shows the number of players input
     * @return void
     */
    $('#newGame').click(function() {
        $(this).addClass('hide');
        $('#numPlayersBox').removeClass('hide');
    });

    /**
     * Click event for the number of players input
     */
    $('#numPlayers').click(function() {

    });

});//end document ready