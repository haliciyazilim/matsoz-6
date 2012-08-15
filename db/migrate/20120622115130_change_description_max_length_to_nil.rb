class ChangeDescriptionMaxLengthToNil < ActiveRecord::Migration
  def change
    change_column :entries, :meaning, :text, :limit => nil
  end
end
