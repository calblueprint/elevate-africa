module ApplicationHelper
  def valid_admin?
    current_user && current_user.admin?
  end

  def get_url(video_link)
    id = video_link.split("=").last
    if /youtube/ === video_link
      return "//www.youtube.com/embed/#{id}"
    else
      return "//player.vimeo.com/video/109143336"
    end
  end

  def truncate_headline(buzz)
    headline = buzz.headline
    case buzz.box_size
    when 1
      return headline.truncate 20
    when 2
      return headline.truncate 40
    when 3
      return headline.truncate 60
    end
  end

  def can_create_campaign?(user)
    user && user.team? && user.campaign.blank?
  end

  def has_campaign?(user)
    user && user.team? && !user.campaign.blank?
  end

  def get_campaign_types
    Campaign.kinds.map { |s| [s[0].humanize, s[0]] }
  end
end
