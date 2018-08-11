# SP Desktop (Chrome Edition)
SP Desktop (Chrome Edition) is a simple, lean and mean piece of software that embeds directly into Chrome and acts as a "mission control" for SP students to use. 

When someone mentions "mission control", massive projectors and data screens spring to mind. A mission control is a place where data needs to be localised and at the same time highly relevant and useful to the operator. This Chrome Extension was made with this philosophy in mind.

## Caveats
Before we go any further, it is imperative to highlight the shortcomings of this application such that the end user is fully aware of what it can and cannot do.

* ATS state detection is NOT functional
* The username and password are stored locally in Chrome to facilitate automatic ATS login (in the same way the SP app does it)
* Loads every time the popup is clicked. While every load cycle incurs >10kb of data transfer, with every effort to slim down the payload, this is still seen as a deficiency waiting to be patched in a newer release
* No automatic reload if connection fails. You may have to reopen the popup to reload contents

A **VERY** critical deficit of this application is the fact that it relies on an reverse engineered API, which may be subject to change at any time. Please open an issue with this GitHub repo with the Issues tab if you find any of the features not behaving norminally. Future upgrades to this extension includes an API endpoint self test, but due to time constraints, this will not be implemented in version 1.0.

## Features
Now, with the caveats of this extension out of the way, let's talk about its major plus points:

* Lightweight: with the most bare bones CSS and HTML code possible with no bulky frameworks like React or Angular, the entire extension is extremely lightweight
* Did I say lightweight?: With every data transfer being less than 10kb, this app aims to be a responsible citizen of the school network by avoiding excessive data transfer as much as possible
* Easy on the eyes: "Functional Design" is a key part of this app. The entire application is kept minimalistic, stripped of all distraction. Just like how a mission control should be
* Completely automated ATS login. Save time by not having to log in every time you need to key in your ATS code