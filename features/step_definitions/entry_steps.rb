
require 'uri'

Given /the following entries exist/ do |entries_table|
  entries_table.hashes.each do |entry|
    # each returned element will be a hash whose key is the table header.
    # you should arrange to add that movie to the database here.
    Entry.create(entry)
  end
end

Then /^"([^"]*)" should be deleted$/ do |arg1|
  Entry.find_by_word(arg1).should be nil
end

Given /^I am on the entries page$/ do
  visit entries_path
end

Given /^I am on the new entry page$/ do
  visit new_entry_path
end

Given /^I am on the entry page for "([^"]*)"$/ do |word|
  visit entry_path(Entry.find_by_word(word).id)
end

Given /^I am on the edit page for "([^"]*)"$/ do |word|
  visit edit_entry_path(Entry.find_by_word(word).id)
end

Then /^I should be on the entry page for "([^"]*)"$/ do |word|
  current_path = URI.parse(current_url).path
  current_path.should == entry_path(Entry.find_by_word(word).id)
end

Then /^I should be on the entries page$/ do
  current_path = URI.parse(current_url).path
  current_path.should == entries_path
end
