Feature: To login to daily update 


Background: Successfull login with valid credentials. 
	Given user is on the login page. 
	Then user enters the username and password 
		|username|password|
		|vishwanath@esoftsys.com|147258|
		Then login will be successfull. 

@weekdays
Scenario: and user fills the details
 	And user fills all the details regarding the time entry 
		|Project|Job|Task|Timespent|Diary|
		
		|Administration|General Administration|MailChecking, MobilPro Entry|0.75|Mail checking and mobil pro entry|
		
		|Administration|Meeting|Meeting|0.25|meeting|
		
		|JMS All Storage|EOD Data Verification|Day End Verification|0.5|Day end verification for JMS and JMS Harris|
		
		|Public Storage Canada|Day End Verification|Day End Verification|0.5|Day end verification for P0045 site|
		
		|Storage Partners LLC|Quality Assurance|Day End Verification|0.5|Day end verification|
		
		|Storage West|Quality Assurance|Day End Verification|0.75|Day end verification|
		
		#|Storage West|Support|Customer Support|0.75|HD #189766,189704 |
		
		|SSM Ver 5.0 International Version|Quality Assurance|Day End Verification|0.25|Day end verification attic|
		
		#|SSM Ver 5.0 International Version|Quality Assurance|Quality Assurance Testing|0.5|Worked on  support related to lease print issue in P0012|
		
		#|SSM Ver 5.0 International Version|Quality Assurance|Quality Assurance Testing|0.75|vermont internal payment option|
		
		|SSM Ver 5.0 International Version|Quality Assurance|Quality Assurance Testing|5|Urban BRT and configuring link for planet BRT and platinum BRT|
				
		|Platinum Storage|Quality Assurance|Report Generation|0.5|Report generation for Skip |
		
		#|SSM Ver 5.0 International Version|Quality Assurance|Quality Assurance Testing|1|Training By Ramesh sir on PTI Gate|
		
Then send the mail automatically	
	|From|To|
	|vishwanath@e-softsys.com|vishwanath@e-softsys.com|

	
		
		
@weekends
Scenario: expenses entry

Given  fill the details to comeplete the expenses entry.

|SSM Ver 5.0 International Version|Quality Assurance|Quality Assurance Testing|1.5|Worked on patch testing for 5A--"meeting for 5min"|
		
		|SSM Ver 5.0 International Version|Quality Assurance|Quality Assurance Testing|1.75|Worked on patch testing for Urban--"RE: Urban Bank Rate Reports & Queries"|
		
		|SSM Ver 5.0 International Version|Quality Assurance|Quality Assurance Testing|2|Worked on replicating issue with--105329|

		|Storage Partners LLC|Quality Assurance|Quality Assurance Testing|2.5|Quick QA|
