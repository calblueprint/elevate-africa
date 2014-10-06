# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  email      :string(255)
#  first_name :string(255)
#  last_name  :string(255)
#  password   :string(255)
#  username   :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Admin < User
  def is_admin?
    true
  end
end
