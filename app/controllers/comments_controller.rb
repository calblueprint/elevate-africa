class CommentsController < ApplicationController
  def create
    @campaign = Campaign.find(comment_params[:campaign_id])
    @comment = @campaign.comments.create(comment_params)
    redirect_to campaign_path(@campaign)
  end

  def new
    @comment = Comment.new
  end

  def destroy
    @campaign = Campaign.find(params[:campaign_id])
    @comment = @campaign.comments.find(params[:campaign_id])
    @comment.destroy
    redirect_to campaign_path(@campaign)
  end

  private
  def comment_params
    params.require(:comment).permit(:first_name, :last_name, :content, :email, :campaign_id)
  end
end
