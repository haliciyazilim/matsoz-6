class CreateStatsTable < ActiveRecord::Migration
  def change
    create_table(:stats) do |t|
      t.date :date
      t.integer :accepted
      t.integer :delivered
      t.integer :finished
      t.integer :started
      t.integer :rejected
      t.integer :unscheduled
    end
  end
end
