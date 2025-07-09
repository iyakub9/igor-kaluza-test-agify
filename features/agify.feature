Feature: Age validation API with agify

  Scenario: Verify age by valid first name
    When I send a GET request to agify API with name "igor"
    Then Verify that response status should be 200
    Then Verify that response should include name "igor"
    And Verify that response should include age as a number
    And Verify that response should include count as a number

  Scenario: Verify age by valid full name
    When I send a GET request to agify API with name "igor yakub"
    Then Verify that response status should be 200
    Then Verify that response should include name "igor yakub"
    And Verify that response should include age as a number
    And Verify that response should include count as a number

  Scenario: Verify empty name should return age as null
    When I send a GET request to agify API with name ""
    Then Verify that response status should be 200
    Then Verify that response should include age as null


  Scenario: Verify first name with special characters should return age as null
    When I send a GET request to agify API with name "@@@"
    Then Verify that response should include name "@@@"
    Then Verify that response should include age as null

  Scenario: Verify full name with special characters should return age as null
    When I send a GET request to agify API with name "!gor !@@@kub"
    Then Verify that response should include name "!gor !@@@kub"
    Then Verify that response should include age as null