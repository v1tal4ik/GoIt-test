import React from 'react';
import './style.css';

const CommonInput = (props) => {
	const { name, type, className, placeholder, register } = props;

	return (
		<div className='common-input__wrapper'>
			<input
				autoComplete='off'
				type={type}
				className={`default-input ${className ? className : ''}`}
				{...register(name)}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default CommonInput;
