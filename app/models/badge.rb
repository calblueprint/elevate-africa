# == Schema Information
#
# Table name: badges
#
#  id             :integer          not null, primary key
#  created_at     :datetime
#  updated_at     :datetime
#  team_id        :integer
#  achievement_id :integer
#

class Badge < ActiveRecord::Base
  belongs_to :team
  belongs_to :achievement
end
