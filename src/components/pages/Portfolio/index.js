import React from 'react';
import Project from '../../Project';
import image1 from '../../../assets/images/max/max-3.jpeg';
import image2 from '../../../assets/images/projects/tech-blog/tech-blog-2.jpeg';
import image3 from '../../../assets/images/projects/puppy/puppy-2.jpg';
import image4 from '../../../assets/images/projects/budget/budget-tracker-2.jpeg'


function Portfolio() {
	const projects = [
		{
			name: 'National Parks Campground Search',
			description:
				'Utilizing the National Parks Service API, Google Maps API, and the Open Weather API, we have created a search engine just for you. Personalize the map with your favorite locations simply by clicking on the camping icons and re-draw the map!',
			image: '../../assets/images/max/max-1.jpeg',
			technologies: ['HTML/CSS', 'JavaScript', 'Google Maps API', 'NPS API'],
			github: 'https://github.com/awolrob/Project1',
			deployed: 'https://awolrob.github.io/Project1/',
		},
		{
			name: 'Tech-Blog',
			description:
				'A CMS-Style blog site where users can publish their posts and comment on other posts as well.',
			image: '../../../assets/images/projects/tech-blog/tech-blog-2.jpeg',
			technologies: ['HTML/CSS','JavaScript','Node.js','Handlebars.js','Heroku'],
			github: 'https://github.com/fausnightm/tech-blog',
			deployed: 'https://pacific-journey-46704.herokuapp.com/',
		},
		{
			name: 'Pupparazzi',
			description:
				'A clean and accurate way to search for your favorite songs while also displaying the lyrics.',
			image: '../../../assets/images/projects/puppy/puppy-2.jpg',
			technologies: ['HTML/CSS','JavaScript','Node.js','Handlebars.js','Heroku'],
			github: ' https://github.com/Sethmarks216/project_2',
			deployed: 'https://dry-fjord-30943.herokuapp.com/',
		},
		{
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience while managing their finances and budgeting no matter where they are.',
			image: '../../../assets/images/projects/budget/budget-tracker-2.jpeg',
			technologies: ['JavaScript','MongoDB','IndexedDB & Service Workers','Node.js','Express'],
			github: 'https://github.com/fausnightm/budget-tracker',
			deployed: 'https://polar-thicket-33051.herokuapp.com/',
		},

	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header col-12">My Portfolio</h1>
			</div>
			<div>
				<ul className="row mobile-row">
					<li className="col-6 padding">
						<div className="col-12 col-sm">
							<img src={image1} alt= "National Park" />
							<Project projects={projects[0]}></Project>
						</div>
					</li>
					<li className="col-6 padding">
						<div className="col-12 col-sm">
							<img src={image2} alt= "National Park" />
							<Project projects={projects[2]}></Project>
						</div>
					</li>
				</ul>
				<ul className="row mobile-row">
					<li className=" col-6 padding">
						<div className="col-12 col-sm">
							<img src={image3} alt= "National Park" />
							<Project projects={projects[2]}></Project>
						</div>
					</li>
					<li className="col-6 padding">
						<div className="col-12 col-sm">
							<img src={image4} alt= "National Park" />
							<Project projects={projects[3]}></Project>
						</div>
					</li>
				</ul>
				{/* <ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul> */}
			</div>
		</section>
	);
}

export default Portfolio;
