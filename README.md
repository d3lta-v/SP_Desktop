# SP Desktop (Chrome Edition)
SP Desktop (Chrome Edition) is designed to be a simple, lean and mean piece of software that embeds directly into Chrome and acts as a "mission control" for SP students to use. 

When someone mentions "mission control", massive projectors and data screens spring to mind. A mission control is a place where data needs to be localised and at the same time highly relevant and useful to the operator. This Chrome Extension was made with this philosophy in mind.

## Caveats
Before we go any further, it is imperative to highlight the shortcomings of this application such that the end user is fully aware of what it can and cannot do.

* ATS state detection is NOT functional
* The username and password are stored locally in Chrome to facilitate automatic ATS login (in the same way the SP app does it)
* Loads every time the popup is clicked. While every load cycle incurs <10kb of data transfer, with every effort to slim down the payload, this is still seen as a deficiency waiting to be patched in a newer release
* No automatic reload if connection fails. You may have to reopen the popup to reload contents

A **VERY** critical deficit of this application is the fact that it relies on an reverse engineered API, which may be subject to change at any time. Please open an issue with this GitHub repo with the Issues tab if you find any of the features not behaving norminally. Future upgrades to this extension includes an API endpoint self test, but due to time constraints, this will not be implemented in version 1.0.

## Features/Plus Points
Now, with the caveats of this extension out of the way, let's talk about its major plus points:

* Lightweight: with the most bare bones CSS and HTML code possible with no bulky frameworks like React or Angular, the entire extension is extremely lightweight
* Did I say lightweight?: With every data transfer being less than 10kb, this app aims to be a responsible citizen of the school network by avoiding excessive data transfer as much as possible
* Easy on the eyes: "Functional Design" is a key part of this app. The entire application is kept minimalistic, stripped of all distraction. Just like how a mission control should be

## Features/Implementation

* Real time 24-hour clock
* SP Wi-Fi connectivity detection (includes Internet connectivity test)
* Current Lesson indicator
* Current school period/special event indicator
* Automatic ATS login button (log into ATS without a password)

## Planned features
Just a scratchpad here to help in guiding newborn features:

### Technical

* Automated rekeying when old login token expires
* Reduction of load time by aborting larger HTTP responses
* Telemetry for error tracking of API changes
* API endpoint self-test

### Feature set

* Crowd watch
* Timetable listing for the next 5 days
* Exam listing
* Upcoming exam in home view
* Upcoming lesson in home view
* MIKE-SP clone

## Contributing
Anybody is welcome to contribute to this repository! But first, let's talk environments so that you, the aspiring developer, know what's going on:

### Environment

* Original OS environment: macOS High Sierra
* Text Editor/IDE: Visual Studio Code with TypeScript support
* Line endings: LF
* Language: TypeScript 2.9.2
* Build environment: Node/NPM with webpack
* Initial setup: `node install` in the terminal

### Folder structure:

* `src/`: Source files in TypeScript
* `dist/`: Unpacked version of the Chrome extension, all HTML and CSS goes here and you should edit those files direct in here
* `.vscode/`: Visual Studio Code specific settings
* `webpack/`: Webpack compilation settings
