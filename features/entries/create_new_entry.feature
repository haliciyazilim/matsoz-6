Feature: create new entries

  As a Halici employee
  So that I can populate the math dictionary
  I want to add new entries
  
Scenario: create entry link in entry page
  Given the following entries exist:
  | word    | meaning                                                           |
  | Açı     | Başlangıç noktaları aynı olan iki ışının birleşimine açı denir.   |
  | Üçgen   | Her şeye üçer üçer sahip olan şeye üçgen denir.                   |
  And I am on the entry page for "Açı"
  Then I should see "Create new entry"

Scenario: create entry link in index
  Given I am on the entries page
  Then I should see "Create new entry"
  
Scenario: create a new entry
  Given I am on the new entry page
  When I fill in "Word" with "Açı"
  Then I fill in "Meaning" with "Başlangıç noktaları aynı olan iki ışının birleşimine açı denir."
  And I press "Create Entry"
  Then I should be on the entry page for "Açı"
  And I should see "Entry created successfully"