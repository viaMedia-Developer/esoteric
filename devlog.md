###### Commit Entry 
{
	Date: 10.17.17
	Commit: 5th Commit
	Project Version: v0 Uncompleted
}

+ JS code organized
+ Fixed issue with headerInfo being changed on section change
+ After page section is selected from landing section, the chosen section is remembered upon page reload. 


###### Dev Notes @ 10.15.17
+ Need to hurry up and organize JS code: things are in abit of dissarray causing the file to be difficult to peruse.
+ Finished up with the Landing Section
	- Navigation links on the section work as intended
	- After selecting a link, choice is remembered upon page reload and landing section DOESN'T load.
+ Need to fix issue with header info being changed for the first time 
+ When hovering over social media links in navigation menu, show full name of sc site underneath box
+ After link is selected from Landing Section: make sure section currently being viewed is the one that appears upon page reload. 
	- Works for the most part. There's currently an issue with how 'current' variable is being set

###### Dev Notes @ 10.11.17 
+ Finished implementing landing section
+ set up :before element for #logoSide so that onpageload animation can be 
done with it
+ Need to work on way to ensure that once an option is selected from the landing page for which section to go to, that upon page reload, that section is one that appears: instead of the landing section reappearing.
	- May most likely require use of cookie


###### Dev Notes @ 10.10.17 
+ Move all variables, consts and arrays to top of JS file during organization


###### Commit Entry 
{
	Date: 10.9.17
	Commit: 4th Commit
	Project Version: v0 Uncompleted 
}

+ Decided to go with the mainHeader's click to switch for both mobile and desktop
+ All main sections Desktop site designs and functionality completed

###### Commit Entry
{
	Date: 10.6.17
	Commit: 3rd Commit
	Project Version: v0 Uncompleted
}

+ Since last commit, development for Introduction, Aspirations, Experiences and Recollection sections has been completed (minus implementing queries and design for mobile)
+ Nothing in Dev Notes has been done yet: saving for later, after main development is completed


###### Commit Entry
{
	Date: 10.3.17
	Commit: 2nd Commit
	Project Version: v0 Uncompleted
}

+ So far, Introduction and Aspiration Sections have been built. 
	- As of now, layouts for those sections have not been given queries for mobile
+ Currently working on Experiences section
	- Addition of elements and their styling has been completed 
+ (toDo) Build and implement functionality for loading stories upon their selection

###### Dev Notes
+ Limit section's .mainWrapper max width
+ Decide whether I wish to keep mainHeader's click and timeout as opposed to hover at desktop widths


###### Commit Entry
{
	Date: 9.30.17
	Commit: Initial Commit
	Project Version: v0 Uncompleted
}

+ Main functionalities for header, icon buttons and main navigation menu working as intended
+ Introduction section built and completed

###### Dev Notes
+ Navigation overlay needs to be adjusted for mobile widths
+ Upon having navi overlay open, scrolling needs to be disabled.