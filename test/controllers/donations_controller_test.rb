require 'test_helper'

class DonationsControllerTest < ActionController::TestCase
  test "should get new" do
    get :new
    assert_response :success
  end

end
