/*______________________________________________________________________

	All ***Constant Elements*** for Entire File / Project
________________________________________________________________________
*/
var body = document.getElementsByTagName('body')[0],
    landing = document.getElementById('landing'),
    sectionsMainWrapper = document.getElementById('wrapper'),
    logoSide = document.querySelector('#landing .logoSide'),
    landingLinks = document.querySelectorAll('#landing ul.nav li'),
    // landingLinks_info = document.querySelectorAll('#landing ul.nav li p .info'),
    sections = document.getElementsByClassName('main'),
    introduction_first = document.querySelector('#introduction .first'),
    introduction_second = document.querySelector('#introduction .second'),
    switchSection_one = document.getElementById('switchSection_one'),
    switchSection_two = document.getElementById('switchSection_two'),

    // nextSection = document.querySelectorAll('#iconList li svg')[1],
    // prevSection = document.querySelectorAll('#iconList li svg')[0],
    header = document.getElementById('mainHeader_overlay'),
    headerH1 = document.querySelector('#mainHeader h1'),
    headerText = document.getElementById('headerText'),
    // controls = document.getElementById('controls'),
    // overlay = document.getElementById('overlay'),
    // openNav = document.getElementById('openNav'),
    // closeNav = document.getElementById('closeNav'),
    // navlinks = document.querySelectorAll('#menuList li a'),
    // moveLeft = document.querySelectorAll('.moveLeft'),
    // scmLinks = document.querySelectorAll('#scmList li a'),
    // slides = document.getElementById('slides'),
    // fade = document.getElementById('fade'),
    // slideHeader = document.querySelector('.infoWrapper h1'),
    // slideDescription = document.querySelector('.infoWrapper p'),
    // tellerWrapper = document.getElementsByClassName('tellerWrapper')[0],
    // currentSlide = document.getElementById('current'),
    // prevSlide = document.querySelector('#slides #left'),
    // nextSlide = document.querySelector('#slides #right'),
    // mainWrapper = document.getElementsByClassName('mainWrapper')[0],
    // story = document.getElementsByClassName('story')[0],
    // storyNumber = document.querySelector('.aboutStory h1 #number'),
    // storyHeader = document.querySelector('.aboutStory h1 #title'),
    // storyAbout = document.querySelector('.aboutStory p'),
    // exitStory = document.querySelector('.aboutStory #exit'),
    listOfExps = document.getElementById('listOfExps'),
    anExp = document.querySelectorAll('.anExp'),
    expExp = document.getElementById('expExp'),
    expExp_h1 = document.querySelector('#expExp article h1'),
    expExp_h3 = document.querySelector('#expExp article h3'),
    expExp_image = document.querySelector('#expExp .image'),
    backToList = document.getElementById('backToList'),

    listOfRecollections = document.getElementsByClassName('listOfRecollections')[0],
    anEntry = document.querySelectorAll('.entry'),
    entryTitle = document.getElementsByClassName('entryTitle'),
    entryDate = document.getElementsByClassName('entryDate'),
    recollection_article = document.querySelector('#recollections article'),
    recollectionTitle = document.querySelector('#aRecollection h1'),
    recollectionDate = document.querySelector('#aRecollection h3'),
    backToRecollections = document.getElementById('backToRecollections'),

    // Connections Section Vars.
    initiateInputs = document.getElementById('initiateInputs'),
    inputForm = document.getElementById('inputForm'),
    inputs = document.getElementsByClassName('input'),
    messageSent = document.getElementById('messageSent'),
    inputHelp = document.getElementById('inputHelp'),
    

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
            description: 'A Foreward Detailing who I am and the Details that form my Professional Life'
		},
        {
            title: 'Experiences',
            description: 'A collection of Past Work that I\'ve found Truly Pivotal to my Career'
		},
        {
            title: 'Recollections',
            description: 'Compilation of journal like entries documenting life experiences I\'ve found noteworthy'
		},
        {
            title: 'Connections',
            description: 'Various Methods of Communicating With Me '
		}
	],
    expInfo = [
        {
            number: '01.',
            title: 'City Ventures',
            img: "url('resources/images/charlesForerunner.jpg')"
        },
        {
            number: '02.',
            title: 'Appalachian Life',
            img: "url('resources/images/emmaFrancesLogan_appalachian_nbnw.jpg')"
        },
        {
            number: '03.',
            title: 'Travel Europe',
            img: "url('resources/images/louisPellissier_eiffelTower.jpg')"
        },
        {
            number: '04.',
            title: 'Far and Wide',
            img: "url('resources/images/dariuszSankowski_map_bnw.jpg')"
        },
        {
            number: '05.',
            title: 'MaukaMakai',
            img: "url('resources/images/christianJoudrey_hawaii_bnw.jpg')"
        },
    ]
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
        // body.style.overflowY = 'hidden';
        sections[index].style.display = 'block';
        headerH1.innerText = headerInfo[index].title;
        headerText.innerText = headerInfo[index].description;
        setTimeout(_=> {
            opaOne(headerH1);
        }, 400);
        setTimeout(_=> {
            opaOne(headerText);
        }, 800);
        setTimeout(_=> {
            sections[index].classList.add('transitionUp_a');
        }, 1200);
        setTimeout(_=> {
            opaOne(sections[index]);
            sections[index].classList.remove('transitionUp_a');
            // body.style.overflowY = "auto";
        }, 2100);
        current = index;
    },
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
    },
    opaNone = function(element) { element.style.opacity = 0; },
    opaOne = function(element) { element.style.opacity = 1; };

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
// temporarily commented out
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
                opaOne(sectionsMainWrapper);
            }, 1150);
            setTimeout(_ => {
                initialLoad(current);
            }, 1200);
        })
    })
}; //end of else







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
    I N T R O D U C T I O N   S E C T I O N
________________________________________________________________________
*/

switchSection_one.addEventListener('click', _=> {
    sections[0].classList.add('transitionUp_d');
    setTimeout(_=> {
        hide(introduction_first);
        sections[0].classList.remove('transitionUp_d');
        sections[0].style.transform = 'translateY(-40px)';
        sections[0].style.opacity = '0';
    }, 800);
    setTimeout(_=> {
        display(introduction_second);
        // sections[0].style.backgroundColor = 'blue';
    }, 1000);
    setTimeout(_=> {
        sections[0].classList.add('transitionUp_a');
    }, 1100);
    setTimeout(_=> {
        sections[0].classList.remove('transitionUp_a');
        sections[0].style.transform = 'translateY(0px)';
        sections[0].style.opacity = '1';
    }, 1900);
})

switchSection_two.addEventListener('click', _=> {
    sections[0].classList.add('transitionDown_d');
    setTimeout(_=> {
        hide(introduction_second)
        sections[0].classList.remove('transitionDown_d');
        sections[0].style.transform = 'translateY(40px)';
        sections[0].style.opacity = '0';
    }, 800);
    setTimeout(_=> {
        display(introduction_first);
        // sections[0].style.backgroundColor = 'red';
    }, 900);
    setTimeout(_=> {
        sections[0].classList.add('transitionDown_a');
    }, 1000);
    setTimeout(_=> {
        sections[0].classList.remove('transitionDown_a');
        sections[0].style.opacity = '1';
    }, 1800);
})























/*______________________________________________________________________

	Proprietary Code for
	E X P E R I E N C E S   	S E C T I O N
________________________________________________________________________
*/


anExp.forEach((current, index) => {
    current.addEventListener('click', _=> {
        expExp_h3.innerText = expInfo[index].number;
        expExp_h1.innerText = expInfo[index].title;
        expExp_image.style.backgroundImage = expInfo[index].img;
        sections[1].classList.add('transitionLeft_d');
        opaNone(headerText);
        setTimeout(_=> {
            hide(listOfExps);
            sections[1].classList.remove('transitionLeft_d');
            sections[1].style.transform = 'translateX(40px)';
            opaNone(sections[1]);
        }, 800);
        setTimeout(_=> {
            display(expExp);
        }, 900);
        setTimeout(_=> {
            sections[1].classList.add('transitionRight_a');
        }, 1000);
        setTimeout(_=> {
            sections[1].classList.remove('transitionRight_a');
            sections[1].style.transform = 'translateX(0px)';
            opaOne(sections[1]);
        }, 1800);
    })
})




backToList.addEventListener('click', _=> {
    sections[1].classList.add('transitionToRight_d');
    setTimeout(_=> {
        hide(expExp);
        sections[1].classList.remove('transitionToRight_d');
        sections[1].style.transform = 'translateX(40px)';
        opaNone(sections[1]);
    }, 800);
    setTimeout(_=> {
        listOfExps.style.display = 'table';
    }, 900);
    setTimeout(_=> {
        sections[1].classList.add('transitionToRight_a');
    }, 1000);
    setTimeout(_=> {
        sections[1].classList.remove('transitionToRight_a');
        sections[1].style.transform = 'translateX(0px)';
        opaOne(sections[1]);
        opaOne(headerText);
    }, 1800);
})



















/*______________________________________________________________________

    Proprietary Code for
    R E C O L L E C T I O N S       S E C T I O N
________________________________________________________________________
*/

anEntry.forEach((current, index, array) => {
    current.addEventListener('click', _=> {
        recollectionTitle.innerText = entryTitle[index].innerText;
        recollectionDate.innerText = entryDate[index].innerText;

        sections[2].classList.add('transitionLeft_d');
        opaNone(headerText);
        setTimeout(_=> {
            hide(listOfRecollections);
            sections[2].classList.remove('transitionLeft_d');
            sections[2].style.transform = 'translateX(40px)';
            opaNone(sections[2]);
        }, 800)
        setTimeout(_=> {
            display(recollection_article);
        }, 900);
        setTimeout(_=> {
            sections[2].classList.add('transitionRight_a');
        }, 1000);
        setTimeout(_=> {
            sections[2].classList.remove('transitionRight_a');
            sections[2].style.transform = 'translateX(0px)';
            opaOne(sections[2]);
        }, 1800);
    })  
})

backToRecollections.addEventListener('click', _=> {
    sections[2].classList.add('transitionToRight_d');
    setTimeout(_=> {
        hide(recollection_article);
        sections[2].classList.remove('transitionToRight_d');
        sections[2].style.transform = 'translateX(-40px)';
        opaNone(sections[2]);
    }, 800)
    setTimeout(_=> {
        display(listOfRecollections);
    }, 900);
    setTimeout(_=> {
        sections[2].classList.add('transitionToRight_a');
        opaOne(headerText);
    }, 1000);
    setTimeout(_=> {
        sections[2].classList.remove('transitionToRight_a');
        sections[2].style.transform = 'translateX(0px)';
        opaOne(sections[2]);
    }, 1800);
})

















/*______________________________________________________________________

	Proprietary Code for
	C O N N E C T I O N S   	S E C T I O N
________________________________________________________________________
*/





















/*______________________________________________________________________

    Proprietary Code for
    F O O T E R  /  A B O U T  P R O J E C T       S E C T I O N
________________________________________________________________________
*/

