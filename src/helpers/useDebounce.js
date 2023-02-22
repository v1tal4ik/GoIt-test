/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import debounce from 'lodash.debounce';

export const UseDebounce = (callback, delay) => {
	const debouncedCallback = useCallback(debounce(callback, delay), []);
	return debouncedCallback;
};
