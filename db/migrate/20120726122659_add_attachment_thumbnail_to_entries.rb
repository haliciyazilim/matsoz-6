class AddAttachmentThumbnailToEntries < ActiveRecord::Migration
  def self.up
    change_table :entries do |t|
      t.has_attached_file :thumbnail
    end
  end

  def self.down
    drop_attached_file :entries, :thumbnail
  end
end
