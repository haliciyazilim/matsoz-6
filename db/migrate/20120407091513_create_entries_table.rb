class CreateEntriesTable < ActiveRecord::Migration
  def change
    create_table(:entries) do |t|
      t.string :word
      t.string :meaning
    end
  end
end
