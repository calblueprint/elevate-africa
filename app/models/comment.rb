class Comment < ActiveRecord::Base
  default_scope { order('created_at DESC') }
  belongs_to :campaign
end
