$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/First.feature");
formatter.feature({
  "line": 2,
  "name": "This is my first feature",
  "description": "",
  "id": "this-is-my-first-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RunOnlyThis"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "This scenario will add two numbers and display result",
  "description": "",
  "id": "this-is-my-first-feature;this-scenario-will-add-two-numbers-and-display-result",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have first number 5",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I have second number 7",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Add two numbers",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Display Result",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "Calculator.i_have_first_number(int)"
});
formatter.result({
  "duration": 357863800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 21
    }
  ],
  "location": "Calculator.i_have_second_number(int)"
});
formatter.result({
  "duration": 148000,
  "status": "passed"
});
formatter.match({
  "location": "Calculator.add_two_numbers()"
});
formatter.result({
  "duration": 36400,
  "status": "passed"
});
formatter.match({
  "location": "Calculator.display_Result()"
});
formatter.result({
  "duration": 151900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "This second scenario",
  "description": "",
  "id": "this-is-my-first-feature;this-second-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I have first number 11",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I have second number 9",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Add two numbers",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Display Result",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 20
    }
  ],
  "location": "Calculator.i_have_first_number(int)"
});
formatter.result({
  "duration": 123800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 21
    }
  ],
  "location": "Calculator.i_have_second_number(int)"
});
formatter.result({
  "duration": 113800,
  "status": "passed"
});
formatter.match({
  "location": "Calculator.add_two_numbers()"
});
formatter.result({
  "duration": 60100,
  "status": "passed"
});
formatter.match({
  "location": "Calculator.display_Result()"
});
formatter.result({
  "duration": 333400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Add multiple numbers",
  "description": "",
  "id": "this-is-my-first-feature;add-multiple-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I have following numbers:",
  "rows": [
    {
      "cells": [
        "7"
      ],
      "line": 20
    },
    {
      "cells": [
        "5"
      ],
      "line": 21
    },
    {
      "cells": [
        "3"
      ],
      "line": 22
    },
    {
      "cells": [
        "9"
      ],
      "line": 23
    },
    {
      "cells": [
        "6"
      ],
      "line": 24
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I will add all of those numbers",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Display Result",
  "keyword": "And "
});
formatter.match({
  "location": "Calculator.i_have_following_numbers(Integer\u003e)"
});
formatter.result({
  "duration": 2199100,
  "status": "passed"
});
formatter.match({
  "location": "Calculator.i_will_add_all_of_those_numbers()"
});
formatter.result({
  "duration": 94200,
  "status": "passed"
});
formatter.match({
  "location": "Calculator.display_Result()"
});
formatter.result({
  "duration": 334800,
  "status": "passed"
});
formatter.uri("Features/Second.feature");
formatter.feature({
  "line": 1,
  "name": "This is second feature",
  "description": "",
  "id": "this-is-second-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "This scenario will add two numbers and display result",
  "description": "",
  "id": "this-is-second-feature;this-scenario-will-add-two-numbers-and-display-result",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have first number 25",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I have second number 25",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Add two numbers",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Display Result",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 20
    }
  ],
  "location": "Calculator.i_have_first_number(int)"
});
formatter.result({
  "duration": 189500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 21
    }
  ],
  "location": "Calculator.i_have_second_number(int)"
});
formatter.result({
  "duration": 115200,
  "status": "passed"
});
formatter.match({
  "location": "Calculator.add_two_numbers()"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.match({
  "location": "Calculator.display_Result()"
});
formatter.result({
  "duration": 299000,
  "status": "passed"
});
formatter.uri("Features/Signin.feature");
formatter.feature({
  "line": 1,
  "name": "Signin feature",
  "description": "",
  "id": "signin-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Check the behavoiur when user enters valid username and invalid password",
  "description": "",
  "id": "signin-feature;check-the-behavoiur-when-user-enters-valid-username-and-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeWebTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "signin-feature;check-the-behavoiur-when-user-enters-valid-username-and-invalid-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "signin-feature;check-the-behavoiur-when-user-enters-valid-username-and-invalid-password;;1"
    },
    {
      "cells": [
        "9970306695",
        "minalketan"
      ],
      "line": 9,
      "id": "signin-feature;check-the-behavoiur-when-user-enters-valid-username-and-invalid-password;;2"
    },
    {
      "cells": [
        "9970306695",
        "minalketan"
      ],
      "line": 10,
      "id": "signin-feature;check-the-behavoiur-when-user-enters-valid-username-and-invalid-password;;3"
    },
    {
      "cells": [
        "9970306695",
        "minalketan"
      ],
      "line": 11,
      "id": "signin-feature;check-the-behavoiur-when-user-enters-valid-username-and-invalid-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Check the behavoiur when user enters valid username and invalid password",
  "description": "",
  "id": "signin-feature;check-the-behavoiur-when-user-enters-valid-username-and-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeWebTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User enters \"9970306695\" and \"minalketan\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "9970306695",
      "offset": 13
    },
    {
      "val": "minalketan",
      "offset": 30
    }
  ],
  "location": "SignInSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 121267600,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.testingshastra.signin.pages.SignInPage.enterEmailOrPhone(SignInPage.java:22)\r\n\tat stepDefinition.SignInSteps.user_enters_username_and_password(SignInSteps.java:58)\r\n\tat ✽.When User enters \"9970306695\" and \"minalketan\"(Features/Signin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInSteps.user_should_not_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check the behavoiur when user enters valid username and invalid password",
  "description": "",
  "id": "signin-feature;check-the-behavoiur-when-user-enters-valid-username-and-invalid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeWebTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User enters \"9970306695\" and \"minalketan\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "9970306695",
      "offset": 13
    },
    {
      "val": "minalketan",
      "offset": 30
    }
  ],
  "location": "SignInSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 917300,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.testingshastra.signin.pages.SignInPage.enterEmailOrPhone(SignInPage.java:22)\r\n\tat stepDefinition.SignInSteps.user_enters_username_and_password(SignInSteps.java:58)\r\n\tat ✽.When User enters \"9970306695\" and \"minalketan\"(Features/Signin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInSteps.user_should_not_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "Check the behavoiur when user enters valid username and invalid password",
  "description": "",
  "id": "signin-feature;check-the-behavoiur-when-user-enters-valid-username-and-invalid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeWebTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User enters \"9970306695\" and \"minalketan\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "9970306695",
      "offset": 13
    },
    {
      "val": "minalketan",
      "offset": 30
    }
  ],
  "location": "SignInSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 857400,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.testingshastra.signin.pages.SignInPage.enterEmailOrPhone(SignInPage.java:22)\r\n\tat stepDefinition.SignInSteps.user_enters_username_and_password(SignInSteps.java:58)\r\n\tat ✽.When User enters \"9970306695\" and \"minalketan\"(Features/Signin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInSteps.user_should_not_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Features/Third.feature");
formatter.feature({
  "line": 1,
  "name": "This is my third feature",
  "description": "",
  "id": "this-is-my-third-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "This scenario will add two numbers and display result",
  "description": "",
  "id": "this-is-my-third-feature;this-scenario-will-add-two-numbers-and-display-result",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have a number 12",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I have a number 5",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Adding two number",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Result",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 16
    }
  ],
  "location": "Calculator2.i_have_a_number(int)"
});
formatter.result({
  "duration": 175100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "Calculator2.i_have_a_number(int)"
});
formatter.result({
  "duration": 108800,
  "status": "passed"
});
formatter.match({
  "location": "Calculator2.m1()"
});
formatter.result({
  "duration": 114200,
  "status": "passed"
});
formatter.match({
  "location": "Calculator2.Result()"
});
formatter.result({
  "duration": 113200,
  "status": "passed"
});
});