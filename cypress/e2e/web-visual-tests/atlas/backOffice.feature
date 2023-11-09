Feature: Back office validations

    @FI
    Scenario: I verify VG general cronjobs
        Given Navigate to backoffice and login
        When I open the cronjob section
        Then I validate the VG general cronjobs

    @AT @DK @GB @US @IT @FR @FI @NO @SE @NL @BE @CH @LU @ES @PT @IE @PL @GR  @DE @HU @SK @CZ
    Scenario: I verify all VG specific cronjobs
        Given Navigate to backoffice and login
        When I open the cronjob section
        Then I validate the VG specific cronjobs