# == Schema Information
#
# Table name: donations
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  amount      :decimal(9, 2)
#  created_at  :datetime
#  updated_at  :datetime
#  campaign_id :integer
#  email       :string(255)      default("")
#

class Donation < ActiveRecord::Base
  belongs_to :campaign

  validates :name, presence: true
end
