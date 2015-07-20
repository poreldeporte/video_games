// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$('.ctrl-tournaments.actn-index').ready(tournamentsIndex)

$('[data-hook~=tourney-add]').on('click', showTournamentForm)
$('[data-hook~=tourney-form]').on('submit', createTournament)
$('.ctrl-tournaments.actn-index').on('click', '[data-hook~=tourney-delete]', deleteTournament )

function deleteTournament(event){

	console.log(event)
	tournamentId = event.target.attributes.value.value
	console.log(tournamentId)
	// event.preventDefault;
	var request = $.ajax({
      url: '/api/tournaments',
      type: 'DELETE',
      data: {id: tournamentId},
    });	

    request.done(removeTournament(event));
}

function removeTournament(event){
	event.target.parentNode.remove();
}