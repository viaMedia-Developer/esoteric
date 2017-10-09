var overlay = document.getElementById('overlay'),
	openNav = document.getElementById('openNav'),
	closeNav = document.getElementById('closeNav'),
	navlinks = document.querySelectorAll('#menuList li a'),
	moveLeft = document.querySelectorAll('.moveLeft'),
	scmLinks = document.querySelectorAll('#scmList li a');


/*
	JS for a links hover animation in main navigation menu overlay
*/
moveLeft.forEach(el => el.addEventListener('mouseover', function() {
	(this.classList.contains('active') === true) ? this.classList.remove('active') & this.classList.add('active') : this.classList.add('active');
	// console.log('hovering over element');
}));
moveLeft.forEach(el => el.addEventListener('mouseout', function() {
	this.classList.remove('active');
	// console.log('hovering ceased');
}));

scmLinks.forEach((el) => {
	el.addEventListener('click', _=> {
		el.style.backgroundColor = 'var(--main-blue)';
		el.style.color = '#ffffff';
		setTimeout(_=> {
			el.style.backgroundColor = 'transparent';
			el.style.color = 'var(--secondary-gray)';
		}, 510);
	})
});

//functionality for navlinks to peruse sections
navlinks.forEach((el, index) => {
	el.addEventListener('click', function(e) {
		e.preventDefault(); //Gotta add it

		sections[current].style.display = "none";
		sections[index].style.display = "block";
		sections[index].style.opacity = 1;
		var siblings = getSiblings(sections[index]);
		siblings.forEach((element) => {
			element.classList.remove('active');
		});
		changeHeaderInfo(index);
		current = index;
		overlay.classList.add('notActive');
		overlay.classList.remove('active');
		setTimeout(_ => {
			overlay.style.display = 'none';
		}, 500);
	});
});

/*
	Functionality for opening and closing overlay navigation menu
*/
openNav.addEventListener('click', () => {
	overlay.style.display = 'block';
	setTimeout(_ => {
		(overlay.classList.contains('notActive') === true) ? overlay.classList.remove('Notactive') & overlay.classList.add('active') : overlay.classList.add('active');
	}, 100)
	
});
closeNav.addEventListener('click', () => {
	overlay.classList.add('notActive');
	overlay.classList.remove('active');
	setTimeout(_ => {
		overlay.style.display = 'none';
	}, 500);
});




//function for getting siblings of an element
var getSiblings = (elem) => {
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	for (; sibling; sibling = sibling.nextSibling) {
		if(sibling.nodeType !== 1 || sibling == elem) continue;
		siblings.push(sibling);
	}
	return siblings;
}

var sections = document.getElementsByClassName('main'),
	current = 0,
	nextSection = document.querySelectorAll('#iconList li svg')[1],
	prevSection = document.querySelectorAll('#iconList li svg')[0];
	header = document.getElementById('mainHeader_overlay'),
	headerH1 = document.querySelector('#mainHeader h1'),
	headerText = document.querySelector('#mainHeader p'),
	headerInfo = [
		{
			title: 'Introduction',
			description: 'A summary detailing who I am and what I\'m about'
		},
		{
			title: 'Aspirations',
			description: 'Insight into the dreams and goals that inspire and keep me motivated'
		},
		{
			title: 'Experiences',
			description: 'Collection of experiences that I\'ve had in my profession that I found pivotal to my career'
		},
		{
			title: 'Recollections',
			description: 'A bit of a blog, compilation of journal like entries of experiences I\'ve found noteworthy'
		},
		{
			title: 'Connections',
			description: 'Shoot me a message and ways to connect with me online, along with what I do there'
		}
	];

var initialLoad = (index) => {
	sections[index].style.display = 'block';
	sections[index].style.opacity = 1;
	headerH1.innerText = headerInfo[index].title;
	headerText.innerText = headerInfo[index].description;
	current = index;
}
initialLoad(4);

var changeHeaderInfo = (index) => {
	headerH1.style.opacity = 0;
	setTimeout(_ => {
		headerH1.innerText = headerInfo[index].title;
		headerText.innerText = headerInfo[index].description;
	}, 310)
	setTimeout(_ => {
		headerH1.style.opacity = 1;
	}, 350)
} 

var loadNext = () => {
	sections[current].style.opacity = 0;
	changeHeaderInfo(current + 1);
	setTimeout(_=> {
		sections[current].style.display = 'none';
		current++;
		if (current > 4) { current = 4; }
	}, 450)
	setTimeout(_=> {
		sections[current].style.display = 'block';
		sections[current].classList.add('active');
	}, 500)
	setTimeout(_=> {
		sections[current].style.opacity = 1;
	}, 550)
	var siblings = getSiblings(sections[current]);
	siblings.forEach((element) => {
		element.classList.remove('active');
	});
	
	/*
		Do something, should current > sections.length
	*/
}
nextSection.addEventListener('click', loadNext);

var loadPrev = () => {
	sections[current].style.opacity = 0;
	changeHeaderInfo(current - 1);
	setTimeout(_=> {
		sections[current].style.display = 'none';
		current--;
		if(current < 0) { current = 0; }
	}, 450)
	setTimeout(_=> {
		sections[current].style.display = 'block';
		sections[current].classList.add('active');
	}, 500)
	setTimeout(_=> {
		sections[current].style.opacity = 1;
	}, 550)
	var siblings = getSiblings(sections[current]);
	siblings.forEach((element) => {
		element.classList.remove('active');
	});
	/*
		Do something, should current > sections.length
	*/
}
prevSection.addEventListener('click', loadPrev);


//Functionality for transitioning between header title and summary
//on click
	header.addEventListener('click', _ => {
		headerH1.style.opacity = 0;
		setTimeout(_=> {
			headerH1.style.display = 'none';
		}, 450);
		setTimeout(_=> {
			headerText.style.display = 'block';
		}, 500);
		setTimeout(_=> {
			headerText.style.opacity = 1;
		}, 550);


		setTimeout(_=> {
			headerText.style.opacity = 0;
		}, 3000);
		setTimeout(_=> {
			headerText.style.display = 'none';
		}, 3450)
		setTimeout(_=> {
			headerH1.style.display = 'block';
		}, 3500)
		setTimeout(_=> {
			headerH1.style.opacity = 1;
		}, 3550)
	});


/*______________________________________________________________________

	Aspirations Area 
________________________________________________________________________
*/
const slides = document.getElementById('slides'),
	  fade = document.getElementById('fade'),
	  slideHeader = document.querySelector('.infoWrapper h1'),
	  slideDescription = document.querySelector('.infoWrapper p'),
	  tellerWrapper = document.getElementsByClassName('tellerWrapper')[0],
	  currentSlide = document.getElementById('current'),
	  prevSlide = document.querySelector('#slides #left'),
	  nextSlide = document.querySelector('#slides #right'),
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
	  ]
var _current = 0,
	trueNumber, 
	place;

var loadInitial_slides = (num) => {
	slides.style.backgroundImage = aspirations[num].bgImage;
	slideHeader.innerText = aspirations[num].title;
	slideDescription.innerText = aspirations[num].description;
	trueNumber = num + 1,
	place = '0' + trueNumber.toString();
	currentSlide.innerText = place;
}
loadInitial_slides(0);

var load_nextSlide = () => {
	fade.style.backgroundColor = 'rgb(247, 247, 247)';
	slideHeader.style.opacity = 0;
	slideDescription.style.opacity = 0;
	tellerWrapper.style.opacity = 0;
	_current++;
	trueNumber = _current + 1;
	place = '0' + trueNumber.toString();
	setTimeout(_=> {
		slides.style.backgroundImage = aspirations[_current].bgImage;
		slideHeader.innerText = aspirations[_current].title;
		slideDescription.innerText = aspirations[_current].description;
		currentSlide.innerText = place;
	}, 420);
	setTimeout(_=> {
		fade.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
		slideHeader.style.opacity = 1;
		slideDescription.style.opacity = 1;
		tellerWrapper.style.opacity = 1;
	}, 500);
}
nextSlide.addEventListener('click', load_nextSlide);

var load_prevSlide = () => {
	fade.style.backgroundColor = 'rgb(247, 247, 247)';
	slideHeader.style.opacity = 0;
	slideDescription.style.opacity = 0;
	tellerWrapper.style.opacity = 0;
	_current--;
	trueNumber = _current + 1;
	place = '0' + trueNumber.toString();
	setTimeout(_=> {
		slides.style.backgroundImage = aspirations[_current].bgImage;
		slideHeader.innerText = aspirations[_current].title;
		slideDescription.innerText = aspirations[_current].description;
		currentSlide.innerText = place;
	}, 420);
	setTimeout(_=> {
		fade.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
		slideHeader.style.opacity = 1;
		slideDescription.style.opacity = 1;
		tellerWrapper.style.opacity = 1;
	}, 500);
}
prevSlide.addEventListener('click', load_prevSlide);



/*______________________________________________________________________

	Experiences Area 
________________________________________________________________________
*/
var mainWrapper = document.getElementsByClassName('mainWrapper')[0],
	story = document.getElementsByClassName('story')[0],
	storyNumber = document.querySelector('.aboutStory h1 #number'),
	storyHeader = document.querySelector('.aboutStory h1 #title'),
	storyAbout = document.querySelector('.aboutStory p'),
	exitStory = document.querySelector('.aboutStory #exit'),
	anExp = document.querySelectorAll('.anExp'),
	exploreStory_buttons = document.querySelectorAll('.anExp button'),
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
	]

function hover(elements, onenter, onleave) {
	elements.forEach(el => {
		el.addEventListener('mouseenter', onenter);
		el.addEventListener('mouseleave', onleave);
	});
}

hover(exploreStory_buttons, function () {
	this.classList.add('active');
}, function () {
	this.classList.remove('active');
});

anExp.forEach((current, index) => {
	current.addEventListener('mouseover', _=> {
		exploreStory_buttons[index].style.opacity = 1;
	})
	current.addEventListener('mouseout', _=> {
		exploreStory_buttons[index].style.opacity = 0;
	})
});


exploreStory_buttons.forEach((el, index) => {
	el.addEventListener('click', _=> {
		anExp.forEach((el) => { el.style.opacity = 0; });
		setTimeout(_=> {
			anExp.forEach((el) => { el.style.display = 'none'; });
		}, 1020);
		setTimeout(_=> {
			story.style.backgroundImage = 'url(' +stories[index].bgImage+')';
			storyNumber.innerText = stories[index].number;
			storyHeader.innerText = stories[index].title;
			storyAbout.innerText = stories[index].about;
		}, 1050);
		setTimeout(_=> {
			story.style.display = 'block';
		}, 1100);
		setTimeout(_=> {
			story.style.opacity = 1;
		}, 1120);
	})
});

exitStory.addEventListener('click', _=> {
	story.style.opacity = 0;
	setTimeout(_=> {
		story.style.display = 'none';
		story.style.backgroundImage = '';
		storyNumber.innerText = '';
		storyHeader.innerText = '';
		storyAbout.innerText = '';
	}, 1020);
	setTimeout(_=> {
		anExp.forEach((el) => {
			el.style.display = 'block';
		})
	}, 1050);
	setTimeout(_=> {
		anExp.forEach((el) => {
			el.style.opacity = 1;
		})
	}, 1100);
});




/*______________________________________________________________________

	Recollections Area 
________________________________________________________________________
*/
var upNdown = document.getElementById('upNdown'),
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
	closeMenu = document.querySelector('#menu #closeMenu');

// Doesn't work due to fact that this code runs upon pageLoad. On page load, entries has no properties as it's not displaying, thus result of the math = 0.
// var hidePadding = () => {
// 	console.log(entries.style.paddingRight);
// 	entries.style.paddingRight = entries.offsetWidth - entries.clientWidth + "px";
// 	console.log(entries.style.paddingRight);
// };
// hidePadding();


entries.addEventListener('scroll', function(){
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
	if (scrollAmount > 0 && scrollAmount < max){
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
	current.addEventListener('click', _=> {
		articleTitle.innerText = entryHeader[index].innerText;
		articleDate.innerText = entryDate[index].innerText;
		setTimeout(_=> {
			upNdown.style.opacity = 0;
			entryWrapper.style.opacity = 0;
		}, 400)
		setTimeout(_=> {
			upNdown.style.display = 'none';
			entryWrapper.style.display = 'none';
		}, 950)
		setTimeout(_=> {
			articleBody.style.display = 'block';
			articleWrapper.style.paddingRight = articleWrapper.offsetWidth - articleWrapper.clientWidth + "px";
		}, 1050)
		setTimeout(_=> {
			articleBody.style.opacity = 1;
		}, 1150)
	});
});

/*
	Closes article body,
	redisplays entries
*/
closeArticle.addEventListener('click', _=> {
	articleBody.style.opacity = 0;
	setTimeout(_=> {
		articleBody.style.display = 'none';
	}, 550)
	setTimeout(_=> {
		upNdown.style.display = 'block';
		entryWrapper.style.display = 'block';
	}, 600)
	setTimeout(_=> {
		upNdown.style.opacity = 1;
		entryWrapper.style.opacity = 1;
	}, 650)
});

/*
	Button to toggle menu open,
	Button to close menu
*/
toggleMenu.addEventListener('click', _=> {
	articleMenu.classList.add('active');
});

closeMenu.addEventListener('click', _=> {
	articleMenu.classList.remove('active');
});	




/*______________________________________________________________________

	Connections Area 
________________________________________________________________________
*/

var inputs = document.querySelectorAll('#connections form .input'),
	message = document.querySelector('#connections form .message'),
	socialLinks = document.querySelectorAll('#connections #socialMedia a'),
	whatIdoThere = document.querySelector('#connections #socialMedia p'),
	captions = [
		"Where I Connect with Friends and Family",
		"Where I Rant about Cats and Retweet Old Memes",
		"Where I Share Photos of Relevant and Current things In my Life",
		"Where I Go to Catch Up on the News (and Procrastinate)",
		"Where I Keep in Contact with My Career Peers and Associates",
		"Where I Share My Work: Both Recreational and Professional"
	];

// Setting the first input to display
inputs[0].style.display = "block";
inputs[0].style.opacity = 1;

inputs.forEach((current, index) => {
	
	current.addEventListener('keydown', function(event) {
		if(event.which === 13) {
			console.log(index === 3);
			if(index == 3) {
				inputs[3].addEventListener('keydown', function(event) {
					if(event.which === 13) {
						inputs[3].style.opacity = 0;
						setTimeout(_=> {
							inputs[3].style.display = 'none';
						}, 520)
						setTimeout(_=> {
							message.style.display = 'block';
						}, 530)
						setTimeout(_=> {
							message.style.opacity = 1;
						}, 550)
					}
				})
			}
			else {
				current.style.opacity = 0;
				setTimeout(_=> {
					current.style.display = 'none';
				}, 520);
				setTimeout(_=> {
					inputs[index + 1].style.display = 'block';
				}, 530);
				setTimeout(_=> {
					inputs[index + 1].style.opacity = '1';
				}, 550);
			}
		}
	})
})



socialLinks.forEach((current, index, array) => {

	current.addEventListener('mouseover', _=> {
		current.classList.add('active');

		//gets siblings of current, all other elements in array other than current
		var siblings = [];
		for(let i = 0; i < array.length; i++) {
			siblings.push(socialLinks[i]);
			if (i == index) {
				var thePos = i;
				siblings.splice(thePos, 1);
			}
		}
		
		siblings.forEach((el) => { el.classList.remove('active'); })

		whatIdoThere.innerText = captions[index];
		setTimeout(_=> {
			whatIdoThere.style.opacity = 1;
		}, 50)
		// setTimeout(_=> {
		// 	whatIdoThere.style.opacity = 0;
		// }, 3050)
		// setTimeout(_=> {
		// 	whatIdoThere.innerText = "";
		// }, 3560)
	})
	current.addEventListener('click', _=> {
		current.style.backgroundColor = 'var(--main-blue)';
		current.style.color = '#ffffff';
		setTimeout(_=> {
			current.style.backgroundColor = 'transparent';
			current.style.color = 'var(--secondary-gray)';
			current.style.borderBottomColor = "rgba(0, 0, 0, 0)";
		}, 550)
	});
})