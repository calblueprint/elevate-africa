# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  created_at             :datetime
#  updated_at             :datetime
#  password               :string(255)
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  type                   :string(255)
#  name                   :string(255)      default("")
#  picture                :string(255)
#

class Team < User
  has_one :campaign

  has_and_belongs_to_many :achievements

  def team?
    true
  end

  # Checks if a team can edit a campaign
  def can_edit?(campaign)
    self.campaign == campaign
  end
end
