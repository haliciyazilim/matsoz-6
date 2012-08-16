
class EntryGenerator < Rails::Generators::NamedBase
  desc "This generator creates the javascript files for an entry"
  def create_javascript_files
    EntryGenerator.source_root File.expand_path("../templates", __FILE__)
    
    create_file "app/assets/javascripts/animations/#{file_name}/#{file_name}.includes.js",
%Q{//= require #{file_name}.styles.js
//= require #{file_name}.common.js
//= require #{file_name}.animation.js
//= require #{file_name}.interaction.js
}

    copy_file "styles.js", "app/assets/javascripts/animations/#{file_name}/#{file_name}.styles.js"
    copy_file "common.js", "app/assets/javascripts/animations/#{file_name}/#{file_name}.common.js"
    copy_file "animation.js", "app/assets/javascripts/animations/#{file_name}/#{file_name}.animation.js"
    copy_file "interaction.js", "app/assets/javascripts/animations/#{file_name}/#{file_name}.interaction.js"

  end
end
