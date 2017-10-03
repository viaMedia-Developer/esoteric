var overlay = document.getElementById('overlay'),
	openNav = document.getElementById('openNav'),
	closeNav = document.getElementById('closeNav'),
	navlinks = document.querySelectorAll('#menuList li a');


/*
	JS for a links hover animation in main navigation menu overlay
*/
navlinks.forEach(el => el.addEventListener('mouseover', function() {
	(this.classList.contains('active') === true) ? this.classList.remove('active') & this.classList.add('active') : this.classList.add('active');
	// console.log('hovering over element');
}));
navlinks.forEach(el => el.addEventListener('mouseout', function() {
	this.classList.remove('active');
	// console.log('hovering ceased');
}));

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
initialLoad(2);

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
if(window.innerWidth >= 768) {
	header.addEventListener('mouseover', _ => {
		headerH1.style.opacity = 0;
		setTimeout(_=> {
			headerH1.style.display = 'none';
		}, 450)
		setTimeout(_=> {
			headerText.style.display = 'block';
		}, 500)
		setTimeout(_=> {
			headerText.style.opacity = 1;
		}, 550)
	});

	header.addEventListener('mouseout', _ => {
		headerText.style.opacity = 0;
		setTimeout(_=> {
			headerText.style.display = 'none';
		}, 450)
		setTimeout(_=> {
			headerH1.style.display = 'block';
		}, 500)
		setTimeout(_=> {
			headerH1.style.opacity = 1;
		}, 550)
	});
}
//For devices with below certain widths: which would be mobile devices: tapping header switches to description: t
//this bit of code sets it to fade back automatically as there is no mouse hover on mobile. 
if(window.innerWidth < 768) {
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
	};




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




var mainWrapper = document.getElementsByClassName('mainWrapper')[0],
	story = document.getElementsByClassName('story')[0],
	storyNumber = document.querySelector('.aboutStory h1 span'),
	storyHeader = document.querySelector('.aboutStory h1'),
	storyAbout = document.querySelector('.aboutStory p'),
	exitStory = document.querySelector('.aboutStory #exit'),
	anExp = document.querySelectorAll('.anExp'),
	exploreStory_buttons = document.querySelectorAll('.anExp button'),
	stories = [
		{
			number: '01',
			title: 'Long Walks On the Beach',
			about: 'Sed quis vehicula ex. Nulla porta nisi eu posuere suscipit. Suspendisse potenti. Maecenas condimentum hendrerit lobortis. Cras quis lorem sapien. Aenean lacus lectus, facilisis et sapien at, lacinia semper dolor.'
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


