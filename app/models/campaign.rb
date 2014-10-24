# == Schema Information
#
# Table name: campaigns
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  goal       :decimal(9, 2)
#  created_at :datetime
#  updated_at :datetime
#

class Campaign < ActiveRecord::Base
  
end
