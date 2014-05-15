Geopollinator
=============

##Introduction
**Geopollinator** is a web based application that will help teach Geopolitics students the countries that they need to learn. This program will ease the pain that is learning random geographical facts. The program will be tailored to include only the countries that will be found on the Geopolitics. This design spec will provide more detailed information on:
Client side programming language
Data storage requirements and tool choices
3rd Party Data
Software test strategy
Bug tracking strategy
Software deployment instructions

##Client Side Programming Language
The languages we are working with are HTML, CSS, and Javascript. These will all be run on the client’s web browser. The server we are running off of does not require the client to store data or otherwise communicate with the user. So the only requirements are that the client’s web browser can understand javascript, HTML, and CSS.

##Data Storage Requirements
We are planning on having the program have an option to save custom country study lists as cookies on the user’s browsers. Since this is not an extremely important tool it’s okay if the user does not always have access to their lists.

##3rd Party Data
We used data from a site call Raphiel’s script, this is a javascript format file which uses another 3rd party set of data called kinetic. Combined these give us baseline code in javascript that we can use to achieve tasks. kinetic script allows us to interact with vectors and those make selectable figures that do not lose their edges. We are modifying these resources so that they fit our program specifically. For use, the script is missing several countries, and we plan on adding these to the script.

##Software Test Strategy
We will have humans do the testing. They will be testing general functionality, does the thing work, do you understand how to use it. Testing interface. Random combinations. What does it take for you to break it. Questions like that. We will establish contact with them constantly, to see if there are any impending issues that need fixing. And there will be a contact for bugs so that if there is a bug or issue, they can contact and inform us of the problem, and how they came upon it. Then we will attempt to fix the issue, and test it for how they ran into the problem.

##Bug Tracking Strategy
Javascript is not able to be debugged in eclipse so in order to test the debugging capabilities of the program we are going to have to use google chrome to debug the software.

##Software Deployment Instructions
We are going to place the software on hhscp.com. This will allow us to get it out to the general public so long as they have the link to the website. The files from our Geopollinator account will simply be the .css .html and .js files, the DS and FS are for our fictional employer and are only necessary for the class, not the general public so they will not be included. We will set up a deployment account on github.
