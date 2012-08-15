Feature: show existing entries

  As a math student
  So that I can learn meaning of words
  I want to be able to see words and their definitions
  
Background: entries in database

  Given the following entries exist:
  | word    | meaning                                                           |
  | Açı     | Başlangıç noktaları aynı olan iki ışının birleşimine açı denir.   |
  | Üçgen   | Her şeye üçer üçer sahip olan şeye üçgen denir.                   |
  
Scenario: show name and description of a word
  Given I am on the entry page for "Açı"
  Then I should see "Başlangıç noktaları aynı olan iki ışının birleşimine açı denir."
  