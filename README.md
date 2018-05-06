# Project Overview

This project uses Jasmin 2.1.2 for testing.

## Instructions

- Clone repo.
- Run index.html in the browser.
- Enjoy tests results ;-) displayed as a part of the page.

## Tests

- **Suite 'RSS Feeds'** - This suite is all about the RSS feeds definitions, the allFeeds variable in our application.
  - **Spec 'feeds are defined'** - Tests to make sure that the allFeeds variable has been defined and that it is not empty.
  - **Spec 'feed has not empty URL'** - Tests each feed in the allFeeds object and ensures it has a URL defined, and that the URL is a string and is not empty.
  - **Spec 'feed has not empty name'** - Tests each feed in the allFeeds object and ensures it has a name defined, and that the name is a string and is not empty.

- **Suite 'The menu'** - This suite is about testing the menu.
  - **Spec 'menu is hidden'** - Tests that ensures the menu element is hidden by default.
  - **Spec 'the menu visibility changes'** - Test that ensures the menu changes visibility when the menu icon is clicked.

- **Suite 'Initial Entries'** - This suite is about loading initial entries.
  - **Spec '.feed should have at least a single entry'** - It ensures that when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

- **Suite 'New Feed Selection'** - This suite is about changingc content.
  - **Spec '.feed content changes when new feed is loaded'** - It ensures that when a new feed is loadedby the loadFeed function that the content actually changes.


