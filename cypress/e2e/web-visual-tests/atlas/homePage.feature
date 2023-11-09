Feature: HomePage

  @AT @DK @GB @US @IT @FR @FI @NO @SE @NL @BE @CH @LU @ES @PT @IE @PL @GR  @DE @HU @SK @CZ
  Scenario: Verify homepage
    Given I open storefront
    Then I verify header icons
    Then I verify elements on homepage