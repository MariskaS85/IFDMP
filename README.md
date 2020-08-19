[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/MariskaS85/IFDMP)

# IFDMP

UX

Goals

The Hidden Hermit is a puzzel game in Dutch (“zoekplaatje” which would translate to Search Image). As the name states, you have to find the hidden hermit crab. The game is the second Milestone project and focuses on User Interaction with the use of HTML, CSS and JavaScript.

The gameplay should instantly be clear for the user, without any further explanation. The illogical placement of the first Hermit should make it alluring to click on. With a decrease in size of 0.9 the decreasing size should make it easy in the beginning to find the hermit, with a steep decrease after around 15 clicks, and make it almost impossible to find near 30. I have chosen nog to add a timer, since life is stressful already without a timer. 

Design

Since life is stressful enough and Corona has us staying at home, we might as well take our time and look for something on a beach. So, the general vibe should be a bit relaxed while focussing on a in-size-decreasing hermit crab. 

Area
The whole screen is picked to be the game area, this is done to make full use of the available search area. Even behind the text it is possible to click/find Herm. 

Colors
The colours used are based on beach colours, where Herm should blend in the background and the whole feeling should be calming. This to add up to the relaxed and non-time limited gameplay.

Font
The font was chosen from Google Font to be good for screen purposes and to look a bit playful.

Wireframe
The wireframe created using Balsamiq mainly consisted of a full screen beach with in the left upper corner a menu button, the left lower corner the level and the right lower corner the score.

Features
The main feature of the game is the clickable Hermit Crab. After trying to implement the features using a button I decided that changing it to a <div> would give it more flexibility in functions.

Testing
The main testing was done on the gitpod workspace. After this the game as released in gitpod to be able to test in on mobile versions. I first encountered some bugs regarding the background. After adjustment this was cleared and the overall gameplay was similar to bigger as to smaller devices. 

JSHint
There are 4 functions in this file.
Function with the largest signature take 0 arguments, while the median is 0.
Largest function has 3 statements in it, while the median is 2.
The most complex function has a cyclomatic complexity value of 7 while the median is 1.

Deployment
This website was made using Gitpod and hosted using Github. Not all changes were saved after editing. This because some changes were still in testing fase were saved on Gitpod self in addition the changes were rapidly follow, so saving all changes would cause a delay.

Tech used
GitHub
GitPod
HTML
CSS
JavaScript
JQuery
GoogleFonts
Fiddle
JSHint
W3schools
Balsamiq
Css-tricks
Codepen
Stackoverflow
Html.am
Code Institute JavaScript course info

Content
All visible text was written by me. Code was taken for several sources, see bottom of the page

Background Image and Herm the Hermit Image were provided by Missing Dinosaur.

Special thanks to the tutors from Code Institute for providing Feedback, even in the middle of the night.
Collin van Ginkel from Missing Dinosaur
Davine Munch for asking if my features were implemented already.

Find the Hidden Hermit
(Text written upfront)
As the name suggest, you must find the Hidden hermit. This is an interactive game for the Company Missing Dinosaur.
The first 10 times the Hermit will be width = 50px 
Backend: The hidden hermit is a button. 

-	This button will disappear once clicked on and will appear on a random other location. 
-	The Hermit will decreas in size with 0.9 after every click

Things to make:
	Make a button appear like a Hermit
	Hide the Button once clicked
	Loop the appearance of the button
	If Clicked make a different button appear somewhere else
	Every time the button is clicked ++ the count 
	If count == 10 decrease size of button


For the full size image background:
https://css-tricks.com/perfect-full-page-background-image/

Navigation overlay:
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay

Change location of Hermit
http://jsfiddle.net/MythOfEchelon/uPN9E/1/

move on click:
http://jsfiddle.net/5mvKE/

Click Counter:
https://codepen.io/juliogcampos/pen/BzdjwY

Scrolling text in About:
https://www.html.am/html-codes/marquees/css-scrolling-text.cfm

Click counter:
https://codepen.io/brood915/pen/vKWvmB?editors=1010

Highscore:
https://stackoverflow.com/questions/29370017/adding-a-high-score-to-local-storage