import { useMemo } from 'react';
import { LIMIT } from '../../constants';

const range = (start, end) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ totalCount, currentPage }) => {
	const siblingCount = 3;

	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(totalCount / LIMIT);

		const totalPageNumbers = siblingCount + 5;

		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

		let middleRange = range(leftSiblingIndex, rightSiblingIndex);
		return [...middleRange];
	}, [totalCount, siblingCount, currentPage]);

	return paginationRange;
};
