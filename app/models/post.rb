# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  content    :text
#  user_id    :integer
#  video_link :string(255)
#  title      :string(255)
#  subtitle   :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Post < ActiveRecord::Base
end
