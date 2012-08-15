
desc "Daily update of interaction statistics"
task :update_stats => :environment do
  Stat.fetch_daily_stats
end