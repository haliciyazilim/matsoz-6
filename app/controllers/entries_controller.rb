# encoding: utf-8

class EntriesController < ApplicationController  
  before_filter :set_all_entries, :create_word_list
  
  def set_all_entries
    @all_entries = Entry.order(:word).all
  end
  
  def create_word_list
    @word_list = {}
    letters = ['a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'h', 'ı', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'y', 'z'];
    letters.each do |letter|
      entries = Entry.find(:all, :conditions => ['word LIKE ? OR word LIKE ?', "#{letter}%", "#{letter.to_upcase_turkish}%"], :order => 'word ASC')
      
      puts entries
      
      entries = entries.sort do |entry1, entry2|
        entry1.word.compare_turkish(entry2.word)
      end
      
      @word_list[letter] = []
      entries.each do |entry|
        
        selected = false
        if entry.id.to_s == params[:id].to_s
          @current_letter = letter
          selected = true
        end
        
        @word_list[letter] << {
          :word => entry.word,
          :selected => selected,
          :link => entry_path(entry)
        }
      end
    end
  end
  
  def index
    
  end
  
  def show
    @entry = Entry.find(params[:id])

    chunks = @entry.meaning.split(/=>|\*\*/)
    delimiters = @entry.meaning.scan(/=>|\*\*/)
    
    @chunks = []

    errorFound = false
    
    @chunks.push({chunks.shift => nil})
    
    while !(delimiters.empty?)
      delimiter = delimiters.shift
  
      if delimiter == "**"
        chunk = chunks.shift
        delimiter = delimiters.shift
        
        if delimiter == "**"
          @chunks.push({chunk => Entry.find_by_word(chunk)})
          @chunks.push({chunks.shift => nil})
        elsif delimiter == "=>"
          destination = chunks.shift
          @chunks.push({chunk => Entry.find_by_word(destination)})
          
          delimiter = delimiters.shift
          if delimiter == "**"
            @chunks.push({chunks.shift => nil})
          else
            errorFound = true
          end
        else
          errorFound = true
        end
      else
        errorFound = true
      end
    end
  end
  
  def new

  end
  
  def create
    entry = Entry.create(params[:entry])
    if entry
      flash[:notice] = 'Entry created successfully'
      redirect_to entry_path(entry)
    end
  end
  
  def edit
    @entry = Entry.find(params[:id])
  end
  
  def update
    @entry = Entry.find params[:id]
    @entry.update_attributes!(params[:entry])
    flash[:notice] = "#{@entry.word} was successfully updated."
    redirect_to entry_path(@entry)
  end
  
  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy
    flash[:notice] = "#{@entry.word} was deleted successfully."
    redirect_to entries_path
  end
end
