$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/vishwa/Amar/Features/maps.feature");
formatter.feature({
  "line": 1,
  "name": "To login to daily update",
  "description": "",
  "id": "to-login-to-daily-update",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5505555800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Successfull login with valid credentials.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on the login page.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "vishwanath@esoftsys.com",
        "147258"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "login will be successfull.",
  "keyword": "Then "
});
formatter.match({
  "location": "Mapping.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 3719567600,
  "status": "passed"
});
formatter.match({
  "location": "Mapping.user_enters_the_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 1220214600,
  "status": "passed"
});
formatter.match({
  "location": "Mapping.login_will_be_successfull()"
});
formatter.result({
  "duration": 327781100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".ColToday1\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027BLRPC12\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\VISHWA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51741}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 43a1a45d2ca23adda407fac426c1c265\n*** Element info: {Using\u003dclass name, value\u003dColToday1}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinitions.Mapping.login_will_be_successfull(Mapping.java:69)\r\n\tat ✽.Then login will be successfull.(F:/vishwa/Amar/Features/maps.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "and user fills the details",
  "description": "",
  "id": "to-login-to-daily-update;and-user-fills-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@weekdays"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user fills all the details regarding the time entry",
  "rows": [
    {
      "cells": [
        "Project",
        "Job",
        "Task",
        "Timespent",
        "Diary"
      ],
      "line": 14
    },
    {
      "cells": [
        "Administration",
        "General Administration",
        "MailChecking, MobilPro Entry",
        "0.75",
        "Mail checking and mobil pro entry"
      ],
      "line": 16
    },
    {
      "cells": [
        "Administration",
        "Meeting",
        "Meeting",
        "0.25",
        "meeting"
      ],
      "line": 18
    },
    {
      "cells": [
        "JMS All Storage",
        "EOD Data Verification",
        "Day End Verification",
        "0.5",
        "Day end verification for JMS and JMS Harris"
      ],
      "line": 20
    },
    {
      "cells": [
        "Public Storage Canada",
        "Day End Verification",
        "Day End Verification",
        "0.5",
        "Day end verification for P0045 site"
      ],
      "line": 22
    },
    {
      "cells": [
        "Storage Partners LLC",
        "Quality Assurance",
        "Day End Verification",
        "0.5",
        "Day end verification"
      ],
      "line": 24
    },
    {
      "cells": [
        "Storage West",
        "Quality Assurance",
        "Day End Verification",
        "0.75",
        "Day end verification"
      ],
      "line": 26
    },
    {
      "comments": [
        {
          "line": 28,
          "value": "#|Storage West|Support|Customer Support|0.75|HD #189766,189704 |"
        }
      ],
      "cells": [
        "SSM Ver 5.0 International Version",
        "Quality Assurance",
        "Day End Verification",
        "0.25",
        "Day end verification attic"
      ],
      "line": 30
    },
    {
      "comments": [
        {
          "line": 32,
          "value": "#|SSM Ver 5.0 International Version|Quality Assurance|Quality Assurance Testing|0.5|Worked on  support related to lease print issue in P0012|"
        },
        {
          "line": 34,
          "value": "#|SSM Ver 5.0 International Version|Quality Assurance|Quality Assurance Testing|0.75|vermont internal payment option|"
        }
      ],
      "cells": [
        "SSM Ver 5.0 International Version",
        "Quality Assurance",
        "Quality Assurance Testing",
        "5",
        "Urban BRT and configuring link for planet BRT and platinum BRT"
      ],
      "line": 36
    },
    {
      "cells": [
        "Platinum Storage",
        "Quality Assurance",
        "Report Generation",
        "0.5",
        "Report generation for Skip"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#|SSM Ver 5.0 International Version|Quality Assurance|Quality Assurance Testing|1|Training By Ramesh sir on PTI Gate|"
    }
  ],
  "line": 42,
  "name": "send the mail automatically",
  "rows": [
    {
      "cells": [
        "From",
        "To"
      ],
      "line": 43
    },
    {
      "cells": [
        "vishwanath@e-softsys.com",
        "vishwanath@e-softsys.com"
      ],
      "line": 44
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Mapping.user_fills_all_the_details_regarding_the_time_entry(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Mapping.send_the_mail_automatically(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 112933800,
  "status": "passed"
});
});