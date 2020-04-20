@RunOnlyThis
Feature: This is my first feature

Scenario: This scenario will add two numbers and display result
	Given I have first number 5
	And I have second number 7
	Then Add two numbers
	And Display Result
	
	
Scenario: This second scenario
	Given I have first number 11
	And I have second number 9
	Then Add two numbers
	And Display Result
	

Scenario: Add multiple numbers
	Given I have following numbers:
	|7|
	|5|
	|3|
	|9|
	|6|
	Then I will add all of those numbers
	And Display Result