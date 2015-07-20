class Player < ActiveRecord::Base
	has_many :tournaments, through: :registrations
end
