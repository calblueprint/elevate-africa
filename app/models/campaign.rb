# == Schema Information
#
# Table name: campaigns
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  goal        :integer
#  created_at  :datetime
#  updated_at  :datetime
#  description :text             default("")
#  team_id     :integer
#  picture     :string(255)
#  duration    :integer
#  type        :integer
#

class Campaign < ActiveRecord::Base
  default_scope { order("created_at DESC") }
  enum kind: [ :adventure, :birthday, :wedding, :celebration ]

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
    return 1 unless goal > 0
    (get_total_donations / goal.to_f).round(2)
  end

  def self.search(search)
    search.downcase!
    Campaign.all.select do |c|
      c.name.downcase.include?(search) ||
      c.description.downcase.include?(search) ||
      c.team.name.downcase.include?(search)
    end
  end

  def most_recent_donation
    donations.order_by_most_recent.first
  end
end
