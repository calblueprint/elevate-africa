# == Schema Information
#
# Table name: buzzes
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  content    :text
#  admin_id   :integer
#  video_link :string(255)
#  headline   :string(255)
#  subhead    :string(255)
#  picture    :string(255)
#  box_size   :integer
#  box_color  :string(255)
#

class Buzz < ActiveRecord::Base

  BOX_SIZE_SELECT = [['1 square wide', 1], ['2 squares wide', 2], ['3 squares wide', 3]]
  BOX_COLORS = [["Tag 1","#D1F2A5"], ["Tag 2", "#EFFAB4"],
                ["Tag 4", "#FFC48C"], ["Tag 5", "F56991"],
                ["Tag 6", "FF9F80"]]
  TAGS = { "D1F2A5" => "Tag 1", "#EFFAB4" => "Tag 2", "#FFC48C" => "Tag 3",
           "F56991" => "Tag 5", "FF9F80" => "Tag 6" }

  VIDEO_REGEX = /(youtube|vimeo).com\/.*[a-zA-Z0-9]+\z/

  belongs_to :admin

  validates :headline, presence: true
  validates :subhead, presence: true
  validates :content, presence: true
  validates :video_link, format: { with: VIDEO_REGEX }, allow_blank: true
  validates :box_size, presence: true
  validates :box_color, presence: true


  mount_uploader :picture, PictureUploader

  # Formats date
  def get_date
    created_at.strftime("%b %d, %Y")
  end

  def tag
    TAGS[box_color]
  end

  def recommended_buzz
    related = Buzz.where(box_color: box_color)
    related.delete(self)
    related.take(4)
  end

  # def assign_color
  #   self.box_color = BOX_COLORS.shuffle.min do |color1, color2|
  #     Buzz.where(box_color: color1).count <=> Buzz.where(box_color: color2).count
  #   end
  # end
end
