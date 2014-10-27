# == Schema Information
#
# Table name: campaigns
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  goal        :decimal(9, 2)
#  created_at  :datetime
#  updated_at  :datetime
#  donation_id :integer
#

class Campaign < ActiveRecord::Base
  belongs_to :team
  has_many :donations

  def new
  end

  def create
  end
  
end
