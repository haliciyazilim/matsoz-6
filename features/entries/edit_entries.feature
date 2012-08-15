Feature: show existing entries

  As a dictionary editor
  So that I can create better definitions
  I want to be able to edit the definitions of words
  
Background: entries in database

  Given the following entries exist:
  | word    | meaning                                                           |
  | Aci     | Başlangıç noktaları aynı olan iki ışın.                           |
  | Üçgen   | Her şeye üçer üçer sahip olan şeye üçgen denir.                   |
  
Scenario: going to the edit page
  Given I am on the entry page for "Aci"
  When I follow "Edit Aci"
  Then I should see "Aci"
  And I should see "Başlangıç noktaları aynı olan iki ışın."
  
Scenario: edit name and description of a word
  Given I am on the edit page for "Aci"
  When I fill in "Word" with "Açı"
  And I fill in "Meaning" with "Başlangıç noktaları aynı olan iki ışının birleşimine açı denir."
  And I press "Update Entry"
  Then I should be on the entry page for "Açı"
  And I should see "Açı was successfully updated."
  And I should see "Başlangıç noktaları aynı olan iki ışının birleşimine açı denir."

Scenario: delete entry
  Given I am on the edit page for "Aci"
  When I press "Delete Aci"
  Then I should be on the entries page
  And "Aci" should be deleted
  And I should see "Aci was deleted successfully."
  
Scenario: going back to index
  Given I am on the edit page for "Aci"
  When I follow "Back to Aci"
  Then I should be on the entry page for "Aci"
