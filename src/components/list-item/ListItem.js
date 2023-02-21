import React from 'react';

import { ReactComponent as DefaultAvatar } from '../../assets/img/default-avatar.svg';
import { ReactComponent as StarIcon } from '../../assets/img/star-icon.svg';
import { ReactComponent as WatcherIcon } from '../../assets/img/watcher-icon.svg';

import './style.css';

const ListItem = ({
	avatar_url,
	description,
	full_name,
	language,
	login,
	stargazers_count,
	watchers,
}) => {
	return (
		<div className='list-item'>
			<div className='list-item__details'>
				<div className='avatar'>
					{avatar_url ? <img src={avatar_url} alt='avatar' /> : <DefaultAvatar />}
				</div>
				<div>
					<h4>{full_name}</h4>
					<p className='info-text mt-8'>{login}</p>
					<p className='info-text mt-2'>{language}</p>
					<p className='additional-text mt-6'>{description}</p>
				</div>
			</div>
			<div className='list-items-statistic text-bold'>
				<p>
					<StarIcon /> {stargazers_count} <span className='additional-text'>stars</span>
				</p>
				<p className='heading-text'>
					<WatcherIcon /> {watchers} wathchers
				</p>
			</div>
		</div>
	);
};

export default ListItem;
