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
#  picture     :string(255)
#

class Campaign < ActiveRecord::Base
  default_scope { order("created_at DESC") }

  belongs_to :team

  has_many :donations, dependent: :destroy

  mount_uploader :picture, PictureUploader

  validates :name, presence: true

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
