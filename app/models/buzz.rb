# == Schema Information
#
# Table name: buzzes
#
#  id         :integer          not null, primary key
#  content    :text
#  admin_id   :integer
#  video_link :string(255)
#  headline   :string(255)
#  subhead    :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Buzz < ActiveRecord::Base
  belongs_to :admin

  validates :headline, presence: true
  validates :subhead, presence: true
  validates :content, presence: true

  # mount_uploader :picture, PictureUploader
end
