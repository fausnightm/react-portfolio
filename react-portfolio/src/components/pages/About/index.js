import React from 'react';
import coverImage from '../../../assets/images/max/max-5.jpeg';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header col-12">About Me</h1>
			</div>
			<div className="center">
      <img src={coverImage} className="my-2" style={{ width:'100%', height: "85%" }} alt='cover' />
			</div>
			<div>
				<p className="aboutWords">
				Max Fausnight is a full-stack web developer with expertise in Adobe Photoshop, Premiere, and After Effects. His background in hospitality informs his compassionate, people-first approach. Max is fueled by an un-ending desire to learn and execute.
				
				He is always eager to build upon his entertainment expertise by staying in tune with ground breaking technologies like blockchain. His hunger to strive for excellence has lead him to build partnerships between his company and major brands like the NFL. Meanwhile, Max continuously helps improve productivity in a fast-paced environment. Max believes quality people are the single greatest factor to successful business.
				</p>
			</div>
		</section>
	);
}

export default About;
