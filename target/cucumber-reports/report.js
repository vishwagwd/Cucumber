$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/vishwa/Amar/Features/maps.feature");
formatter.feature({
  "line": 1,
  "name": "To login to daily update",
  "description": "",
  "id": "to-login-to-daily-update",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4367599600,
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
  "duration": 3549535300,
  "status": "passed"
});
formatter.match({
  "location": "Mapping.user_enters_the_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 1250103800,
  "status": "passed"
});
formatter.match({
  "location": "Mapping.login_will_be_successfull()"
});
formatter.result({
  "duration": 1142002900,
  "status": "passed"
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
  "duration": 48640491100,
  "status": "passed"
});
formatter.match({
  "location": "Mapping.send_the_mail_automatically(DataTable)"
});
formatter.result({
  "duration": 2674754200,
  "status": "passed"
});
formatter.after({
  "duration": 4326575700,
  "status": "passed"
});
});