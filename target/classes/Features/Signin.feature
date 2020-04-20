Feature: Signin feature

@SmokeWebTest
Scenario Outline: Check the behavoiur when user enters valid username and invalid password
	When User enters "<username>" and "<password>"
	Then User should not able to login
	Examples:
	 |username|password|
	 |9970306695|minalketan|
	 |9970306695|minalketan|
	 |9970306695|minalketan|