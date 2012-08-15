# encoding: utf-8


class StatsController < ApplicationController
  def index
    @stats = Stat.find(:all, :order => "date")
    
    @last = @stats.last
    @accepted = @last[:accepted]
    @delivered = @last[:delivered]
    @finished  = @last[:finished]
    @started = @last[:started]
    @rejected = @last[:rejected]
    @unscheduled = @last[:unscheduled]
    
  end
end