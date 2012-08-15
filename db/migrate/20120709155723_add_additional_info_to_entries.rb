class AddAdditionalInfoToEntries < ActiveRecord::Migration
  def change
    add_column :entries, :additionalInfo, :string

  end
end
