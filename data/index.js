module.exports = {
"expand": "schema,names",
"startAt": 3,
"maxResults": 5,
"total": 344,
"issues": [
{
"expand": "operations,editmeta,changelog,transitions,renderedFields",
"id": "121906",
"self": "https://jira.sonos.com/rest/api/2/issue/121906",
"key": "DEVX-5462",
"fields": {
"issuetype": {
"self": "https://jira.sonos.com/rest/api/2/issuetype/7",
"id": "7",
"description": "A user story",
"iconUrl": "https://jira.sonos.com/images/icons/issuetypes/story.png",
"name": "Story",
"subtask": false
},
"timespent": null,
"customfield_13100": null,
"project": {
"self": "https://jira.sonos.com/rest/api/2/project/13800",
"id": "13800",
"key": "DEVX",
"name": "Developer Experience Backlog",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/projectavatar?pid=13800&avatarId=10009",
"24x24": "https://jira.sonos.com/secure/projectavatar?size=small&pid=13800&avatarId=10009",
"16x16": "https://jira.sonos.com/secure/projectavatar?size=xsmall&pid=13800&avatarId=10009",
"32x32": "https://jira.sonos.com/secure/projectavatar?size=medium&pid=13800&avatarId=10009"
},
"projectCategory": {
"self": "https://jira.sonos.com/rest/api/2/projectCategory/10000",
"id": "10000",
"description": "SW-PD wide backlogs",
"name": "Software Backlogs"
}
},
"customfield_11000": "CP-3767",
"customfield_13102": null,
"fixVersions": [],
"customfield_11200": null,
"aggregatetimespent": null,
"resolution": null,
"customfield_11401": null,
"customfield_11400": null,
"customfield_12601": null,
"customfield_10503": null,
"customfield_10305": [
{
"self": "https://jira.sonos.com/rest/api/2/user?username=allison.house%40sonos.com",
"name": "allison.house@sonos.com",
"emailAddress": "allison.house@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=allison.house%40sonos.com&avatarId=14103",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=allison.house%40sonos.com&avatarId=14103",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=allison.house%40sonos.com&avatarId=14103",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=allison.house%40sonos.com&avatarId=14103"
},
"displayName": "Allison House",
"active": true
},
{
"self": "https://jira.sonos.com/rest/api/2/user?username=michael.dannemark%40sonos.com",
"name": "michael.dannemark@sonos.com",
"emailAddress": "michael.dannemark@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?avatarId=10122",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&avatarId=10122",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&avatarId=10122",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&avatarId=10122"
},
"displayName": "Michael Dannemark",
"active": true
}
],
"resolutiondate": null,
"workratio": -1,
"lastViewed": null,
"watches": {
"self": "https://jira.sonos.com/rest/api/2/issue/DEVX-5462/watchers",
"watchCount": 2,
"isWatching": false
},
"created": "2015-12-10T09:48:29.000-0500",
"priority": {
"self": "https://jira.sonos.com/rest/api/2/priority/3",
"iconUrl": "https://jira.sonos.com/images/icons/priorities/major.png",
"name": "Major",
"id": "3"
},
"customfield_10100": null,
"customfield_12202": null,
"customfield_10101": null,
"customfield_12600": [
{
"self": "https://jira.sonos.com/rest/api/2/customFieldOption/11300",
"value": "DEVX-Integrations",
"id": "11300"
}
],
"labels": [
"rdio"
],
"customfield_12203": null,
"customfield_11700": "sonos.com",
"customfield_11701": "",
"timeestimate": null,
"aggregatetimeoriginalestimate": null,
"versions": [],
"customfield_11901": "1|i02s32:",
"customfield_11904": null,
"customfield_11903": "Putting all provided languages in the strings file (TBD)\r\nupload strings file to S3\r\nTest with one controller file is available\r\nBump strings and flush cache.\r\nRdio will be pointing to the reaper endpoints and will be configured like a reaper service.",
"issuelinks": [],
"assignee": null,
"updated": "2015-12-10T15:41:24.000-0500",
"status": {
"self": "https://jira.sonos.com/rest/api/2/status/1",
"description": "The issue is open and ready for the assignee to start work on it.",
"iconUrl": "https://jira.sonos.com/images/icons/statuses/open.png",
"name": "Open",
"id": "1",
"statusCategory": {
"self": "https://jira.sonos.com/rest/api/2/statuscategory/2",
"id": 2,
"key": "new",
"colorName": "blue-gray",
"name": "New"
}
},
"components": [],
"timeoriginalestimate": null,
"description": "Rdio - Implement custom error message in the reaper at beats shutdown\r\n\r\nRdio is going to be shutdown as of 12/22. At this time we will need to implement the reaper with the custom error message \"The Rdio service has shut down. Visit rdio.com/farewell for more information, including how to export your collection.\"\r\n\r\nWe are waiting on translations from [~esther.kennes@sonos.com]",
"customfield_13000": null,
"customfield_11500": null,
"customfield_10203": null,
"customfield_10005": null,
"customfield_12700": [],
"customfield_12304": null,
"customfield_10601": null,
"customfield_12901": null,
"customfield_12306": null,
"customfield_12900": null,
"aggregatetimeestimate": null,
"customfield_10408": null,
"summary": "Rdio - Implement custom error message in the reaper at beats shutdown",
"creator": {
"self": "https://jira.sonos.com/rest/api/2/user?username=allison.house%40sonos.com",
"name": "allison.house@sonos.com",
"emailAddress": "allison.house@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=allison.house%40sonos.com&avatarId=14103",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=allison.house%40sonos.com&avatarId=14103",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=allison.house%40sonos.com&avatarId=14103",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=allison.house%40sonos.com&avatarId=14103"
},
"displayName": "Allison House",
"active": true
},
"subtasks": [],
"reporter": {
"self": "https://jira.sonos.com/rest/api/2/user?username=allison.house%40sonos.com",
"name": "allison.house@sonos.com",
"emailAddress": "allison.house@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=allison.house%40sonos.com&avatarId=14103",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=allison.house%40sonos.com&avatarId=14103",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=allison.house%40sonos.com&avatarId=14103",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=allison.house%40sonos.com&avatarId=14103"
},
"displayName": "Allison House",
"active": true
},
"customfield_10000": null,
"aggregateprogress": {
"progress": 0,
"total": 0
},
"customfield_10001": null,
"customfield_10200": null,
"customfield_10002": null,
"customfield_10003": null,
"customfield_10004": "9223372036854775807",
"customfield_12500": null,
"customfield_11403": null,
"customfield_11402": null,
"environment": null,
"customfield_11404": null,
"customfield_11800": null,
"duedate": "2015-12-22",
"progress": {
"progress": 0,
"total": 0
},
"votes": {
"self": "https://jira.sonos.com/rest/api/2/issue/DEVX-5462/votes",
"votes": 0,
"hasVoted": false
}
}
},
{
"expand": "operations,editmeta,changelog,transitions,renderedFields",
"id": "121786",
"self": "https://jira.sonos.com/rest/api/2/issue/121786",
"key": "DEVX-5455",
"fields": {
"issuetype": {
"self": "https://jira.sonos.com/rest/api/2/issuetype/7",
"id": "7",
"description": "A user story",
"iconUrl": "https://jira.sonos.com/images/icons/issuetypes/story.png",
"name": "Story",
"subtask": false
},
"timespent": null,
"customfield_13100": null,
"project": {
"self": "https://jira.sonos.com/rest/api/2/project/13800",
"id": "13800",
"key": "DEVX",
"name": "Developer Experience Backlog",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/projectavatar?pid=13800&avatarId=10009",
"24x24": "https://jira.sonos.com/secure/projectavatar?size=small&pid=13800&avatarId=10009",
"16x16": "https://jira.sonos.com/secure/projectavatar?size=xsmall&pid=13800&avatarId=10009",
"32x32": "https://jira.sonos.com/secure/projectavatar?size=medium&pid=13800&avatarId=10009"
},
"projectCategory": {
"self": "https://jira.sonos.com/rest/api/2/projectCategory/10000",
"id": "10000",
"description": "SW-PD wide backlogs",
"name": "Software Backlogs"
}
},
"customfield_11000": "DEVX-4020",
"customfield_13102": null,
"fixVersions": [
{
"self": "https://jira.sonos.com/rest/api/2/version/23404",
"id": "23404",
"description": "",
"name": "Reverb Milestone 5",
"archived": false,
"released": false,
"releaseDate": "2015-12-25"
}
],
"customfield_11200": null,
"aggregatetimespent": null,
"resolution": null,
"customfield_11401": null,
"customfield_11400": null,
"customfield_12601": null,
"customfield_10503": null,
"customfield_10305": [
{
"self": "https://jira.sonos.com/rest/api/2/user?username=Sherwin.Liu%40sonos.com",
"name": "Sherwin.Liu@sonos.com",
"emailAddress": "Sherwin.Liu@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=sherwin.liu%40sonos.com&avatarId=12113",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=sherwin.liu%40sonos.com&avatarId=12113",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=sherwin.liu%40sonos.com&avatarId=12113",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=sherwin.liu%40sonos.com&avatarId=12113"
},
"displayName": "Sherwin Liu",
"active": true
}
],
"resolutiondate": null,
"workratio": -1,
"lastViewed": null,
"watches": {
"self": "https://jira.sonos.com/rest/api/2/issue/DEVX-5455/watchers",
"watchCount": 1,
"isWatching": false
},
"created": "2015-12-09T15:44:25.000-0500",
"priority": {
"self": "https://jira.sonos.com/rest/api/2/priority/3",
"iconUrl": "https://jira.sonos.com/images/icons/priorities/major.png",
"name": "Major",
"id": "3"
},
"customfield_10100": [
"com.atlassian.greenhopper.service.sprint.Sprint@10bee5b6[rapidViewId=390,state=FUTURE,name=2015 DevContent - Sprint 24,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=1516,id=1516]"
],
"customfield_12202": null,
"customfield_10101": null,
"customfield_12600": [
{
"self": "https://jira.sonos.com/rest/api/2/customFieldOption/11302",
"value": "DEVX-Dev-Content",
"id": "11302"
}
],
"labels": [],
"customfield_12203": null,
"customfield_11700": "sonos.com",
"customfield_11701": "",
"timeestimate": null,
"aggregatetimeoriginalestimate": null,
"versions": [],
"customfield_11901": "1|i027jh:9i",
"customfield_11904": null,
"customfield_11903": "- See testing notes",
"issuelinks": [],
"assignee": null,
"updated": "2015-12-09T17:26:23.000-0500",
"status": {
"self": "https://jira.sonos.com/rest/api/2/status/1",
"description": "The issue is open and ready for the assignee to start work on it.",
"iconUrl": "https://jira.sonos.com/images/icons/statuses/open.png",
"name": "Open",
"id": "1",
"statusCategory": {
"self": "https://jira.sonos.com/rest/api/2/statuscategory/2",
"id": 2,
"key": "new",
"colorName": "blue-gray",
"name": "New"
}
},
"components": [
{
"self": "https://jira.sonos.com/rest/api/2/component/17710",
"id": "17710",
"name": "Sample Apps"
}
],
"timeoriginalestimate": null,
"description": "Following the pattern in the existing namespace javascript files, write the XQuery/Python script and a separate Makefile rule to generate those javascript files from the XML.\r\n\r\nIncludes:\r\n- some investigation on whether to use XQuery or Python\r\n- implement the script and Makefile rule (which should also check out perforce files and add them to a separate changelist)\r\n- remove old namespace files from perforce\r\n- generate the files from XML and check into perforce\r\n- make sure the generated tarball contains the correct files, and the app still works.\r\n\r\nTesting:\r\n- verify that the Makefile rule works to generate new XML files into a pending perforce changelist\r\n- smoke test the JS app\r\n- smoke test the tarball \r\n\r\nScope: Medium. The JS files themselves are not that complex so code-generating them shouldn't be a large task in itself. But there are a few side tasks associated with this story, listed above.",
"customfield_13000": null,
"customfield_11500": null,
"customfield_10203": null,
"customfield_10005": null,
"customfield_12700": [],
"customfield_12304": null,
"customfield_10601": null,
"customfield_12901": null,
"customfield_12306": null,
"customfield_12900": null,
"aggregatetimeestimate": null,
"customfield_10408": null,
"summary": "Levine: generate namespace javascript files from Muse XML",
"creator": {
"self": "https://jira.sonos.com/rest/api/2/user?username=Sherwin.Liu%40sonos.com",
"name": "Sherwin.Liu@sonos.com",
"emailAddress": "Sherwin.Liu@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=sherwin.liu%40sonos.com&avatarId=12113",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=sherwin.liu%40sonos.com&avatarId=12113",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=sherwin.liu%40sonos.com&avatarId=12113",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=sherwin.liu%40sonos.com&avatarId=12113"
},
"displayName": "Sherwin Liu",
"active": true
},
"subtasks": [],
"reporter": {
"self": "https://jira.sonos.com/rest/api/2/user?username=Sherwin.Liu%40sonos.com",
"name": "Sherwin.Liu@sonos.com",
"emailAddress": "Sherwin.Liu@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=sherwin.liu%40sonos.com&avatarId=12113",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=sherwin.liu%40sonos.com&avatarId=12113",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=sherwin.liu%40sonos.com&avatarId=12113",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=sherwin.liu%40sonos.com&avatarId=12113"
},
"displayName": "Sherwin Liu",
"active": true
},
"customfield_10000": null,
"aggregateprogress": {
"progress": 0,
"total": 0
},
"customfield_10001": null,
"customfield_10200": null,
"customfield_10002": null,
"customfield_10003": null,
"customfield_10004": "9223372036854775807",
"customfield_12500": null,
"customfield_11403": null,
"customfield_11402": null,
"environment": null,
"customfield_11404": null,
"customfield_11800": null,
"duedate": null,
"progress": {
"progress": 0,
"total": 0
},
"votes": {
"self": "https://jira.sonos.com/rest/api/2/issue/DEVX-5455/votes",
"votes": 0,
"hasVoted": false
}
}
},
{
"expand": "operations,editmeta,changelog,transitions,renderedFields",
"id": "121783",
"self": "https://jira.sonos.com/rest/api/2/issue/121783",
"key": "DEVX-5454",
"fields": {
"issuetype": {
"self": "https://jira.sonos.com/rest/api/2/issuetype/7",
"id": "7",
"description": "A user story",
"iconUrl": "https://jira.sonos.com/images/icons/issuetypes/story.png",
"name": "Story",
"subtask": false
},
"timespent": null,
"customfield_13100": null,
"project": {
"self": "https://jira.sonos.com/rest/api/2/project/13800",
"id": "13800",
"key": "DEVX",
"name": "Developer Experience Backlog",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/projectavatar?pid=13800&avatarId=10009",
"24x24": "https://jira.sonos.com/secure/projectavatar?size=small&pid=13800&avatarId=10009",
"16x16": "https://jira.sonos.com/secure/projectavatar?size=xsmall&pid=13800&avatarId=10009",
"32x32": "https://jira.sonos.com/secure/projectavatar?size=medium&pid=13800&avatarId=10009"
},
"projectCategory": {
"self": "https://jira.sonos.com/rest/api/2/projectCategory/10000",
"id": "10000",
"description": "SW-PD wide backlogs",
"name": "Software Backlogs"
}
},
"customfield_11000": "DEVX-4020",
"customfield_13102": null,
"fixVersions": [
{
"self": "https://jira.sonos.com/rest/api/2/version/23404",
"id": "23404",
"description": "",
"name": "Reverb Milestone 5",
"archived": false,
"released": false,
"releaseDate": "2015-12-25"
}
],
"customfield_11200": null,
"aggregatetimespent": null,
"resolution": null,
"customfield_11401": null,
"customfield_11400": null,
"customfield_12601": null,
"customfield_10503": null,
"customfield_10305": [
{
"self": "https://jira.sonos.com/rest/api/2/user?username=Adam.DerMarderosian%40sonos.com",
"name": "Adam.DerMarderosian@sonos.com",
"emailAddress": "Adam.DerMarderosian@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708"
},
"displayName": "Adam DerMarderosian",
"active": true
}
],
"resolutiondate": null,
"workratio": -1,
"lastViewed": null,
"watches": {
"self": "https://jira.sonos.com/rest/api/2/issue/DEVX-5454/watchers",
"watchCount": 1,
"isWatching": false
},
"created": "2015-12-09T15:29:46.000-0500",
"priority": {
"self": "https://jira.sonos.com/rest/api/2/priority/3",
"iconUrl": "https://jira.sonos.com/images/icons/priorities/major.png",
"name": "Major",
"id": "3"
},
"customfield_10100": [
"com.atlassian.greenhopper.service.sprint.Sprint@10bee5b6[rapidViewId=390,state=FUTURE,name=2015 DevContent - Sprint 24,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=1516,id=1516]"
],
"customfield_12202": null,
"customfield_10101": null,
"customfield_12600": [
{
"self": "https://jira.sonos.com/rest/api/2/customFieldOption/11302",
"value": "DEVX-Dev-Content",
"id": "11302"
}
],
"labels": [],
"customfield_12203": null,
"customfield_11700": "sonos.com",
"customfield_11701": "",
"timeestimate": null,
"aggregatetimeoriginalestimate": null,
"versions": [],
"customfield_11901": "1|i027jh:9",
"customfield_11904": null,
"customfield_11903": "Jenkins builds the final package.",
"issuelinks": [],
"assignee": null,
"updated": "2015-12-09T17:26:23.000-0500",
"status": {
"self": "https://jira.sonos.com/rest/api/2/status/1",
"description": "The issue is open and ready for the assignee to start work on it.",
"iconUrl": "https://jira.sonos.com/images/icons/statuses/open.png",
"name": "Open",
"id": "1",
"statusCategory": {
"self": "https://jira.sonos.com/rest/api/2/statuscategory/2",
"id": 2,
"key": "new",
"colorName": "blue-gray",
"name": "New"
}
},
"components": [
{
"self": "https://jira.sonos.com/rest/api/2/component/17710",
"id": "17710",
"name": "Sample Apps"
}
],
"timeoriginalestimate": null,
"description": "General preparation tasks for the JS sample app.\r\n\r\nAdd licenses to the files.\r\nAdd a README to the project.\r\nAdd a jenkins job to build it.  Include the version number in the package and also in the tarball filename.\r\n\r\nScope is medium\r\n\r\nTesting is taking package from Jenkins, install it and make sure it works.",
"customfield_13000": null,
"customfield_11500": null,
"customfield_10203": null,
"customfield_10005": null,
"customfield_12700": [],
"customfield_12304": null,
"customfield_10601": null,
"customfield_12901": null,
"customfield_12306": null,
"customfield_12900": null,
"aggregatetimeestimate": null,
"customfield_10408": null,
"summary": "Add jenkins job, readme and code licenses",
"creator": {
"self": "https://jira.sonos.com/rest/api/2/user?username=Adam.DerMarderosian%40sonos.com",
"name": "Adam.DerMarderosian@sonos.com",
"emailAddress": "Adam.DerMarderosian@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708"
},
"displayName": "Adam DerMarderosian",
"active": true
},
"subtasks": [],
"reporter": {
"self": "https://jira.sonos.com/rest/api/2/user?username=Adam.DerMarderosian%40sonos.com",
"name": "Adam.DerMarderosian@sonos.com",
"emailAddress": "Adam.DerMarderosian@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708"
},
"displayName": "Adam DerMarderosian",
"active": true
},
"customfield_10000": null,
"aggregateprogress": {
"progress": 0,
"total": 0
},
"customfield_10001": null,
"customfield_10200": null,
"customfield_10002": null,
"customfield_10003": null,
"customfield_10004": "9223372036854775807",
"customfield_12500": null,
"customfield_11403": null,
"customfield_11402": null,
"environment": null,
"customfield_11404": null,
"customfield_11800": null,
"duedate": null,
"progress": {
"progress": 0,
"total": 0
},
"votes": {
"self": "https://jira.sonos.com/rest/api/2/issue/DEVX-5454/votes",
"votes": 0,
"hasVoted": false
}
}
},
{
"expand": "operations,editmeta,changelog,transitions,renderedFields",
"id": "121779",
"self": "https://jira.sonos.com/rest/api/2/issue/121779",
"key": "DEVX-5453",
"fields": {
"issuetype": {
"self": "https://jira.sonos.com/rest/api/2/issuetype/7",
"id": "7",
"description": "A user story",
"iconUrl": "https://jira.sonos.com/images/icons/issuetypes/story.png",
"name": "Story",
"subtask": false
},
"timespent": null,
"customfield_13100": null,
"project": {
"self": "https://jira.sonos.com/rest/api/2/project/13800",
"id": "13800",
"key": "DEVX",
"name": "Developer Experience Backlog",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/projectavatar?pid=13800&avatarId=10009",
"24x24": "https://jira.sonos.com/secure/projectavatar?size=small&pid=13800&avatarId=10009",
"16x16": "https://jira.sonos.com/secure/projectavatar?size=xsmall&pid=13800&avatarId=10009",
"32x32": "https://jira.sonos.com/secure/projectavatar?size=medium&pid=13800&avatarId=10009"
},
"projectCategory": {
"self": "https://jira.sonos.com/rest/api/2/projectCategory/10000",
"id": "10000",
"description": "SW-PD wide backlogs",
"name": "Software Backlogs"
}
},
"customfield_11000": "DEVX-4020",
"customfield_13102": null,
"fixVersions": [],
"customfield_11200": null,
"aggregatetimespent": null,
"resolution": null,
"customfield_11401": null,
"customfield_11400": null,
"customfield_12601": null,
"customfield_10503": null,
"customfield_10305": [
{
"self": "https://jira.sonos.com/rest/api/2/user?username=Adam.DerMarderosian%40sonos.com",
"name": "Adam.DerMarderosian@sonos.com",
"emailAddress": "Adam.DerMarderosian@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708"
},
"displayName": "Adam DerMarderosian",
"active": true
}
],
"resolutiondate": null,
"workratio": -1,
"lastViewed": null,
"watches": {
"self": "https://jira.sonos.com/rest/api/2/issue/DEVX-5453/watchers",
"watchCount": 1,
"isWatching": false
},
"created": "2015-12-09T15:12:44.000-0500",
"priority": {
"self": "https://jira.sonos.com/rest/api/2/priority/3",
"iconUrl": "https://jira.sonos.com/images/icons/priorities/major.png",
"name": "Major",
"id": "3"
},
"customfield_10100": null,
"customfield_12202": null,
"customfield_10101": null,
"customfield_12600": [
{
"self": "https://jira.sonos.com/rest/api/2/customFieldOption/11302",
"value": "DEVX-Dev-Content",
"id": "11302"
}
],
"labels": [],
"customfield_12203": null,
"customfield_11700": "sonos.com",
"customfield_11701": "",
"timeestimate": null,
"aggregatetimeoriginalestimate": null,
"versions": [],
"customfield_11901": "1|i02rbq:",
"customfield_11904": null,
"customfield_11903": "Volume slider behavior improved and works well.",
"issuelinks": [],
"assignee": null,
"updated": "2015-12-09T15:12:44.000-0500",
"status": {
"self": "https://jira.sonos.com/rest/api/2/status/1",
"description": "The issue is open and ready for the assignee to start work on it.",
"iconUrl": "https://jira.sonos.com/images/icons/statuses/open.png",
"name": "Open",
"id": "1",
"statusCategory": {
"self": "https://jira.sonos.com/rest/api/2/statuscategory/2",
"id": 2,
"key": "new",
"colorName": "blue-gray",
"name": "New"
}
},
"components": [
{
"self": "https://jira.sonos.com/rest/api/2/component/17710",
"id": "17710",
"name": "Sample Apps"
}
],
"timeoriginalestimate": null,
"description": "Levine, the JS app has jitters in its volume slider and sometimes will bounce around after release.  We need to implement some of the standard strategies to make it work better.  Implement them one at a time and see what is the minimum to make it function well.\r\n\r\n- throttle the volume messages created by the slider\r\n- buffer the events coming from the player\r\n- ignore events from the player during dragging\r\n\r\nScope\r\nsmall to medium depending on how well the strategies work.  Could balloon some if the changes need to be made inside the volume slider.\r\n\r\nTesting\r\n- Test the slider on the page to see responsiveness and look for jitters and post release jumping around.\r\n- Test changing the volume from two different controllers at the same time",
"customfield_13000": null,
"customfield_11500": null,
"customfield_10203": null,
"customfield_10005": null,
"customfield_12700": [],
"customfield_12304": null,
"customfield_10601": null,
"customfield_12901": null,
"customfield_12306": null,
"customfield_12900": null,
"aggregatetimeestimate": null,
"customfield_10408": null,
"summary": "Improve slider control behavior",
"creator": {
"self": "https://jira.sonos.com/rest/api/2/user?username=Adam.DerMarderosian%40sonos.com",
"name": "Adam.DerMarderosian@sonos.com",
"emailAddress": "Adam.DerMarderosian@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708"
},
"displayName": "Adam DerMarderosian",
"active": true
},
"subtasks": [],
"reporter": {
"self": "https://jira.sonos.com/rest/api/2/user?username=Adam.DerMarderosian%40sonos.com",
"name": "Adam.DerMarderosian@sonos.com",
"emailAddress": "Adam.DerMarderosian@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=adam.dermarderosian%40sonos.com&avatarId=14708"
},
"displayName": "Adam DerMarderosian",
"active": true
},
"customfield_10000": null,
"aggregateprogress": {
"progress": 0,
"total": 0
},
"customfield_10001": null,
"customfield_10200": null,
"customfield_10002": null,
"customfield_10003": null,
"customfield_10004": "9223372036854775807",
"customfield_12500": null,
"customfield_11403": null,
"customfield_11402": null,
"environment": null,
"customfield_11404": null,
"customfield_11800": null,
"duedate": null,
"progress": {
"progress": 0,
"total": 0
},
"votes": {
"self": "https://jira.sonos.com/rest/api/2/issue/DEVX-5453/votes",
"votes": 0,
"hasVoted": false
}
}
},
{
"expand": "operations,editmeta,changelog,transitions,renderedFields",
"id": "121746",
"self": "https://jira.sonos.com/rest/api/2/issue/121746",
"key": "DEVX-5449",
"fields": {
"issuetype": {
"self": "https://jira.sonos.com/rest/api/2/issuetype/7",
"id": "7",
"description": "A user story",
"iconUrl": "https://jira.sonos.com/images/icons/issuetypes/story.png",
"name": "Story",
"subtask": false
},
"timespent": null,
"customfield_13100": null,
"project": {
"self": "https://jira.sonos.com/rest/api/2/project/13800",
"id": "13800",
"key": "DEVX",
"name": "Developer Experience Backlog",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/projectavatar?pid=13800&avatarId=10009",
"24x24": "https://jira.sonos.com/secure/projectavatar?size=small&pid=13800&avatarId=10009",
"16x16": "https://jira.sonos.com/secure/projectavatar?size=xsmall&pid=13800&avatarId=10009",
"32x32": "https://jira.sonos.com/secure/projectavatar?size=medium&pid=13800&avatarId=10009"
},
"projectCategory": {
"self": "https://jira.sonos.com/rest/api/2/projectCategory/10000",
"id": "10000",
"description": "SW-PD wide backlogs",
"name": "Software Backlogs"
}
},
"customfield_11000": null,
"customfield_13102": null,
"fixVersions": [
{
"self": "https://jira.sonos.com/rest/api/2/version/22768",
"id": "22768",
"name": "PBL - SMAPI Self-Test",
"archived": false,
"released": false
}
],
"customfield_11200": null,
"aggregatetimespent": null,
"resolution": null,
"customfield_11401": null,
"customfield_11400": null,
"customfield_12601": null,
"customfield_10503": null,
"customfield_10305": [
{
"self": "https://jira.sonos.com/rest/api/2/user?username=Ron.Kuper%40sonos.com",
"name": "Ron.Kuper@sonos.com",
"emailAddress": "Ron.Kuper@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=ron.kuper%40sonos.com&avatarId=10900",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=ron.kuper%40sonos.com&avatarId=10900",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=ron.kuper%40sonos.com&avatarId=10900",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=ron.kuper%40sonos.com&avatarId=10900"
},
"displayName": "Ron Kuper",
"active": true
}
],
"resolutiondate": null,
"workratio": -1,
"lastViewed": null,
"watches": {
"self": "https://jira.sonos.com/rest/api/2/issue/DEVX-5449/watchers",
"watchCount": 1,
"isWatching": false
},
"created": "2015-12-09T12:39:08.000-0500",
"priority": {
"self": "https://jira.sonos.com/rest/api/2/priority/3",
"iconUrl": "https://jira.sonos.com/images/icons/priorities/major.png",
"name": "Major",
"id": "3"
},
"customfield_10100": [
"com.atlassian.greenhopper.service.sprint.Sprint@10bee5b6[rapidViewId=390,state=FUTURE,name=2015 DevContent - Sprint 24,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=1516,id=1516]"
],
"customfield_12202": null,
"customfield_10101": null,
"customfield_12600": [
{
"self": "https://jira.sonos.com/rest/api/2/customFieldOption/11302",
"value": "DEVX-Dev-Content",
"id": "11302"
}
],
"labels": [],
"customfield_12203": null,
"customfield_11700": "sonos.com",
"customfield_11701": "",
"timeestimate": null,
"aggregatetimeoriginalestimate": null,
"versions": [
{
"self": "https://jira.sonos.com/rest/api/2/version/22768",
"id": "22768",
"name": "PBL - SMAPI Self-Test",
"archived": false,
"released": false
}
],
"customfield_11901": "1|hzlasy:m",
"customfield_11904": null,
"customfield_11903": null,
"issuelinks": [],
"assignee": null,
"updated": "2015-12-09T12:54:02.000-0500",
"status": {
"self": "https://jira.sonos.com/rest/api/2/status/1",
"description": "The issue is open and ready for the assignee to start work on it.",
"iconUrl": "https://jira.sonos.com/images/icons/statuses/open.png",
"name": "Open",
"id": "1",
"statusCategory": {
"self": "https://jira.sonos.com/rest/api/2/statuscategory/2",
"id": 2,
"key": "new",
"colorName": "blue-gray",
"name": "New"
}
},
"components": [
{
"self": "https://jira.sonos.com/rest/api/2/component/17455",
"id": "17455",
"name": "SMAPI Partner Self-Test"
}
],
"timeoriginalestimate": null,
"description": "As part of our goal to get nightly Jenkins tests at a base-line of zero bugs, we discovered that our test for expiring SSL certs starts to fail if the cert is within 90 days of expiration. This is probably too aggressive, especially since [~allison.house@sonos.com] doesn't reach out to partners until the cert is within 30 days of expiration. To clean up the noise in the nightly test, and make this failure something that is clearly actionable by our Dev Advocates, we should change the test to complain at 30 days rather than 90.\r\n\r\nScope of work:\r\nssl_validation.py file needs the change \r\nfrom 0 < delta.days <= 90 to 0 < delta.days <= 30 (line 349)\r\n\r\n",
"customfield_13000": null,
"customfield_11500": null,
"customfield_10203": null,
"customfield_10005": null,
"customfield_12700": [],
"customfield_12304": null,
"customfield_10601": null,
"customfield_12901": null,
"customfield_12306": null,
"customfield_12900": null,
"aggregatetimeestimate": null,
"customfield_10408": null,
"summary": "DEVX content SSL certificate test should complain if we're 30 days away from expiration rather than 90",
"creator": {
"self": "https://jira.sonos.com/rest/api/2/user?username=Ron.Kuper%40sonos.com",
"name": "Ron.Kuper@sonos.com",
"emailAddress": "Ron.Kuper@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=ron.kuper%40sonos.com&avatarId=10900",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=ron.kuper%40sonos.com&avatarId=10900",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=ron.kuper%40sonos.com&avatarId=10900",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=ron.kuper%40sonos.com&avatarId=10900"
},
"displayName": "Ron Kuper",
"active": true
},
"subtasks": [],
"reporter": {
"self": "https://jira.sonos.com/rest/api/2/user?username=Ron.Kuper%40sonos.com",
"name": "Ron.Kuper@sonos.com",
"emailAddress": "Ron.Kuper@sonos.com",
"avatarUrls": {
"48x48": "https://jira.sonos.com/secure/useravatar?ownerId=ron.kuper%40sonos.com&avatarId=10900",
"24x24": "https://jira.sonos.com/secure/useravatar?size=small&ownerId=ron.kuper%40sonos.com&avatarId=10900",
"16x16": "https://jira.sonos.com/secure/useravatar?size=xsmall&ownerId=ron.kuper%40sonos.com&avatarId=10900",
"32x32": "https://jira.sonos.com/secure/useravatar?size=medium&ownerId=ron.kuper%40sonos.com&avatarId=10900"
},
"displayName": "Ron Kuper",
"active": true
},
"customfield_10000": null,
"aggregateprogress": {
"progress": 0,
"total": 0
},
"customfield_10001": null,
"customfield_10200": null,
"customfield_10002": null,
"customfield_10003": null,
"customfield_10004": "9223372036854775807",
"customfield_12500": null,
"customfield_11403": null,
"customfield_11402": null,
"environment": null,
"customfield_11404": null,
"customfield_11800": null,
"duedate": null,
"progress": {
"progress": 0,
"total": 0
},
"votes": {
"self": "https://jira.sonos.com/rest/api/2/issue/DEVX-5449/votes",
"votes": 0,
"hasVoted": false
}
}
}
]
}