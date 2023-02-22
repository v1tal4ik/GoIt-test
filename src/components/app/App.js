/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { UseDebounce } from '../../helpers/useDebounce';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { fetchRepositories } from '../../redux/actions';

import CommonInput from '../common-input/CommonInput';
import CommonPagination from '../common-pagination/CommonPagination';
import ListItem from '../list-item/ListItem';

import './App.css';

const AppSchema = yup.object({
	searchField: yup.string().trim().required(),
});

const App = () => {
	const dispatch = useDispatch();
	const { total_count, items } = useSelector((state) => state.repositories);
	const [page, setPage] = useState(1);

	const { register, watch } = useForm({
		mode: 'all',
		resolver: yupResolver(AppSchema),
		defaultValues: {
			searchField: 'react',
		},
	});

	const query = watch('searchField');

	const isFirstRun = useRef(true);

	const searchRepositoriesParamsDebounce = UseDebounce((params) => {
		return dispatch(fetchRepositories(params));
	}, 1000);

	useEffect(() => {
		// Reset pagination

		setPage(1);

		searchRepositoriesParamsDebounce({ query, page });
	}, [query]);

	useEffect(() => {
		// Prevent duplicate request, while first render

		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}

		searchRepositoriesParamsDebounce({ query, page });
	}, [page]);

	return (
		<section className='app'>
			<CommonInput name='searchField' type='text' placeholder='Search' register={register} />
			{total_count > 0 && items.length > 0 && (
				<>
					<div className='list-wrapper'>
						{items.map((item, index) => (
							<ListItem key={item.full_name + index} {...item} />
						))}
					</div>

					<CommonPagination currentPage={page} totalCount={total_count} onPageChange={setPage} />
				</>
			)}

			{total_count === 0 && items.length === 0 && (
				<p id='no-result'>По Вашому запиту не знайдено жодного репозиторія </p>
			)}
		</section>
	);
};

export default App;
