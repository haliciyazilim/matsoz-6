# encoding: utf-8

class String
  def to_downcase_english
    self.downcase.gsub('ç', 'c').gsub('ğ', 'g').gsub('ı', 'i').gsub('ö', 'o').gsub('ş', 's').gsub('ü', 'u')
                 .gsub('Ç', 'c').gsub('Ğ', 'g').gsub('İ', 'i').gsub('Ö', 'o').gsub('Ş', 's').gsub('Ü', 'u')    
  end
  
  def to_downcase_turkish
     self.downcase.gsub('Ç', 'ç').gsub('Ğ', 'ğ').gsub('İ', 'i').gsub('I', 'ı').gsub('Ö', 'ö').gsub('Ş', 'ş').gsub('Ü', 'ü')
  end
  
  def to_upcase_turkish
    self.upcase.gsub('ç', 'Ç').gsub('ğ', 'Ğ').gsub('i', 'İ').gsub('ı', 'I').gsub('ö', 'Ö').gsub('ş', 'Ş').gsub('ü', 'Ü')
  end
  
  def self.compare_turkish_letters(letter1, letter2)
    alphabet = " 0123456789_abcçdefgğhıijklmnoöpqrştuüvwxyz"
    
    letter1 = letter1.to_downcase_turkish
    letter2 = letter2.to_downcase_turkish
    
    index1 = alphabet.index(letter1);
    index2 = alphabet.index(letter2);
    
    if index1
      if index2
        if index1 > index2
          return 1
        elsif index1 < index2
          return -1
        else
          return 0
        end
      else
        return -1
      end
    elsif index2
      return 1
    else
      return letter1 <=> letter2
    end
  end
  
  def compare_turkish (other)
    if self == ""
      if other == ""
        return 0
      else
        return -1
      end
    elsif other == ""
      return 1
    else
      comparison = String.compare_turkish_letters(self[0], other[0])
      if comparison == 0
        return self[1..-1].compare_turkish(other[1..-1])
      else
        return comparison
      end
    end
  end
end

class Entry < ActiveRecord::Base
  has_attached_file :thumbnail,
                    :storage => :s3,
                    :bucket => ENV['S3_BUCKET_NAME'],
                    :s3_credentials => {
                      :access_key_id => ENV['S3_KEY'],
                      :secret_access_key => ENV['S3_SECRET']
                    }
  
  attr_accessible :word, :meaning, :thumbnail, :additionalInfo

  validates :word, :presence => true
  
  def javascript_file
    return 'animations/' + self.word.to_downcase_english.gsub(/\s+/, '_') + '.js'
  end
end
