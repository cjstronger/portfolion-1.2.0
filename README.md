# portfolion 1.2.0
 New portfolio commit made for easier access from github.
 April 5 - added fade in fade out for the navbar with querySelector addClassList() and removeClassList(). Improved the entrance of the page as well, adding a bigger margin to the name and bio/link elements.
April 6 - Changed the navbar to fade in when the scroll hits the bottom. Moved the 'me' to the right side of the flex with margin auto declared in the item itself. Added a scale to the nav buttons. Added more personality to the bio, need to adjust the way it animates in by making a new p element below and start the animation after a timer or figure how to have the border position down a line. Adjusted the size of the bio/home page to fit the screen.
April 7 - Changed the typing elements to come in with the additions of my past careers then backspace out, expressing that I have moved onto software development. Tried adding an effect that would enable the setTimeout function to stop when hovering and start when not but the result has had a load of typeErrors. The setTimeout function works nicely when the pauseTimeout doesn't do a thing. I'll figure it out tomorrow.
April 8 - Spent the whole day on the function and got nowhere, even made a post on stack overflow and my post was closed as it was a duplicate of another post. The post did seem to have the same issue but after trying all the resolutions and getting nowhere I'm gonna move on. I've spent so much time on this and I'm starting to think I'm going to have to use a library for this effect. I tried changing the timeout functions with the jquery library but to no avail, also tried seeing if the DOM was loaded with an event listener before removing the class but that also didn't work. So that was a colossal waste of time, but I put in a smooth scroll library from lenis. It's beautiful and something I was trying to incorporate with another library. So maybe I'll find something or get a resolution to this problem later.
April 9 - Not much done today, had other life things that were taking precedence. I managed to add an animation on load which reveals my name first then opens up to the page. Tomorrow I should have an animation for the loading screen. Also added some color, I thought the gray for the buttons looked trash from the start and knew I was gonna change it, but I didn't know I'd find this color. Love it!
April 10 - Changed the loading animation to open over my name for a second before opening to the rest of the page. Changed the projects on the page to three that take up the width of the page as having ten projects to view as a potential higheree would be overwhelming. Changed all animated objects to load in after the page loader animation finishes. Experimenting with more colors on the page. Probably gonna stick with a three color page.
April 11 - Changed the name to a more stylish SVG to allow the tracing style. Tried everything in my power to convert the fill to stroke so I could animate it with a draw effect but nothing wanted to work today. Tried illustrators tracing feature and that was grayed out, I'll figure it out. Added the sussy S to the top of the page and the last name. I'd like to encorporate it into the loading animation, it's very different from the fonts but it resonates with everyone so I gotta make it work.
April 12 - spent all day gettingt the first name animated in. Tried getting it to work with just HTML, JS and CSS but that wasn't working. Then found out about AE and bodymovin, was able to animate the first name but stroke paths didn't work with BM so I had to switch to mask shape layers to make the draw effect. Then AE crashed on me after I fininshed and tried exporting with BM. Finally finished at 11:50 pm! Looks so fucking good, I'm in love. Gonna work on last name tomorrow, should be a ten minute ordeal.
April 13 - Added last name animation and got the page to have all the right animations and margins display at the right time. Using body movement is so easy to start and stop animations when you want. So far loving the tie in with AE and coding. Worked a lot on a super/stussy S for the loading animation today, figuring out where I wanted to go with it and adding styling to it. Eventually I want to go 3D but for now I'm gonna stick with 2D AE as its easier to use with lottie/bm.
April 15 - Added gsap and scrollTrigger to get some livelyness in the page, looking at getting the contact page really cleaned up soon. Worked all day on the loading animation in AE so not much time spent coding unfortunately.
April 16 - Added the finished loading animation to the screen and made the load compatible for small screens. Some complications with the json's as the way the pixels are drawn for it and the margins are made is from the original file so really had to adjust with some wild margins to get it in the right spot for both mobile and desktop displays. Will have to adjust for window sizing between those two. I wanna have a better transition for the log to the name, but I'll get that down later. I'm spending too much time on the looks of this and not the overall function.
April 17 - Updated the contact section with a better vibe, working on a hover detail to have a square grow and shift between the li elements. Deleted the typing effect of the bio, instead have a box for an about me. Not finished with the details on that. Adjusted a lot for mobile as well. Reanimated the name to be together, easier movement with the elements.
April 18 - Added animation for the contact elements, while adding a p element on the right. Had to change the elements from li's to a's for links as well easier configuration with grids. Also added actual links back to the contact me elements. Added a pinning for the scroll trigger on the project tiles to enable a better, smoother animation.. still working on the finishing touches.
April 21 - Guess I didn't have time on the 19th for an update, I did a load yesterday but forgot to upload before the day ended. But I finished with the portfolio for now. There's still plenty to be tweaked and animations to dumb down, like the loading animation(s). Added the finishing scroll trigger animations for the contact sections that I wanted and invisioned when I first started. Customized a few that were a little jumpy, but for now thats what I'm rolling with. Gotta start on actual projects to fill the projects section. Next will be a site for my sisters brand she's building, using next.js, stripe, and react to get the full-stack experience in.