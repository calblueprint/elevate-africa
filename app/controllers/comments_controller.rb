class CommentsController < ApplicationController
  def create
    @campaign = Campaign.find(params[:campaign_id])
    @comment = @campaign.comments.create(comment_params)
    redirect_to campaign_path(@campaign)
  end

  def destroy
    @campaign = Campaign.find(params[:campaign_id])
    @comment = @campaign.comments.find(params[:id])
    @comment.destroy 
    redirect_to campaign_path(@campaign)
  end

  private
    def comment_params
      params.require(:comment).permit(:commenter, :body)
    end
end
