# == Schema Information
#
# Table name: achievements
#
#  id          :integer          not null, primary key
#  created_at  :datetime
#  updated_at  :datetime
#  name        :integer
#  description :string(255)      default("")
#

class Achievement < ActiveRecord::Base
  has_and_belongs_to_many :teams
end
