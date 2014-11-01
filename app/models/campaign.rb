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
#  description :string(255)
#  deadline    :string(255)
#  team_id     :integer
#

class Campaign < ActiveRecord::Base
  belongs_to :team
  has_many :donations, dependent: :destroy

  validates :name, presence: true
end
