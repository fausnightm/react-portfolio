import React, { useState }from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Resume = () => {

	const [collapse, setCollapse] = useState(false);
	const [status, setStatus] = useState('Closed');
  
	const onEntering = () => setStatus('Opening...');
  
	const onEntered = () => setStatus('Opened');
  
	const onExiting = () => setStatus('Closing...');
  
	const onExited = () => setStatus('Closed');
  
	const toggle = () => setCollapse(!collapse);

	return (
		<section >
			<div className="resume row">
				<h1 className="page-header col-12">My Resume</h1>
			</div>

			<div className="bottom-spacing col-12">
				<a href={require("../../../assets/files/Fausnight, Max_Resume.pdf")} download>
					<h4>Download my Resume</h4>
				</a>
			</div>
		<div className="container">
			<div className="dropdown row-lg">
					<Button className="col" onClick={toggle} style={{ marginBottom: '1rem' }}>Front-End</Button>
					<h5 className="col" status= {{ status }}>Capabilities</h5>
					<Collapse
						isOpen={collapse}
						onEntering={onEntering}
						onEntered={onEntered}
						onExiting={onExiting}
						onExited={onExited}
						className="container"
						
					>
						<Card className="row">
						<CardBody  >
							<ol>
								<li>HTML5</li>
								<li>CSS3</li>
								<li>JavaScript</li>
								<li>jQuery</li>
								<li>Bootstrap</li>
								<li>React</li>
								<li>version control/Git</li> 
								<li>responsive design</li>
							</ol>
						</CardBody>
						</Card>
					</Collapse>
			</div>

				<div className="dropdown row-lg">
					<Button className="col" onClick={toggle} style={{ marginBottom: '1rem' }}>Back-End</Button>
					<h5 className="col" status= {{ status }}>Capabilities</h5>
					<Collapse
						isOpen={collapse}
						onEntering={onEntering}
						onEntered={onEntered}
						onExiting={onExiting}
						onExited={onExited}
						className="container"
					>
						<Card className="row">
						<CardBody>
							<ol>
								<li>APIs</li>
								<li>NodeJS</li>
								<li>Express</li>
								<li>REST</li>
								<li>MySQL</li>
								<li>Sequelize</li>
								<li>NoSQL</li>
								<li>GraphQL</li>
								<li>MongoDB</li>
								<li>Mongoose</li>
								<li>Jest</li>
								<li>Webpack</li>
							</ol>
						</CardBody>
						</Card>
					</Collapse>
				</div>
		</div>
			
		</section>
	);
}

export default Resume;
