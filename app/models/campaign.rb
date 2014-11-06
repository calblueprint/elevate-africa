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
#  team_id     :integer
#  deadline    :integer
#

class Campaign < ActiveRecord::Base
  belongs_to :team
  has_many :donations, dependent: :destroy

  validates :name, presence: true

  mount_uploader :picture, PictureUploader

  def get_total_donations
    total = 0
    if donations.any?
      donations.each do |donation|
        total += donation.amount
      end
      return total
    end
  end
end
