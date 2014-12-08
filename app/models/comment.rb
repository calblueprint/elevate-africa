class Comment < ActiveRecord::Base
  validates :body, presence: true
  default_scope { order('created_at DESC') }
  belongs_to :campaign
end
