import React from 'react';
import './Resources.css';
import RESOURCES from '@statics/resources';
import ResourceCards from './Cards/ResourceCards';
import ROUTES from '@statics/routes';

const Resources = () => {

	return (
		<div className='resources-overview-container'>
			<div>
				<h2 className='resources-overview-title'>All Resources</h2>
				<hr />
			</div>
			<div className='resource-content-container'>
				{
					RESOURCES.map((item, index) => {

						return (
							<ResourceCards title={item.name} link={`${ROUTES.RESOURCES!.BASE}/${item.name}`} key={index} />
						)
					})
				}
			</div>
		</div>
	);
};

export default Resources;