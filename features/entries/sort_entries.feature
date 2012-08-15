Feature: show existing entries

  As a dictionary user
  So that I can find the right word easily
  I want to be able to see words in a sorted order
  
Background: entries in database

  Given the following entries exist:
  | word    | meaning                                                           |
  | Üçgen   | Her şeye üçer üçer sahip olan şeye üçgen denir.                   |
  | Açı     | Başlangıç noktaları aynı olan iki ışının birleşimine açı denir.   |
  
Scenario: show name and description of a word
  Given I am on the entries page
  Then I should see "Açı" before "Üçgen"
