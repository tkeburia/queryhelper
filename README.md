# queryhelper

A Chrome extension to quickly navigate between JIRA JQL queries. 

# Usage and Build

This extension is not published, it needs to be manually installed to be used. 

To pack the extension, the easiest way is to go to chrome://extensions , enable developer mode and click `pack extension...`, then provide a path to the root directory of the project. This will build a .crx file which can be dragged into chrome://extensions to install it. 

To start using the tool, a configuration needs to be created first, this is done by importing a json file into the options window of the extension. 

A sample json looks like this: 
```
{
  "baseUrl": "https://my.jira.instance",
  "filters": [
    {
		"key": "user1",
      	"value": "status not in (Done, "Won't do")  AND (reporter = user1)"
    },
    {
		"key": "user2",
  		"value": "resolution in (Duplicate, Done)  AND (assignee = user2)"
    }
  ]
}
```

This gives the ability to have different queries for different people. 

After the config is imported the extension popup will list all keys (users) from the json, and clicking on them will result in being redirected to the page with the corresponding filter applied. 
