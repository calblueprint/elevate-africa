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
#  box_size   :integer          default(1)
#

class Buzz < ActiveRecord::Base
  belongs_to :admin

  validates :headline, presence: true
  validates :subhead, presence: true
  validates :content, presence: true

  mount_uploader :picture, PictureUploader

  BOX_SIZE_SELECT = [['1 square wide', 1], ['2 squares wide', 2], ['3 squares wide', 3]]
end
