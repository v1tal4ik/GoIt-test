import React from 'react';
import { usePagination } from './usePagination';
import './style.css';

const CommonPagination = (props) => {
	const { onPageChange, totalCount, currentPage } = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
	});

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];

	return (
		<ul className='pagination-container'>
			<li
				className={`pagination-item ${currentPage === 1 ? 'disabled' : ''} `}
				onClick={onPrevious}>
				Previous
			</li>
			{paginationRange.map((pageNumber) => {
				return (
					<li
						key={pageNumber}
						className={`pagination-item ${pageNumber === currentPage ? 'selected' : ''}`}
						onClick={() => onPageChange(pageNumber)}>
						{pageNumber}
					</li>
				);
			})}
			<li
				className={`pagination-item ${currentPage === lastPage ? 'disabled' : ''} `}
				onClick={onNext}>
				Next
			</li>
		</ul>
	);
};

export default CommonPagination;
