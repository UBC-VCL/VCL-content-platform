import React from 'react';
import Card from "@components/Card";
import './Resources.css';
import ResourcesTool from '@components/ResourcesTool';

interface ResourcesProps {};

const announcements = {
	content: "Viva will be offering Analytics workshops again this winter, both at SFU Burnaby starting January 30th and at UBC starting January 31st. Registrations will be open until January 30th: apply here!; Viva will be offering Analytics workshops again this winter, both at SFU Burnaby starting January 30th and at UBC starting January 31st. Registrations will be open until January 30th: apply here!"
}

const Resources: React.FC<ResourcesProps> = props => {
	return (
		<div className="Resources">
			<div className="header">
				<h1>Lab-Wide Resources</h1>
				<p className='sub-header'>Navigate through all lab resources here</p>
			</div>
			<div className="banner">
				<div className='banner-text'><b>Announcements:&nbsp;</b>{announcements.content}</div>
			</div>
			<div className='Resources-body'>
				<div className="resources-section-one">
					<div className=''>
						<div className="resource-tool-section">
							<div className="resources-section-one-text">
								<h1 className='text-one'>Most&nbsp;</h1>
								<h1 className='text-two'>Commonly Used</h1>
							</div>
							<div className="resource-tool-container">
								<div className='resource-tool-item'><ResourcesTool title="Github" /></div>
								<div className='resource-tool-item'><ResourcesTool title="Github" /></div>
								<div className='resource-tool-item'><ResourcesTool title="Github" /></div>
								<div className='resource-tool-item'><ResourcesTool title="Github" /></div>
								<div className='resource-tool-item'><ResourcesTool title="Github" /></div>
							</div>
						</div>
					</div>
				</div>
				<div className="resources-section-two">
					<div className="resource-tool-section">
						<div className="resource-tool-container">
						<Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
						<Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
						<Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
						<Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default Resources;