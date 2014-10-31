# == Schema Information
#
# Table name: achievements
#
#  id         :integer          not null, primary key
#  team_id    :integer
#  badge      :integer
#  created_at :datetime
#  updated_at :datetime
#

class Achievement < ActiveRecord::Base
end
