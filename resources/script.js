/*______________________________________________________________________

	All ***Constant Elements*** for Entire File / Project
________________________________________________________________________
*/
var landing = document.getElementById('landing'),
    sectionsMainWrapper = document.getElementById('wrapper'),
    logoSide = document.querySelector('#landing .logoSide'),
    landingLinks = document.querySelectorAll('#landing ul.nav li'),
    // landingLinks_info = document.querySelectorAll('#landing ul.nav li p .info'),
    sections = document.getElementsByClassName('main'),
    nextSection = document.querySelectorAll('#iconList li svg')[1],
    prevSection = document.querySelectorAll('#iconList li svg')[0],
    header = document.getElementById('mainHeader_overlay'),
    headerH1 = document.querySelector('#mainHeader h1'),
    headerText = document.getElementById('headerText'),
    controls = document.getElementById('controls'),
    overlay = document.getElementById('overlay'),
    openNav = document.getElementById('openNav'),
    closeNav = document.getElementById('closeNav'),
    navlinks = document.querySelectorAll('#menuList li a'),
    moveLeft = document.querySelectorAll('.moveLeft'),
    scmLinks = document.querySelectorAll('#scmList li a'),
    slides = document.getElementById('slides'),
    fade = document.getElementById('fade'),
    slideHeader = document.querySelector('.infoWrapper h1'),
    slideDescription = document.querySelector('.infoWrapper p'),
    tellerWrapper = document.getElementsByClassName('tellerWrapper')[0],
    currentSlide = document.getElementById('current'),
    prevSlide = document.querySelector('#slides #left'),
    nextSlide = document.querySelector('#slides #right'),
    mainWrapper = document.getElementsByClassName('mainWrapper')[0],
    story = document.getElementsByClassName('story')[0],
    storyNumber = document.querySelector('.aboutStory h1 #number'),
    storyHeader = document.querySelector('.aboutStory h1 #title'),
    storyAbout = document.querySelector('.aboutStory p'),
    exitStory = document.querySelector('.aboutStory #exit'),
    anExp = document.querySelectorAll('.anExp'),
    exploreStory_buttons = document.querySelectorAll('.anExp button'),
    upNdown = document.getElementById('upNdown'),
    arrowUp = document.querySelectorAll('#upNdown #arrowUp path')[1],
    arrowDown = document.querySelector('#upNdown #arrowDown path'),
    entries = document.querySelector('#recollections #entries'),
    entryWrapper = document.getElementById('entryWrapper'),
    entryHeader = document.querySelectorAll('.entry h1'),
    entryDate = document.querySelectorAll('.entry h3'),
    articleBody = document.querySelector('#recollections article'),
    articleWrapper = document.getElementById('mainArticle_wrapper'),
    articleTitle = document.querySelector('#recollections article h1'),
    articleDate = document.querySelector('#recollections article h3'),
    launchEntry = document.querySelectorAll('#recollections .entry .peruseEntry'),
    closeArticle = document.querySelector('#controls #close svg'),
    toggleMenu = document.querySelector('#controls #toggleMenu svg'),
    articleMenu = document.querySelector('#recollections article #menu'),
    closeMenu = document.querySelector('#menu #closeMenu'),
    inputs = document.querySelectorAll('#connections form .input'),
    message = document.querySelector('#connections form .message'),
    socialLinks = document.querySelectorAll('#connections #socialMedia a'),
    whatIdoThere = document.querySelector('#connections #socialMedia p'),
    footer = document.getElementsByTagName('footer')[0],
    btm = document.getElementById('backToMenu'),
    toggleAbout = document.getElementById('toggleAbout');

/*______________________________________________________________________

	All ***Arrays*** for Entire File / Project
________________________________________________________________________
*/

var 
    headerInfo = [
        { 
            title: 'Introduction',
            description: 'A foreward detailing who I am and the details that form my professional life'
		},
        {
            title: 'Aspirations',
            description: 'Insight into the dreams and goals that both inspire and keep me motivated'
		},
        {
            title: 'Experiences',
            description: 'Collection of experiences that I\'ve had working in my profession that I found pivotal to my career'
		},
        {
            title: 'Recollections',
            description: 'Compilation of journal like entries documenting life experiences I\'ve found noteworthy'
		},
        {
            title: 'Connections',
            description: 'Shoot me a message and ways to connect with me online, along with what I do there'
		}
	],
    aspirations = [
        {
            bgImage: 'url(\'resources/images/tommyTaipeiTaiwan.jpg\')',
            title: "Learn Taiwanese",
            description: "Suspendisse a dictum lectus. Donec aliquet rhoncus fermentum. Etiam tellus sapien, elementum gravida dictum ut, imperdiet quis enim",
	      },
        {
            bgImage: 'url(\'resources/images/ehmirBautista_elNido.jpg\')',
            title: "Canooeing in the Lagoon of El Nido",
            description: "Nullam at elementum nisl, vel elementum orci. Nullam ut lacinia mi, eget condimentum velit. Maecenas posuere sagittis nunc, ut faucibus lorem. Nam tristique leo ac nisi varius blandit.",
	      },
        {
            bgImage: 'url(\'resources/images/mandyBeerley_kilauea.jpg\')',
            title: "Experience Kilauea",
            description: "Donec ac nisi auctor, blandit ex vitae, aliquam orci. Nam at metus non augue aliquam bibendum. Phasellus tincidunt ipsum sed eros vulputate, quis sodales nunc sagittis.",
	      },
        {
            bgImage: 'url(\'resources/images/amarYashlaha_lion.jpg \')',
            title: "Walk with the Lions",
            description: "Sed vitae dolor a enim dapibus maximus. Pellentesque aliquet pretium metus, ac tempor lorem.In commodo ligula in dolor egestas pulvinar eu vel arcu. Nunc ultrices turpis quis mattis vehicula. In in ornare tortor.",
	      },
        {
            bgImage: 'url(\'resources/images/clayBanks_japan.jpg\')',
            title: "Enjoy a bowl of Ramen in Japan",
            description: "Donec eget lectus nec dolor pellentesque placerat non ac odio. Nulla vitae ligula nec lacus vestibulum faucibus eu gravida massa. Fusce ornare sit amet dui et tempus.",
	      }
	],
    stories = [
        {
            bgImage: 'resources/images/paulJarvis.jpg',
            number: '01',
            title: 'Long Walks On the Beach',
            about: 'Sed quis vehicula ex. Nulla porta nisi eu posuere suscipit. Suspendisse potenti. Maecenas condimentum hendrerit lobortis. Cras quis lorem sapien. Aenean lacus lectus, facilisis et sapien at, lacinia semper dolor.'
		},
        {
            bgImage: 'resources/images/piotrChrobot_netherlands.jpg',
            number: '02',
            title: 'Openness in the Netherlands',
            about: 'Nullam at elementum nisl, vel elementum orci. Nullam ut lacinia mi, eget condimentum velit. Maecenas posuere sagittis nunc, ut faucibus lorem. Nam tristique leo ac nisi varius blandit. Donec ac nisi auctor, blandit ex vitae, aliquam orci. Nam at metus non augue aliquam bibendum.'
		},
        {
            bgImage: 'resources/images/romanSchurte_alps.jpg',
            number: '03',
            title: 'Rejuventation in the Alps',
            about: 'Phasellus tincidunt ipsum sed eros vulputate, quis sodales nunc sagittis. Sed vitae dolor a enim dapibus maximus. Pellentesque aliquet pretium metus, ac tempor lorem. In commodo ligula in dolor egestas pulvinar eu vel arcu. Nunc ultrices turpis quis mattis vehicula. In in ornare tortor.'
		},
        {
            bgImage: 'resources/images/rezaulKarim_sanFran.jpg',
            number: '04',
            title: 'Hustling Quickly in a New City',
            about: 'Cras ultrices mattis nibh nec sodales. Nam eget mauris eu risus vehicula rutrum vitae id arcu. Donec eget lectus nec dolor pellentesque placerat non ac odio. Nulla vitae ligula nec lacus vestibulum faucibus eu gravida massa.'
		}
	],
    captions = [
		"Where I Connect with Friends and Family",
		"Where I Rant about Cats and Retweet Old Memes",
		"Where I Share Photos of Relevant and Current things In my Life",
		"Where I Go to Catch Up on the News (and Procrastinate)",
		"Where I Keep in Contact with My Career Peers and Associates",
		"Where I Share My Work: Both Recreational and Professional"
	];

/*______________________________________________________________________

	All ***Variables*** for Entire File / Project
________________________________________________________________________
*/

var current,
    _current = 0,
    trueNumber,
    place;

/*______________________________________________________________________

	All ***Core Functions*** for Entire File / Project
________________________________________________________________________
*/

var 
    initialLoad = (index) => {
        sections[index].style.display = 'block';
        sections[index].style.opacity = 1;
        headerH1.innerText = headerInfo[index].title;
        headerText.innerText = headerInfo[index].description;
        current = index;
    },
    opaNone = function(element) { element.style.opacity = 0; },
    opaOne = function(element) { element.style.opacity = 1; },
    hide = function(element) { element.style.display = 'none'; },
    display = function(element) { element.style.display = 'block'; },
    getSiblings = (elem) => {
        var siblings = [];
        var sibling = elem.parentNode.firstChild;
        for (; sibling; sibling = sibling.nextSibling) {
            if (sibling.nodeType !== 1 || sibling == elem) continue;
            siblings.push(sibling);
        }
        return siblings;
    },
    forEach = function (array, callback, scope) {
        for(var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]);
        }
    };

function hover(elements, onenter, onleave) {
    elements.forEach(el => {
        el.addEventListener('mouseenter', onenter);
        el.addEventListener('mouseleave', onleave);
    });
};




/*______________________________________________________________________

	Proprietary Code for
	L A N D I N G 	S E C T I O N
________________________________________________________________________
*/

display(landing);
hide(sectionsMainWrapper);


//Responsible for Landing Section's animation sequence
var landingAnim = () => {
    var i = 1;
    setTimeout(_ => {
        forEach(landingLinks, function(index, value) {
            setTimeout(_ => {
                value.classList.add('fadeIn');
            }, 400 * i);
            i++;
        })
    }, 1400)
}
window.onload = () => { landingAnim() };
/*
    This code is necessary to remove the fadeIn class,
    which when is present, prevents intended animation affect
    when a link is selected
*/
setTimeout(_ => {
    forEach(landingLinks, function(index, value) {
        console.log(value);
        value.className = 'present';
    })
}, 4000) 



/*
 Functionality for Landing Section's Navigation Links
 If visitor has already been to the page and selected a link, this code ensures
 that the section for that link is the one that appears upon reload: not the 
 landing section 
*/

if (sessionStorage.getItem('landingLinkClick') == "true") {
    hide(landing);
    display(sectionsMainWrapper);
    var number = sessionStorage.currentSlide;
    initialLoad(number);
    opaOne(sectionsMainWrapper);
} else {
    landingLinks.forEach((el, index) => {

        el.addEventListener('click', _ => {
            /*
                Here lies the code that will allow for the animation sequence
                in which clicking on a link causes the others to fade out
            */
            var siblings = getSiblings(landingLinks[index]);
            console.log(siblings);
            siblings.forEach((element) => {
                opaNone(element);
            });

            current = index;
            el.classList.add('selected');
            sessionStorage.setItem('currentSlide', current);
            sessionStorage.setItem('landingLinkClick', "true");

            setTimeout(_ => {
                opaNone(landing);
            }, 550)
            setTimeout(_ => {
                hide(landing);
            }, 1050);
            setTimeout(_ => {
                display(sectionsMainWrapper);
            }, 1100);
            setTimeout(_ => {
                initialLoad(current);
            }, 1150);
            setTimeout(_ => {
                opaOne(sectionsMainWrapper);
            });
        })
    })
}; //end of else




/*______________________________________________________________________

	Proprietary Code for
	N A V I G A T I O N 	O V E R L A Y
________________________________________________________________________
*/

// Allows for on hover animation for links in the Navigation Menu
moveLeft.forEach((el) => {
            el.addEventListener('mouseover', function() {
                (this.classList.contains('active') === true) ? this.classList.remove('active') & this.classList.add('active'): this.classList.add('active');
                el.addEventListener('mouseout', function() {
                    this.classList.remove('active');
                })
            });

            // Allows for on click animation for links in the Navigation Menu
            scmLinks.forEach((el) => {
                el.addEventListener('click', _ => {
                    el.style.backgroundColor = 'var(--main-blue)';
                    el.style.color = '#ffffff';
                    setTimeout(_ => {
                        el.style.backgroundColor = 'transparent';
                        el.style.color = 'var(--secondary-gray)';
                    }, 510);
                })
            });
        });

//functionality for Navigation links to peruse sections, make them the active
//currently viewed one
navlinks.forEach((el, index) => {
    el.addEventListener('click', function(e) {
        e.preventDefault(); //Gotta add it

        hide(sections[current]);
        display(sections[index]);
        var siblings = getSiblings(sections[index]);
        siblings.forEach((element) => {
            element.classList.remove('active');
        });
        changeHeaderInfo(index);
        current = index;
        sessionStorage.setItem('currentSlide', current);
        // overlay.classList.add('nonActive');
        // overlay.classList.remove('active');
        setTimeout(_ => {
            opaNone(overlay);
        }, 550);
        setTimeout(_ => {
            hide(overlay);
        }, 1000);
        setTimeout(_ => {
            display(sectionsMainWrapper);
        }, 1100);
        setTimeout(_ => {
            opaOne(sectionsMainWrapper);
            opaOne(sections[current]);
        }, 1150);


        // display(sectionsMainWrapper);
        // opaOne(sectionsMainWrapper);
        // hide(sections[current]);
        // display(sections[index]);
        // opaOne(sections[index]);

        // var siblings = getSiblings(sections[index]);
        // siblings.forEach((element) => {
        //     element.classList.remove('active');
        // });
        // changeHeaderInfo(index);
        // current = index;
        // sessionStorage.setItem('currentSlide', current);
        // overlay.classList.add('nonActive');
        // overlay.classList.remove('active');
        // setTimeout(_ => {
        //     overlay.style.display = 'none';
        // }, 500);
    });
});


//	Functionality for button that opens Navigation menu
openNav.addEventListener('click', () => {
    opaNone(sectionsMainWrapper);
    setTimeout(_=> {
        hide(sectionsMainWrapper);
    }, 610)
    setTimeout(_=> {
        display(overlay);
    }, 650)
    setTimeout(_ => {
        opaOne(overlay);
        // (overlay.classList.contains('notActive') === true) ? overlay.classList.remove('Notactive') & overlay.classList.add('active'): overlay.classList.add('active');
    }, 800);
});

//	Functionality for button that closes Navigation menu
closeNav.addEventListener('click', () => {
    opaNone(overlay);
    setTimeout(_ => {
        hide(overlay);
    }, 610);
    setTimeout(_ => {
        display(sectionsMainWrapper);
    }, 650);
    setTimeout(_ => {
        opaOne(sectionsMainWrapper);
    }, 750);
});

toggleAbout.addEventListener('click', _=> {
    opaNone(overlay);
    setTimeout(_=> {
        display(footer);
    }, 510);
    setTimeout(_=> {
        opaOne(footer);
    }, 550);
})

btm.addEventListener('click', _=> {
    opaNone(footer);
    setTimeout(_=> {
        hide(footer);
    }, 510);
    setTimeout(_=> {
        opaOne(overlay);
    }, 550);

})


/*______________________________________________________________________

	Proprietary Code for
	E L E M E N T S 	W I T H I N 	M A I N S E C T I O N
________________________________________________________________________
*/

// Function for changing info within the Header
var changeHeaderInfo = (index) => {
    opaNone(headerH1);
    setTimeout(_ => {
        headerH1.innerText = headerInfo[index].title;
        headerText.innerText = headerInfo[index].description;
    }, 310)
    setTimeout(_ => {
        opaOne(headerH1);
    }, 350)
}

//Functionality for transitioning between header title and summary on click
// header.addEventListener('click', _ => {
//     headerH1.style.opacity = 0;
//     setTimeout(_ => {
//         hide(headerH1);
//     }, 450);
//     setTimeout(_ => {
//         display(headerText);
//     }, 500);
//     setTimeout(_ => {
//         opaOne(headerText);
//     }, 550);


//     setTimeout(_ => {
//         opaNone(headerText);
//     }, 3000);
//     setTimeout(_ => {
//         hide(headerText);
//     }, 3450)
//     setTimeout(_ => {
//         display(headerH1);
//     }, 3500)
//     setTimeout(_ => {
//         opaOne(headerH1);
//     }, 3550)
// });


// Functionality to load the previous section + linking the function to the button
/*
	Due to timing issues, relinquished use of changeHeaderInfo from loadNext function,
	and wrote the functionality of the former function into the latter. 
	Everything works smoothly now.
*/

var loadNext = () => {
    opaNone(sections[current]);
    opaNone(headerH1);
    setTimeout(_ => {
        hide(sections[current]);
        current++;
        if (current >= 4) { current = 4; }
        // changeHeaderInfo(current);
        headerH1.innerText = headerInfo[current].title;
        headerText.innerText = headerInfo[current].description;
        sessionStorage.setItem('currentSlide', current);
    }, 450)
    setTimeout(_ => {
        display(sections[current]);
        opaOne(headerH1);
        sections[current].classList.add('active');
    }, 500)
    setTimeout(_ => {
        opaOne(sections[current]);
    }, 550)
    var siblings = getSiblings(sections[current]);
    siblings.forEach((element) => {
        element.classList.remove('active');
    });

    /*
    	Do something, should current > sections.length
    */
};
var noNextCheck = () => {
    
};
// nextSection.addEventListener('click', function() {
//     var el = this;
//     if (current == 3) {
//         loadNext();
//         setTimeout(function() {
//             console.log(el);
//             el.disabled = true;
//             el.classList.add("disabled");
//             el.children[0].classList.add("disabled");
//         }, 500)
//     }
//     if (current == 4) { this.disabled = true; }
//     else {
//         this.disabled = false;
//         this.classList.remove("disabled");
//         this.children[0].classList.remove("disabled");
//         loadNext();
//         prevSection.classList.remove('disabled');
//         prevSection.children[0].classList.remove('disabled');
//     }
// });


// Functionality to load the next section + linking the function to the button
var loadPrev = () => {
    opaNone(sections[current]);
    changeHeaderInfo(current - 1);
    setTimeout(_ => {
        hide(sections[current]);
        current--;
        if (current < 0) { current = 0; }
        sessionStorage.setItem('currentSlide', current);
    }, 450)
    setTimeout(_ => {
        display(sections[current]);
        sections[current].classList.add('active');
    }, 500)
    setTimeout(_ => {
        opaOne(sections[current]);
    }, 550)
    var siblings = getSiblings(sections[current]);
    siblings.forEach((element) => {
        element.classList.remove('active');
    });
    /*
    	Do something, should current > sections.length
    */
};
var noPrevCheck = () => {
    if (current == 0) {
        console.log(this);
    }
};
// prevSection.addEventListener('click', function() {
//     var el = this;
//     if (current == 1) {
//         loadPrev();
//         setTimeout(function() {
//             el.disabled = true;
//             el.classList.add("disabled");
//             el.children[0].classList.add("disabled");
//         }, 500)
//     }
//     if (current == 0) { this.disabled = true; }
//     else {
//         this.disabled = false;
//         this.classList.remove("disabled");
//         this.children[0].classList.remove("disabled");
//         loadPrev();
//         nextSection.classList.remove('disabled');
//         nextSection.children[0].classList.remove('disabled');
//     }
// });




/*______________________________________________________________________

	Proprietary Code for
	A S P I R A T I O N S 	S E C T I O N
________________________________________________________________________
*/

// Function to load data for the first slide + setting the first slide
// var loadInitial_slides = (num) => {
//     slides.style.backgroundImage = aspirations[num].bgImage;
//     slideHeader.innerText = aspirations[num].title;
//     slideDescription.innerText = aspirations[num].description;
//     trueNumber = num + 1,
//         place = '0' + trueNumber.toString();
//     currentSlide.innerText = place;
// }
// loadInitial_slides(0);

/*
	Functionality to advance and reversion through slides
	+
	linking functionalities to their respective buttons
*/
// var load_nextSlide = () => {
//     fade.style.backgroundColor = 'rgb(247, 247, 247)';
//     slideHeader.style.opacity = 0;
//     opaNone(slideDescription);
//     opaNone(tellerWrapper);
//     _current++;
//     trueNumber = _current + 1;
//     place = '0' + trueNumber.toString();
//     setTimeout(_ => {
//         slides.style.backgroundImage = aspirations[_current].bgImage;
//         slideHeader.innerText = aspirations[_current].title;
//         slideDescription.innerText = aspirations[_current].description;
//         currentSlide.innerText = place;
//     }, 420);
//     setTimeout(_ => {
//         fade.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
//         opaOne(slideHeader);
//         opaOne(slideDescription);
//         opaOne(tellerWrapper);
//     }, 500);
// }
// nextSlide.addEventListener('click', function() {
//     var el = this;
//     if (_current == 3) {
//         load_nextSlide();
//         setTimeout(function() {
//             console.log(el);
//             el.disabled = true;
//             el.classList.add("disabled");
//             el.children[0].classList.add("disabled");
//         }, 500)
//     }
//     if (_current == 4) { this.disabled = true; }
//     else {
//         this.disabled = false;
//         this.classList.remove("disabled");
//         this.children[0].classList.remove("disabled");
//         load_nextSlide();
//         prevSlide.classList.remove('disabled');
//         prevSlide.children[0].classList.remove('disabled');
//     }
// });

// var load_prevSlide = () => {
//     fade.style.backgroundColor = 'rgb(247, 247, 247)';
//     opaNone(slideHeader);
//     opaNone(slideDescription);
//     opaNone(tellerWrapper);
//     _current--;
//     trueNumber = _current + 1;
//     place = '0' + trueNumber.toString();
//     setTimeout(_ => {
//         slides.style.backgroundImage = aspirations[_current].bgImage;
//         slideHeader.innerText = aspirations[_current].title;
//         slideDescription.innerText = aspirations[_current].description;
//         currentSlide.innerText = place;
//     }, 420);
//     setTimeout(_ => {
//         fade.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
//         opaOne(slideHeader);
//         opaOne(slideDescription);
//         opaOne(tellerWrapper);
//     }, 500);
// }
// prevSlide.addEventListener('click', function() {
//     var el = this;
//     if (_current == 1) {
//         load_prevSlide();
//         setTimeout(function() {
//             console.log(el);
//             el.disabled = true;
//             el.classList.add("disabled");
//             el.children[0].classList.add("disabled");
//         }, 500)
//     }
//     if (_current == 0) { this.disabled = true; }
//     else {
//         this.disabled = false;
//         this.classList.remove("disabled");
//         this.children[0].classList.remove("disabled");
//         load_prevSlide();
//         prevSlide.classList.remove('disabled');
//         prevSlide.children[0].classList.remove('disabled');
//     }
// });


// var setSlidesHeight_mobile = () => {
//     var const1 = controls.offsetHeight,
//         const2 = header.offsetHeight,
//         difference = const1 + const2,
//         height = 'calc(100vh - ' +difference+ 'px)';

//     slides.style.height = height;
//     slides.style.marginBottom = const1;
// } 

// if (window.innerWidth <= 440) {
//     setSlidesHeight_mobile();
// }


/*______________________________________________________________________

	Proprietary Code for
	E X P E R I E N C E S   	S E C T I O N
________________________________________________________________________
*/

var setStoriesHeight_mobile = () => {
    var const1 = controls.offsetHeight,
        const2 = header.offsetHeight,
        difference = const1 + const2,
        height = 'calc(100vh - ' +difference+ 'px)';

    mainWrapper.style.height = height;
} 

//Setting hover function for use
hover(exploreStory_buttons, function() {
    this.classList.add('active');
}, function() {
    this.classList.remove('active');
});

//Shows / Hides Story Launching button upon hovering on said section
anExp.forEach((current, index) => {
    current.addEventListener('mouseover', _ => {
        opaOne(exploreStory_buttons[index]);
    })
    current.addEventListener('mouseout', _ => {
        opaNone(exploreStory_buttons[index]);
    })
});

// Functionality for buttons to launch their respective story
exploreStory_buttons.forEach((el, index) => {
    el.addEventListener('click', _ => {
        anExp.forEach((el) => { el.style.opacity = 0; });
        setTimeout(_ => {
            anExp.forEach((el) => { el.style.display = 'none'; });
        }, 1020);
        setTimeout(_ => {
            if (window.innerWidth < 768) {
                setStoriesHeight_mobile();
                mainWrapper.classList.add('storyActive');
            };
            if (window.innerWidth >= 768) {
                mainWrapper.classList.add('storyActive_desktop');
            }
            story.style.backgroundImage = 'url(' + stories[index].bgImage + ')';
            storyNumber.innerText = stories[index].number;
            storyHeader.innerText = stories[index].title;
            storyAbout.innerText = stories[index].about;
        }, 1050);
        setTimeout(_ => {
            display(story);
        }, 1100);
        setTimeout(_ => {
            opaOne(story);
        }, 1120);
    })
});

// Functionality for button to exit / close currently open story
exitStory.addEventListener('click', _ => {
    story.style.opacity = 0;
    setTimeout(_ => {
        hide(story);
        if (window.innerWidth < 768) {
            mainWrapper.classList.remove('storyActive');
            mainWrapper.style.height = "auto";
        };
        if (window.innerWidth >= 768) {
            mainWrapper.classList.remove('storyActive_desktop');
        }
        story.style.backgroundImage = '';
        storyNumber.innerText = '';
        storyHeader.innerText = '';
        storyAbout.innerText = '';
    }, 1020);
    setTimeout(_ => {
        anExp.forEach((el) => {
            display(el);
        })
    }, 1050);
    setTimeout(_ => {
        anExp.forEach((el) => {
            opaOne(el);
        })
    }, 1100);
});









/*______________________________________________________________________

	Proprietary Code for
	R E C O L L E C T I O N S   	S E C T I O N
________________________________________________________________________
*/


/* 
	Tracks user's scrolling of element
	shows / hides arrows based on scroll scroll
	relative to / from top and bottom 
*/
entries.addEventListener('scroll', function() {
    var scrollAmount = this.scrollTop,
        max = (this.scrollHeight - this.clientHeight) - 150;

    // console.log(this.scrollHeight);
    // console.log(scrollAmount);
    if (scrollAmount <= 150) {
        arrowUp.style.stroke = 'rgba(255, 255, 255, 1)';
    }
    if (scrollAmount > 100) {
        arrowUp.style.stroke = '#ADD9F4';
    }
    if (scrollAmount >= max) {
        arrowDown.style.stroke = 'rgba(255, 255, 255, 1)';
    }
    if (scrollAmount > 0 && scrollAmount < max) {
        arrowUp.style.stroke = '#ADD9F4';
        arrowDown.style.stroke = '#ADD9F4';
    }
});

/* 
	Takes entry title and date from list items, entries,
	injects them into main article's h1 and h3 
	and opens main article body
*/
launchEntry.forEach((current, index) => {
    current.addEventListener('click', _ => {
        articleTitle.innerText = entryHeader[index].innerText;
        articleDate.innerText = entryDate[index].innerText;
        setTimeout(_ => {
            opaNone(upNdown);
            opaNone(entryWrapper);
        }, 400)
        setTimeout(_ => {
            hide(upNdown);
            hide(entryWrapper);
        }, 950)
        setTimeout(_ => {
            display(articleBody);
            //articleWrapper.style.paddingRight = articleWrapper.offsetWidth - articleWrapper.clientWidth + "px";
        }, 1050)
        setTimeout(_ => {
            opaOne(articleBody);
        }, 1150)
    });
});


// Closes article body, redisplays entries
closeArticle.addEventListener('click', _ => {
    articleBody.style.opacity = 0;
    setTimeout(_ => {
        opaNone(articleBody);
    }, 550)
    setTimeout(_ => {
        display(upNdown);
        display(entryWrapper);
    }, 600)
    setTimeout(_ => {
        opaOne(upNdown);
        opaOne(entryWrapper);
    }, 650)
});


// Button to toggle menu open + Button to close menu
toggleMenu.addEventListener('click', _ => {
    articleMenu.classList.add('active');
});

closeMenu.addEventListener('click', _ => {
    articleMenu.classList.remove('active');
});




/*______________________________________________________________________

	Proprietary Code for
	C O N N E C T I O N S   	S E C T I O N
________________________________________________________________________
*/

//Setting the first input to display + be visible
display(inputs[0]);
opaOne(inputs[0]);


// Displays next input area after user has pressed 'enter' on keyboard
inputs.forEach((current, index) => {

    current.addEventListener('keydown', function(event) {
        if (event.which === 13) {
            console.log(index === 3);
            // After last input, displays the 'Message Delievered' .... message
            if (index == 3) {
                inputs[3].addEventListener('keydown', function(event) {
                    if (event.which === 13) {
                        opaNone(inputs[3]);
                        setTimeout(_ => {
                            hide(inputs[3]);
                        }, 520)
                        setTimeout(_ => {
                            display(message);
                        }, 530)
                        setTimeout(_ => {
                            opaOne(message);
                        }, 550)
                    }
                })
            } else {
                opaNone(current);
                setTimeout(_ => {
                    hide(current);
                }, 520);
                setTimeout(_ => {
                    display(inputs[index + 1]);
                    //inputs[index + 1].style.display = 'block';
                }, 530);
                setTimeout(_ => {
                    opaOne(inputs[index + 1]);
                    //inputs[index + 1].style.opacity = '1';
                }, 550);
            }
        }
    })
});

// For social media links onHover and onClick animations and functionality
socialLinks.forEach((current, index, array) => {

    current.addEventListener('mouseover', _ => {
        current.classList.add('active');

        //gets siblings of current, all other elements in array other than current
        var siblings = [];
        for (let i = 0; i < array.length; i++) {
            siblings.push(socialLinks[i]);
            if (i == index) {
                var thePos = i;
                siblings.splice(thePos, 1);
            }
        }

        siblings.forEach((el) => { el.classList.remove('active'); })

        whatIdoThere.innerText = captions[index];
        setTimeout(_ => {
            opaOne(whatIdoThere);
        }, 50)
    })
    current.addEventListener('click', _ => {
        current.style.backgroundColor = 'var(--main-blue)';
        current.style.color = '#ffffff';
        setTimeout(_ => {
            current.style.backgroundColor = 'transparent';
            current.style.color = 'var(--secondary-gray)';
            current.style.borderBottomColor = "rgba(0, 0, 0, 0)";
        }, 550)
    });
});









/*______________________________________________________________________

    Proprietary Code for
    F O O T E R  /  A B O U T  P R O J E C T       S E C T I O N
________________________________________________________________________
*/

