@login
Feature: Login on Kratify
   As a registered user
   I want to log in
   For see my dashboard

## Viene siendo como el BeforeEach
## Background: 
  #  Given I am on the login page
   # And I accept the cookies
 @smoke
 Scenario: Successful Login
    Given I am on the login page
    And I accept the cookies
    When I log in as the default user
    Then I see the welcome message "Hi, testuser"

 @negative 
 Scenario: A user without an account cannot log in
    Given I am on the login page
    And I accept the cookies
    When I log in as a user without an account
    Then I stay on the login page
    
 @negative 
 Scenario Outline: Login fails with <case>
    Given I am on the login page
    And I accept the cookies
    When I log in with email "<email>" and password "<password>"
    Then I stay on the login page

    Examples:
    | case | email | password |
    | wrong password | testuser@yopmail.com | xxxx |
    | unknown email | noexiste@yopmail.com | tesuser |   

 @visual
 Scenario: The login Page has not changed visually
    Given I am on the login page
    And I accept the cookies
    Then the login page matches the baseline

 @table
 Scenario: The login form shows all its fields
    Given I am on the login page
    And I accept the cookies
    Then I see the following fields:
    | role | name |
    | textbox | Email |
    | textbox | Password |
    | button | Log in |