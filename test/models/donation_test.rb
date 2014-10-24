# == Schema Information
#
# Table name: donations
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  amount     :decimal(9, 2)
#  created_at :datetime
#  updated_at :datetime
#

require 'test_helper'

class DonationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
