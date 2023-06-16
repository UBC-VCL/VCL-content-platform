import React from 'react';
import './Resources.css';
import ResourcesTool from '@components/ResourcesTool';
import ResourcesMaterial from '@components/ResourcesMaterial';

interface ResourcesProps {};

const announcements = {
	content: "Viva will be offering Analytics workshops again this winter, both at SFU Burnaby starting January 30th and at UBC starting January 31st. Registrations will be open until January 30th: apply here!"
}

const Resources: React.FC<ResourcesProps> = props => {
	return (
		<div className="Resources">
			<div className="header">
				<h1>Lab-Wide Resources</h1>
				<p className='sub-header'>Navigate through all lab resources here</p>
			</div>
			{announcements.content.length == 0 ? <div/> :
			<div className="banner">
				<div className='banner-text'><b>Announcements:&nbsp;</b>{announcements.content}</div>
			</div>}
			<div className='Resources-body'>
				<div className="resource-tool-section-one">
					<div className="resources-section-one-text">
						<h1 className='top-title-text'>Most&nbsp;</h1>
						<h1 className='bottom-title-text'>Commonly Used</h1>
					</div>
					<div className="resource-tool-container">
						{/* Hardcoded several resource tool cards */}
						<div className='resource-tool-item'><ResourcesTool title="Github" /></div>
						<div className='resource-tool-item'><ResourcesTool title="Github" /></div>
						<div className='resource-tool-item'><ResourcesTool title="Github" /></div>
						<div className='resource-tool-item'><ResourcesTool title="Github" /></div>
						<div className='resource-tool-item'><ResourcesTool title="Github" /></div>
					</div>
				</div>
				<div className="resources-section-two">
					<div className="resource-material-section-two">
						<div className="resource-material-container">
							{/* Hardcoded several resources speech cards */}
							<div className='resource-material-item'><ResourcesMaterial title="Speaker Talks" desc="Description of this resource and what you can use it for" /></div>
							<div className='resource-material-item'><ResourcesMaterial title="Presentation" desc="Description of this resource and what you can use it for" /></div>
							<div className='resource-material-item'><ResourcesMaterial title="Official Home Page" desc="Description of this resource and what you can use it for" /></div>
							<div className='resource-material-item'><ResourcesMaterial title="Presentation" desc="Description of this resource and what you can use it for" /></div>
							<div className='resource-material-item'><ResourcesMaterial title="Official Home Page" desc="Description of this resource and what you can use it for" /></div>
							<div className='resource-material-item'><ResourcesMaterial title="Speaker Talks" desc="Description of this resource and what you can use it for" /></div>
							<div className='resource-material-item'><ResourcesMaterial title="Presentation" desc="Description of this resource and what you can use it for" /></div>
							<div className='resource-material-item'><ResourcesMaterial title="Official Home Page" desc="Description of this resource and what you can use it for" /></div>
							<div className='resource-material-item'><ResourcesMaterial title="Presentation" desc="Description of this resource and what you can use it for" /></div>
							<div className='resource-material-item'><ResourcesMaterial title="Official Home Page" desc="Description of this resource and what you can use it for" /></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resources;