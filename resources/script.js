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
			description: 'Shoot me a message and ways to connect with me, along with what I do there'
		}
	];

var initialLoad = () => {
	sections[current].style.display = 'block';
	sections[current].style.opacity = 1;
	headerH1.innerText = headerInfo[current].title;
	headerText.innerText = headerInfo[current].description;
}
initialLoad();

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