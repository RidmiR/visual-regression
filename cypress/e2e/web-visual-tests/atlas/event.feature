Feature: event

  @GB @ES @DE @BE @AT @IT @FR @NL @SE @CZ @SK @DK
  Scenario: verify elements and functionalities on event detail page
    Given I open storefront
    When I open event detail page
    Then I verify elements on event detailpage
    Then I book event

  @GB @ES @DE @BE @AT @FR @NL @SE @SK @DK
  Scenario: Verify elements of event details page and place paid Event order
    Given I open storefront
    When Login with "atlasUser" credentials
    And Verifies if cart is empty
    When I open event detail page
    Then I book event
    And User opens the mini cart
    And User opens cart page from minicart
    And User continue checkout journey event
    And User place order with VISA
    Then User should see order confirmation page

  @DE @IT @CZ
  Scenario: Place free Event order
    Given I open storefront
    When Login with "atlasUser" credentials
    And Verifies if cart is empty
    When User adds free event to the cart
    And User opens the mini cart
    And User opens cart page from minicart
    And User continue checkout journey event
    Then User should see order confirmation page