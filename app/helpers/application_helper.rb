module ApplicationHelper
  def valid_admin?
    current_user && current_user.is_admin?
  end

  def get_url(video_link)
    id = video_link.split("=").last
    if /youtube/ === video_link
      return "//www.youtube.com/embed/#{id}"
    else
      return "//player.vimeo.com/video/109143336"
    end
  end
end
