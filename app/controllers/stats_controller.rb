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

    if !@accepted
      @accepted = 0
    end
    
    if !@delivered
      @delivered = 0
    end
    
    if !@finished
      @finished = 0
    end
    
    if !@started
      @started = 0
    end
    
    if !@rejected
      @rejected = 0
    end
    
    if !@unscheduled
      @unscheduled = 0
    end
  end
end