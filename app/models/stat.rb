# encoding: utf-8

require 'net/https'

class Stat < ActiveRecord::Base
  attr_readonly :date
  attr_accessible :date, :accepted, :delivered, :finished, :started, :rejected, :unscheduled
  
  def date_str
    # return self.date.strftime("%a, %d %b %Y")
    return self.date.strftime("%b %d")
  end
  
  def Stat.fetch_daily_stats
    https = Net::HTTP.new('www.pivotaltracker.com', 443)
    https.use_ssl = true
    https.verify_mode = OpenSSL::SSL::VERIFY_PEER
    https.ca_path = '/etc/ssl/certs' if File.exists?('/etc/ssl/certs') # Ubuntu
    https.ca_file = '/opt/local/share/curl/curl-ca-bundle.crt' if File.exists?('/opt/local/share/curl/curl-ca-bundle.crt') # Mac OS X
    xml_data = https.request_post('/services/v3/tokens/active', "username=#{ENV['PIVOTAL_USER']}&password=#{ENV['PIVOTAL_PASS']}").body

    hash = Hash.from_xml(xml_data)
    
    token = hash['token']['guid']
    
    
    xml_data = https.request_get('/services/v3/projects/589545/stories?filter=label%3A%22interaction%22%20includedone%3Atrue', {'X-TrackerToken' => token}).body
    responseHash = Hash.from_xml(xml_data)
      
    stories = responseHash['stories']
      
    hash = {}
    
    stories.each do |story|
      state = story['current_state'].to_sym
      hash[state] ? hash[state] += 1 : hash[state] = 1
    end
    
    date = Date.current()
    
    stat = Stat.find_by_date(date)
    stat = Stat.create(:date => date) if !stat
    
    stat.update_attributes!(:accepted => hash[:accepted])
    stat.update_attributes!(:delivered => hash[:delivered])
    stat.update_attributes!(:finished => hash[:finished])
    stat.update_attributes!(:started => hash[:started])
    stat.update_attributes!(:rejected => hash[:rejected])
    stat.update_attributes!(:unscheduled => hash[:unscheduled])
  end
end