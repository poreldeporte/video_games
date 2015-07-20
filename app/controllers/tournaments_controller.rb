class TournamentsController < ApplicationController
  def index
	render('index')
  end
  def api_index
  	tournaments = Tournament.all
    render(:json => tournaments)
  end

  def create
  	tournament = Tournament.new(tournament_params)

  	if tournament.save
  		render :status => 201, :json => tournament	
  	else
  		redirect_to('/')
  	end
  end

  def destroy
 	tournament = Tournament.find_by(:id => params[:id])

  	if tournament.nil?
  		render( :status => 404,
					:json => { :error => "Tournament not found!" })
  	else
  		tournament.destroy
  		
  		render(:status => 200, :nothing => true)
  	end
  end 

  private
  def tournament_params
  	return params.require(:tournament).permit(:name)
  end
end
