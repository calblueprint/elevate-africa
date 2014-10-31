# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  content     :text
#  campaign_id :integer
#  first_name  :string(255)
#  last_name   :string(255)
#  email       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

class Comment < ActiveRecord::Base
end
