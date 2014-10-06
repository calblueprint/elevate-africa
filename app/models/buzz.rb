# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  content    :text
#  admin_id   :integer
#  video_link :string(255)
#  title      :string(255)
#  subtitle   :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Buzz < ActiveRecord::Base
  belongs_to :admin

  validates_presence_of :title, :subtitle, :content
end
