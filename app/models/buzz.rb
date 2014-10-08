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
#

class Buzz < ActiveRecord::Base
  belongs_to :admin

  validates :headline, presence: true
  validates :subhead, presence: true
  validates :content, presence: true

  # mount_uploader :picture, PictureUploader
end
