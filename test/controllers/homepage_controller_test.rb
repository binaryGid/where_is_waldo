require "test_helper"

class HomepageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get homepage_index_url
    assert_response :success
  end

  test "should get show" do
    get homepage_show_url
    assert_response :success
  end
end
