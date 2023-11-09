Feature: Subscription

  @AT @DE
  Scenario: User places subscription order
    Given I open storefront
    When Login with "atlasUser" credentials
    When User navigates to subscription page
    Then User buys subscription


  @AT @DE
  Scenario: validate subscription creation in backoffice
    Given Navigate to backoffice and login
    When I open subscription section
    Then I verify subscription fields

  @AT @DE
  Scenario: Guest places subscription order
    Given I open storefront
    When User navigates to subscription page
    Then Guest user buys subscription
    When Login with "atlasUser" credentials
    Then Guest user continues as logged in buying subscription

  @AT @DE
  Scenario: validate guest subscription creation in backoffice
    Given Navigate to backoffice and login
    When I open subscription section
    Then I verify subscription fields


  @AT @DE
  Scenario: User modifies subscription order from summary page
    Given I open storefront
    When Login with "atlasUser" credentials
    When User navigates to subscription page
    Then User selects subscription
    Then User modifies and buys subscription from summary page

  @AT @DE
  Scenario: validate subscription creation in backoffice
    Given Navigate to backoffice and login
    When I open subscription section
    Then I verify subscription fields

  @AT @DE
  Scenario: User modifies subscription order from transaction page
    Given I open storefront
    When Login with "atlasUser" credentials
    When User navigates to subscription page
    Then User buys subscription
    Then User modifies and verifies subscription from transactions page

  @AT @DE
  Scenario: validate subscription creation in backoffice
    Given Navigate to backoffice and login
    When I open subscription section
    Then I verify subscription fields
