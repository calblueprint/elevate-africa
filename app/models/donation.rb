# == Schema Information
#
# Table name: donations
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  amount      :integer          default(0)
#  created_at  :datetime
#  updated_at  :datetime
#  campaign_id :integer
#  email       :string(255)      default("")
#

class Donation < ActiveRecord::Base
  default_scope { order("created_at DESC") }

  belongs_to :campaign

  # validates :name, presence: true
  validates :email, presence: true
  validates :amount, presence: true


end
