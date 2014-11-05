# == Schema Information
#
# Table name: campaigns
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  goal        :decimal(9, 2)
#  created_at  :datetime
#  updated_at  :datetime
#  description :text             default("")
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
  validates :description, presence: true
  # validates :goal, presence: true, numericality: { only_integer: true, greater_than: 0 }


  # Calulates the total amount of donations
  def get_total_donations
    total = 0
    if donations.any?
      donations.each do |donation|
        total += donation.amount
      end
    end
    total
  end

  def get_donation_percentage
    (get_total_donations / goal).to_f.round(2)
  end
end
