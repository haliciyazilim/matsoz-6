
When /^(?:|I )fill in "([^"]*)" with "([^"]*)"$/ do |field, value|
  fill_in(field, :with => value)
end

When /^(?:|I )press "([^"]*)"$/ do |button|
  click_button(button)
end

Then /^(?:|I )should see "([^"]*)"$/ do |text|
    page.should have_content(text)
end

Then /I should see "(.*)" before "(.*)"/ do |e1, e2|
  #  ensure that that e1 occurs before e2.
  #  page.content  is the entire content of the page as a string.
  #  assert page.body =~ /#{Regexp.quote(e2)}(.*)#{Regexp.quote(e1)}/
  index1 = page.body =~ /#{Regexp.quote(e1)}/
  index2 = page.body =~ /#{Regexp.quote(e2)}/
  assert index1, '"' + e1 + '" is not present in the page'
  assert index2, '"' + e2 + '" is not present in the page'
  assert index1 < index2, '"' + e1 + '" appears AFTER "' + e2 + '"'
end

When /^(?:|I )follow "([^"]*)"$/ do |link|
  click_link(link)
end
